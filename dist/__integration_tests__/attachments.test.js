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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const getAuthorisedXeroClient_1 = require("./getAuthorisedXeroClient");
const config_1 = require("./config");
describe('xeroClient', () => {
    let xeroClient;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        jest.setTimeout(60000); // increase to 60sec so I have time to copy-paste to get an access token
        xeroClient = yield getAuthorisedXeroClient_1.getAuthorisedXeroClient(config_1.config);
    }));
    describe('with an account', () => {
        let accountId;
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            let accountsResponse;
            try {
                accountsResponse = yield xeroClient.accountingApi.getAccounts(xeroClient.tenantIds[0]);
            }
            catch (err) {
                throw err;
            }
            accountId = (accountsResponse.body.accounts && accountsResponse.body.accounts[0].accountID);
        }));
        it('upload an attachment', () => __awaiter(void 0, void 0, void 0, function* () {
            const filename = 'test.jpg';
            const pathToUpload = path.join('src', '__integration_tests__', filename);
            const filesize = fs.statSync(pathToUpload).size;
            const readStream = fs.createReadStream(pathToUpload);
            const attachmentsResponse = yield xeroClient.accountingApi.createAccountAttachmentByFileName(xeroClient.tenantIds[0], accountId, filename, readStream, {
                headers: {
                    'Content-Type': 'image/jpg',
                    'Content-Length': filesize.toString()
                }
            });
            expect(attachmentsResponse.response.statusCode).toBe(200);
            expect(attachmentsResponse.body.attachments).toBeTruthy();
            expect(attachmentsResponse.body.attachments && attachmentsResponse.body.attachments[0].fileName).toBe(filename);
            // TODO: check that attachment looks good in Xero UI
        }));
        it('get attachments', () => __awaiter(void 0, void 0, void 0, function* () {
            const attachmentsResponse = yield xeroClient.accountingApi.getAccountAttachments(xeroClient.tenantIds[0], accountId);
            expect(attachmentsResponse.response.statusCode).toBe(200);
            expect(attachmentsResponse.body.attachments).toBeTruthy();
            expect(attachmentsResponse.body.attachments && attachmentsResponse.body.attachments[0].contentLength).toBeGreaterThan(0);
        }));
        it('get attachment by id', () => __awaiter(void 0, void 0, void 0, function* () {
            const attachmentsResponse = yield xeroClient.accountingApi.getAccountAttachments(xeroClient.tenantIds[0], accountId);
            if (!attachmentsResponse.body.attachments || !attachmentsResponse.body.attachments[0]) {
                throw new Error('no attachments exist');
            }
            const attachment = attachmentsResponse.body.attachments[0];
            const attachmentResponse = yield xeroClient.accountingApi.getAccountAttachmentById(xeroClient.tenantIds[0], accountId, attachment.attachmentID || '', attachment.mimeType || '', {
                headers: {
                    'accept': 'image/jpg'
                }
            });
            expect(attachmentResponse.response.statusCode).toBe(200);
            fs.writeFileSync(attachment.fileName || '', attachmentResponse.body, { encoding: null });
            // TODO: check that saved file looks good in local filesystem
        }));
    });
});
//# sourceMappingURL=attachments.test.js.map