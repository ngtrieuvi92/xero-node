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
class LineItemTracking {
    static getAttributeTypeMap() {
        return LineItemTracking.attributeTypeMap;
    }
}
exports.LineItemTracking = LineItemTracking;
LineItemTracking.discriminator = undefined;
LineItemTracking.attributeTypeMap = [
    {
        "name": "trackingCategoryID",
        "baseName": "TrackingCategoryID",
        "type": "string"
    },
    {
        "name": "trackingOptionID",
        "baseName": "TrackingOptionID",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "option",
        "baseName": "Option",
        "type": "string"
    }
];
//# sourceMappingURL=lineItemTracking.js.map