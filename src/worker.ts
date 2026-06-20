interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
  RESEND_API_KEY?: string;
  RESEND_FROM?: string;
  RESEND_SEGMENT_ID?: string;
  RESEND_TOPIC_ID?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function redirect(request: Request, status: string, code?: number) {
  const url = new URL(request.url);
  url.pathname = '/blog/';
  url.search = `?subscribe=${status}`;
  if (code) url.searchParams.set('code', String(code));
  return Response.redirect(url.toString(), 303);
}

async function subscribe(request: Request, env: Env) {
  if (request.method === 'GET') return redirect(request, 'use-form');
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  const form = await request.formData();
  const email = String(form.get('email') || '').trim().toLowerCase();
  const honeypot = String(form.get('company') || '').trim();

  if (honeypot) return redirect(request, 'ok');
  if (!EMAIL_RE.test(email)) return redirect(request, 'invalid');
  const resendApiKey = env.RESEND_API_KEY?.trim();
  if (!resendApiKey) return redirect(request, 'missing-config');

  const body: Record<string, unknown> = {
    email,
    unsubscribed: false
  };

  if (env.RESEND_SEGMENT_ID) body.segments = [{ id: env.RESEND_SEGMENT_ID }];
  if (env.RESEND_TOPIC_ID) body.topics = [{ id: env.RESEND_TOPIC_ID, subscription: 'opt_in' }];

  const response = await fetch('https://api.resend.com/contacts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (response.ok || response.status === 409) {
    return redirect(request, 'ok');
  }

  return redirect(request, 'error', response.status);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/subscribe') return subscribe(request, env);

    return env.ASSETS.fetch(request);
  }
};
