import { PasswordProvider } from '@openauthjs/openauth/provider/password';
import { PasswordUI } from '@openauthjs/openauth/ui/password';
import { SendCode } from '$email/auth';
import { DynamoStorage } from '@openauthjs/openauth/storage/dynamo';
import { issuer } from '@openauthjs/openauth';
import { subjects } from '$auth/subjects';
import { handle } from 'hono/aws-lambda';

const app = issuer({
	providers: {
		password: PasswordProvider(
			PasswordUI({
				sendCode: async (email, code) => {
					await SendCode(email, code);
				}
			})
		)
	},
	allow: async (input, req) => {
		return true;
	},
	subjects,
	async success(context, value) {
		let email = '';
		if (value.provider === 'password') {
			email = value.email;
		}
		return context.subject('user', {
			id: 'abc',
			email: email
		});
	},
	storage: DynamoStorage({ table: 'Auth' })
});

export const handler = handle(app);
