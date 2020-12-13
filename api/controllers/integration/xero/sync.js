module.exports = {

  friendlyName: 'Begin importing data',

  description: 'Begin asynchronously importing data from the XERO API',

  exits: {
    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.'
    }
  },

  fn: async function () {

    try {
      let xero = await sails.helpers.getXeroInstance();



      await xero.setTokenSet(this.req.session.xeroTokenSet);
      await xero.updateTenants();

      let invoices = await xero.accountingApi
        .getInvoices(this.req.session.xeroTenantId);

      console.log(invoices);

      return this.res.json(invoices);

    } catch (e) {
      console.log(e);
    }

    return {};
  }
};
