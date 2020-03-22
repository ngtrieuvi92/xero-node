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
class Currency {
    static getAttributeTypeMap() {
        return Currency.attributeTypeMap;
    }
}
exports.Currency = Currency;
Currency.discriminator = undefined;
Currency.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "Code",
        "type": "CurrencyCode"
    },
    {
        "name": "description",
        "baseName": "Description",
        "type": "string"
    }
];
//# sourceMappingURL=currency.js.map