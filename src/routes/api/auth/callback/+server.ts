import { redirect } from '@sveltejs/kit';
import { setTokens } from '$auth/client';
import { createAuthClient } from '$auth/client';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent) {
	const code = event.url.searchParams.get('code');
	const client = createAuthClient(event);

	try {
		const tokens = await client.exchange(code!, event.url.origin + '/api/auth/callback');
		if (!tokens.err) {
			setTokens(event, tokens.tokens.access, tokens.tokens.refresh);
		} else {
			throw tokens.err;
		}
	} catch (error) {
		console.error(error);
	}

	redirect(302, '/projects');
}
