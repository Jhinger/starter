import { redirect } from '@sveltejs/kit';
import { createAuthClient } from '$auth/client';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent) {
	const client = createAuthClient(event);

	const { url } = await client.authorize(event.url.origin + '/api/auth/callback', 'code');
	return redirect(302, url);
}
