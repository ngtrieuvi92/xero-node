"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const openid_client_1 = require("openid-client");
const xero = __importStar(require("./gen/api"));
const request = require("request");
class XeroClient {
    constructor(config) {
        this.config = config;
        this.tokenSet = new openid_client_1.TokenSet;
        this._tenantIds = [''];
        // need to set access token before use
        this.accountingApi = new xero.AccountingApi();
        this.buildClient();
    }
    get tenantIds() {
        return this._tenantIds;
    }
    buildClient() {
        return __awaiter(this, void 0, void 0, function* () {
            const issuer = yield openid_client_1.Issuer.discover('https://identity.xero.com');
            this.openIdClient = new issuer.Client({
                client_id: this.config.clientId,
                client_secret: this.config.clientSecret,
                redirect_uris: this.config.redirectUris,
            });
            this.openIdClient[openid_client_1.custom.clock_tolerance] = 5;
        });
    }
    buildConsentUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.openIdClient.authorizationUrl({
                redirect_uri: this.config.redirectUris[0],
                scope: this.config.scopes.join(' ') || 'openid email profile'
            });
            return url;
        });
    }
    setAccessTokenFromRedirectUri(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = this.openIdClient.callbackParams(url);
            const check = Object.assign({}, params);
            this.tokenSet = yield this.openIdClient.callback(this.config.redirectUris[0], params, check);
            this.setAccessTokenForAllApis();
            yield this.fetchConnectedTenantIds();
        });
    }
    readIdTokenClaims() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.tokenSet.claims();
        });
    }
    readTokenSet() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.tokenSet;
        });
    }
    setTokenSet(savedTokens) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tokenSet = savedTokens;
            this.setAccessTokenForAllApis();
        });
    }
    refreshToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.tokenSet) {
                throw new Error('tokenSet is not defined');
            }
            this.tokenSet = yield this.openIdClient.refresh(this.tokenSet.refresh_token);
            this.setAccessTokenForAllApis();
            yield this.fetchConnectedTenantIds();
        });
    }
    fetchConnectedTenantIds() {
        return __awaiter(this, void 0, void 0, function* () {
            // retrieve the authorized tenants from api.xero.com/connections
            const result = yield new Promise((resolve, reject) => {
                request({
                    method: 'GET',
                    uri: 'https://api.xero.com/connections',
                    auth: {
                        bearer: this.tokenSet.access_token
                    },
                    json: true
                }, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
            this._tenantIds = result.body.map(connection => connection.tenantId);
            // Requests to the accounting api will look like this:
            //   let apiResponse = await xeroClient.accountingApi.getInvoices(xeroClient.tenantIds[0]);
        });
    }
    setAccessTokenForAllApis() {
        const accessToken = this.tokenSet.access_token;
        if (typeof accessToken === 'undefined') {
            throw new Error('Access token is undefined!');
        }
        this.accountingApi.accessToken = accessToken;
        // this.payrollApi.accessToken = accessToken;
        // etc.
    }
}
exports.XeroClient = XeroClient;
//# sourceMappingURL=XeroClient.js.map