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
const prompt = __importStar(require("prompt"));
const __1 = require("..");
function getAuthorisedXeroClient(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const xeroClient = new __1.XeroClient(config);
        const url = yield getUserInput('URL after redirect');
        yield xeroClient.setAccessTokenFromRedirectUri(url);
        return xeroClient;
    });
}
exports.getAuthorisedXeroClient = getAuthorisedXeroClient;
function getUserInput(question) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            prompt.start();
            prompt.get(question, (err, result) => {
                prompt.stop();
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result[question]);
                }
            });
        });
    });
}
//# sourceMappingURL=getAuthorisedXeroClient.js.map