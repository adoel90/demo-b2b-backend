"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuoteRejectionStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.validateQuoteRejectionStep = (0, workflows_sdk_1.createStep)("validate-quote-rejection-step", async function ({ quote }) {
    if (["accepted"].includes(quote.status)) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Quote is already accepted by customer`);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtcXVvdGUtcmVqZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9xdW90ZS9zdGVwcy92YWxpZGF0ZS1xdW90ZS1yZWplY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXdEO0FBQ3hELHFFQUErRDtBQUdsRCxRQUFBLDBCQUEwQixHQUFHLElBQUEsMEJBQVUsRUFDbEQsK0JBQStCLEVBQy9CLEtBQUssV0FBVyxFQUFFLEtBQUssRUFBeUI7SUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN4QyxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5Qix1Q0FBdUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDLENBQ0YsQ0FBQyJ9