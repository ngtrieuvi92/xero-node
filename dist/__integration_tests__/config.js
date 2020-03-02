"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    redirectUris: [
        'http://localhost:5000/callback'
    ],
    scopes: [
        'openid',
        'profile',
        'email',
        'offline_access',
        'accounting.settings',
        'accounting.attachments'
    ]
};
//# sourceMappingURL=config.js.map