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
class OnlineInvoices {
    static getAttributeTypeMap() {
        return OnlineInvoices.attributeTypeMap;
    }
}
exports.OnlineInvoices = OnlineInvoices;
OnlineInvoices.discriminator = undefined;
OnlineInvoices.attributeTypeMap = [
    {
        "name": "onlineInvoices",
        "baseName": "OnlineInvoices",
        "type": "Array<OnlineInvoice>"
    }
];
//# sourceMappingURL=onlineInvoices.js.map