"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const company_1 = __importDefault(require("../modules/company"));
const approval_1 = __importDefault(require("../modules/approval"));
exports.default = (0, utils_1.defineLink)(company_1.default.linkable.company, approval_1.default.linkable.approvalSettings);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1hcHByb3ZhbC1zZXR0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL2NvbXBhbnktYXBwcm92YWwtc2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUF1RDtBQUN2RCxpRUFBK0M7QUFDL0MsbUVBQWlEO0FBRWpELGtCQUFlLElBQUEsa0JBQVUsRUFDdkIsaUJBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUM5QixrQkFBYyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDekMsQ0FBQyJ9