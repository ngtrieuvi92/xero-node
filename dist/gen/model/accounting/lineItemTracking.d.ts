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
export declare class LineItemTracking {
    /**
    * The Xero identifier for a tracking category
    */
    'trackingCategoryID'?: string;
    /**
    * The Xero identifier for a tracking category option
    */
    'trackingOptionID'?: string;
    /**
    * The name of the tracking category
    */
    'name'?: string;
    /**
    * See Tracking Options
    */
    'option'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
