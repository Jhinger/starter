/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'starter',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			home: 'aws'
		};
	},
	async run() {
		const auth = new sst.aws.Auth('Auth', {
			issuer: {
				handler: 'src/auth/index.handler',
				link: []
			}
		});

		new sst.aws.SvelteKit('MyWeb');
	}
});
