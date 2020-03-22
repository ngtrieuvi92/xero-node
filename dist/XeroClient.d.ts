/// <reference path="untyped.d.ts" />
/// <reference types="node" />
import { TokenSet } from 'openid-client';
import * as xero from './gen/api';
import http = require('http');
export interface IXeroClientConfig {
    clientId: string;
    clientSecret: string;
    redirectUris: string[];
    scopes: string[];
    state?: string;
}
export interface XeroIdToken {
    nbf: number;
    exp: number;
    iss: string;
    aud: string;
    iat: number;
    at_hash: string;
    sid: string;
    sub: string;
    auth_time: number;
    idp: string;
    xero_userid: string;
    global_session_id: string;
    preferred_username: string;
    email: string;
    given_name: string;
    family_name: string;
    amr: string[];
}
export interface XeroAccessToken {
    nbf: number;
    exp: number;
    iss: string;
    aud: string;
    client_id: string;
    sub: string;
    auth_time: number;
    idp: string;
    xero_userid: string;
    global_session_id: string;
    jti: string;
    scope: string[];
    amr: string[];
}
export declare class XeroClient {
    private readonly config;
    constructor(config: IXeroClientConfig);
    private tokenSet;
    private _tenants;
    readonly accountingApi: xero.AccountingApi;
    openIdClient: any;
    get tenants(): any[];
    initialize(): Promise<this>;
    buildConsentUrl(): Promise<any>;
    apiCallback(callbackUrl: string): Promise<TokenSet>;
    disconnect(connectionId: string): Promise<TokenSet>;
    readIdTokenClaims(): import("openid-client").IdTokenClaims;
    readTokenSet(): TokenSet;
    setTokenSet(tokenSet: TokenSet): void;
    refreshToken(): Promise<TokenSet>;
    refreshTokenUsingTokenSet(tokenSet: TokenSet): Promise<TokenSet>;
    updateTenants(): Promise<{
        id: string;
        tenantId: string;
        tenantType: string;
        orgData: any;
    }[]>;
    queryApi(method: any, uri: any): Promise<{
        response: http.IncomingMessage;
        body: {
            id: string;
            tenantId: string;
            tenantType: string;
            orgData: any;
        }[];
    }>;
    private setAccessToken;
}
