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
class Allocation {
    static getAttributeTypeMap() {
        return Allocation.attributeTypeMap;
    }
}
exports.Allocation = Allocation;
Allocation.discriminator = undefined;
Allocation.attributeTypeMap = [
    {
        "name": "invoice",
        "baseName": "Invoice",
        "type": "Invoice"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "date",
        "baseName": "Date",
        "type": "string"
    }
];
//# sourceMappingURL=allocation.js.map