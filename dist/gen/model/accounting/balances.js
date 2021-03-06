"use strict";
/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* The raw AccountsReceivable(sales invoices) and AccountsPayable(bills) outstanding and overdue amounts, not converted to base currency (read only)
*/
class Balances {
    static getAttributeTypeMap() {
        return Balances.attributeTypeMap;
    }
}
exports.Balances = Balances;
Balances.discriminator = undefined;
Balances.attributeTypeMap = [
    {
        "name": "accountsReceivable",
        "baseName": "AccountsReceivable",
        "type": "AccountsReceivable"
    },
    {
        "name": "accountsPayable",
        "baseName": "AccountsPayable",
        "type": "AccountsPayable"
    }
];
//# sourceMappingURL=balances.js.map