const xeroNode = require('xero-node');

const clientId = '6110804646BF49B1BAF8CA659605C39A';
const clientSecret = '7T6hEMYSU_y4P_Gnjdu6_Y_s0nJkdHwS2OugZ0RkrIoAKmJZ';
const redirectUri = 'http://localhost:1337/xero/connect/oauth2-callback';
const scopes = 'openid profile email accounting.transactions accounting.transactions.read accounting.reports.read assets.read';

module.exports = {

  friendlyName: 'Get instance of XERO Client',

  description: 'Return a fully initialised instance of the XERO Client',

  fn: async function () {
    let xero = new xeroNode.XeroClient({
      clientId: clientId,
      clientSecret: clientSecret,
      redirectUris: [redirectUri],
      scopes: scopes.split(" "),
      httpTimeout: 3000 // ms (optional)
    });
    return await xero.initialize();
  }
};
