/// <reference path="untyped.d.ts" />
import { TokenSet } from 'openid-client';
import * as xero from './gen/api';
export interface IXeroClientConfig {
    clientId: string;
    clientSecret: string;
    redirectUris: string[];
    scopes: string[];
    state?: string;
}
export declare class XeroClient {
    private readonly config;
    constructor(config: IXeroClientConfig);
    private tokenSet;
    private _tenantIds;
    readonly accountingApi: xero.AccountingApi;
    private openIdClient;
    get tenantIds(): string[];
    buildClient(): Promise<void>;
    buildConsentUrl(): Promise<any>;
    setAccessTokenFromRedirectUri(url: string): Promise<void>;
    readIdTokenClaims(): Promise<import("openid-client").IdTokenClaims>;
    readTokenSet(): Promise<TokenSet>;
    setTokenSet(savedTokens: TokenSet): Promise<void>;
    refreshToken(): Promise<void>;
    fetchConnectedTenantIds(): Promise<void>;
    private setAccessTokenForAllApis;
}
