const xeroNode = require('xero-node');

module.exports = {

  friendlyName: 'Connect to XERO',

  description: 'Initiate OAuth2 with XERO',

  exits: {
    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.'
    },
    error: {
      statusCode: 500,
      description: 'An error occurred assigning tokens from callback.'
    },
  },

  fn: async function () {

    let xero = await sails.helpers.getXeroInstance();
    const tokenSet = await xero.apiCallback(this.req.url);

    try {
      await XeroAccount.findOrCreate({
        idToken: tokenSet.id_token
      }, {
        idToken: tokenSet.id_token,
        accessToken: tokenSet.access_token,
        expiresAt: tokenSet.expires_at,
        tokenType: tokenSet.token_type,
        refreshToken: tokenSet.refresh_token,
        scope: tokenSet.scope,
        sessionState: tokenSet.session_state
      });

      await xero.updateTenants();

      console.log(xero.tenants);

      xero.tenants.map((tenant) => {
        XeroTenant.findOrCreate({
          originId: tenant.tenantId
        }, {
          originId: tenant.tenantId
        });
      });

      this.req.session.xeroTokenSet = tokenSet;
      this.req.session.xeroTenantId = xero.tenants[0].tenantId;

      // Change this to foreach over tenants

      console.log(this.req.session.xeroTenantId, 'tenant ID');

    } catch (e) {
      return this.res.json({
        'status': 'error'
      });
    }

    return this.res.redirect('/xero/invoices');
  },
};
