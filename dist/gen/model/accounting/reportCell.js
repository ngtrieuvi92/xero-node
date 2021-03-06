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
class ReportCell {
    static getAttributeTypeMap() {
        return ReportCell.attributeTypeMap;
    }
}
exports.ReportCell = ReportCell;
ReportCell.discriminator = undefined;
ReportCell.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "Value",
        "type": "string"
    },
    {
        "name": "attributes",
        "baseName": "Attributes",
        "type": "Array<ReportAttribute>"
    }
];
//# sourceMappingURL=reportCell.js.map