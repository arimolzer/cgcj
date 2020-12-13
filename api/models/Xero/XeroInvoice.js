/**
 * XeroInvoice.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    originId: {
      type: 'string',
      columnType: 'varchar(255)',
      required: true,
    },



    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  },

};

// {
//   "Type": "ACCREC",
//   "InvoiceID": "7de65403-6401-49f7-a5bd-39dec9597b4d",
//   "InvoiceNumber": "INV-0001",
//   "Reference": "",
//   "Payments": [
//   {
//     "PaymentID": "ef59f04f-cd49-43b2-a25d-25c361f913d2",
//     "Date": "/Date(1592352000000+0000)/",
//     "Amount": 80,
//     "CurrencyRate": 1,
//     "HasAccount": false,
//     "HasValidationErrors": false
//   }
// ],
//   "CreditNotes": [],
//   "Prepayments": [],
//   "Overpayments": [],
//   "AmountDue": 0,
//   "AmountPaid": 80,
//   "AmountCredited": 0,
//   "CurrencyRate": 1,
//   "IsDiscounted": false,
//   "HasAttachments": false,
//   "HasErrors": false,
//   "Contact": {
//   "ContactID": "5d9cb177-afad-44a0-b223-173307b0e547",
//     "Name": "BaseState Pty Ltd",
//     "Addresses": [],
//     "Phones": [],
//     "ContactGroups": [],
//     "ContactPersons": [],
//     "HasValidationErrors": false
// },
//   "DateString": "2020-06-17T00:00:00",
//   "Date": "/Date(1592352000000+0000)/",
//   "DueDateString": "2020-06-17T00:00:00",
//   "DueDate": "/Date(1592352000000+0000)/",
//   "Status": "PAID",
//   "LineAmountTypes": "Exclusive",
//   "LineItems": [],
//   "SubTotal": 72.73,
//   "TotalTax": 7.27,
//   "Total": 80,
//   "UpdatedDateUTC": "/Date(1592352406437+0000)/",
//   "CurrencyCode": "AUD",
//   "FullyPaidOnDate": "/Date(1592352000000+0000)/"
// }
