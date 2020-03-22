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
class Employee {
    static getAttributeTypeMap() {
        return Employee.attributeTypeMap;
    }
}
exports.Employee = Employee;
Employee.discriminator = undefined;
Employee.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "EmployeeID",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "Status",
        "type": "Employee.StatusEnum"
    },
    {
        "name": "firstName",
        "baseName": "FirstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "LastName",
        "type": "string"
    },
    {
        "name": "externalLink",
        "baseName": "ExternalLink",
        "type": "ExternalLink"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "statusAttributeString",
        "baseName": "StatusAttributeString",
        "type": "string"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    }
];
(function (Employee) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusEnum[StatusEnum["ARCHIVED"] = 'ARCHIVED'] = "ARCHIVED";
        StatusEnum[StatusEnum["GDPRREQUEST"] = 'GDPRREQUEST'] = "GDPRREQUEST";
    })(StatusEnum = Employee.StatusEnum || (Employee.StatusEnum = {}));
})(Employee = exports.Employee || (exports.Employee = {}));
//# sourceMappingURL=employee.js.map