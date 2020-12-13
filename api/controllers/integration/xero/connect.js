module.exports = {

  friendlyName: 'Connect to XERO',

  description: 'Initiate OAuth2 with XERO',

  exits: {
    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.'
    },
    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal welcome page.'
    },
  },

  fn: async function () {

    try {
      let xero = await sails.helpers.getXeroInstance();
      let consentUrl = await xero.buildConsentUrl();

      return this.res.redirect(consentUrl);

    } catch (e) {
      throw 'error';
    }

    return {};
  }
};
