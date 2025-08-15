"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuoteAcceptanceStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.validateQuoteAcceptanceStep = (0, workflows_sdk_1.createStep)("validate-quote-acceptance-step", async function ({ quote }) {
    if (!["pending_customer"].includes(quote.status)) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Cannot accept quote when quote status is ${quote.status}`);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtcXVvdGUtYWNjZXB0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcXVvdGUvc3RlcHMvdmFsaWRhdGUtcXVvdGUtYWNjZXB0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBd0Q7QUFDeEQscUVBQStEO0FBR2xELFFBQUEsMkJBQTJCLEdBQUcsSUFBQSwwQkFBVSxFQUNuRCxnQ0FBZ0MsRUFDaEMsS0FBSyxXQUFXLEVBQUUsS0FBSyxFQUF5QjtJQUM5QyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNqRCxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5Qiw0Q0FBNEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUMzRCxDQUFDO0lBQ0osQ0FBQztBQUNILENBQUMsQ0FDRixDQUFDIn0=