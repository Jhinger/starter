import { SendEmailCommand } from '@aws-sdk/client-sesv2';
import { Resource } from 'sst';
import { client } from '$email/client';

export const SendCode = async (email: string, code: string) => {
	await client.send(
		new SendEmailCommand({
			FromEmailAddress: '',
			Destination: {
				ToAddresses: [email]
			},
			Content: {
				Simple: {
					Subject: {
						Data: '[] Verification Code'
					},
					Body: {
						Html: {
							Data: `Your verification code is: <br /><h1><strong>${code}</strong></h1>`
						}
					}
				}
			}
		})
	);
};
