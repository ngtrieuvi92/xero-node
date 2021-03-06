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
import { Contact } from './contact';
import { CurrencyCode } from './currencyCode';
import { LineItem } from './lineItem';
import { QuoteLineAmountTypes } from './quoteLineAmountTypes';
import { QuoteStatusCodes } from './quoteStatusCodes';
export declare class Quote {
    /**
    * QuoteID GUID is automatically generated and is returned after create or GET.
    */
    'quoteID'?: string;
    /**
    * Unique alpha numeric code identifying a quote (Max Length = 255)
    */
    'quoteNumber'?: string;
    /**
    * Additional reference number
    */
    'reference'?: string;
    /**
    * Terms of the quote
    */
    'terms'?: string;
    'contact'?: Contact;
    /**
    * See LineItems
    */
    'lineItems'?: Array<LineItem>;
    /**
    * Date quote was issued – YYYY-MM-DD. If the Date element is not specified it will default to the current date based on the timezone setting of the organisation
    */
    'date'?: string;
    /**
    * Date the quote was issued (YYYY-MM-DD)
    */
    'dateString'?: string;
    /**
    * Date the quote expires – YYYY-MM-DD.
    */
    'expiryDate'?: string;
    /**
    * Date the quote expires – YYYY-MM-DD.
    */
    'expiryDateString'?: string;
    'status'?: QuoteStatusCodes;
    'currencyCode'?: CurrencyCode;
    /**
    * The currency rate for a multicurrency quote
    */
    'currencyRate'?: number;
    /**
    * Total of quote excluding taxes.
    */
    'subTotal'?: number;
    /**
    * Total tax on quote
    */
    'totalTax'?: number;
    /**
    * Total of Quote tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn’t equal the sum of the LineAmounts
    */
    'total'?: number;
    /**
    * Total of discounts applied on the quote line items
    */
    'totalDiscount'?: number;
    /**
    * Title text for the quote
    */
    'title'?: string;
    /**
    * Summary text for the quote
    */
    'summary'?: string;
    /**
    * See BrandingThemes
    */
    'brandingThemeID'?: string;
    /**
    * Last modified date UTC format
    */
    'updatedDateUTC'?: Date;
    'lineAmountTypes'?: QuoteLineAmountTypes;
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
