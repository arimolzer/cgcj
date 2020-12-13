/**
 * XeroAccount.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    idToken: {
      type: 'string',
      columnType: 'varchar(2040)',
      required: true,
    },
    accessToken: {
      type: 'string',
      columnType: 'varchar(2040)',
      required: true,
    },
    expiresAt: {
      type: 'number',
      columnType: 'integer',
      required: true
    },
    refreshToken: {
      type: 'string',
      required: true
    },
    scope: {
      type: 'string',
      required: true
    },
    sessionState: {
      type: 'string',
      required: true
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
  },
};

