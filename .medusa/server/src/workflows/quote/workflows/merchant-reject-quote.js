"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merchantRejectQuoteWorkflow = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const validate_quote_rejection_1 = require("../steps/validate-quote-rejection");
const update_quote_1 = require("./update-quote");
/*
  A workflow that rejects a quote by a merchant.
  
  Once the merchant rejects the quote, we update the status of the quote to a rejection by merchant.
*/
exports.merchantRejectQuoteWorkflow = (0, workflows_sdk_1.createWorkflow)("merchant-reject-quote-workflow", function (input) {
    const quote = (0, core_flows_1.useRemoteQueryStep)({
        entry_point: "quote",
        fields: ["id", "status"],
        variables: { id: input.quote_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, validate_quote_rejection_1.validateQuoteRejectionStep)({ quote });
    update_quote_1.updateQuotesWorkflow.runAsStep({
        input: [
            {
                id: input.quote_id,
                status: "merchant_rejected",
            },
        ],
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnQtcmVqZWN0LXF1b3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9xdW90ZS93b3JrZmxvd3MvbWVyY2hhbnQtcmVqZWN0LXF1b3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUEwRDtBQUMxRCwyREFBeUQ7QUFFekQsZ0ZBQStFO0FBQy9FLGlEQUFzRDtBQUV0RDs7OztFQUlFO0FBQ1csUUFBQSwyQkFBMkIsR0FBRyxJQUFBLDhCQUFjLEVBQ3ZELGdDQUFnQyxFQUNoQyxVQUFVLEtBQTJCO0lBQ25DLE1BQU0sS0FBSyxHQUFlLElBQUEsK0JBQWtCLEVBQUM7UUFDM0MsV0FBVyxFQUFFLE9BQU87UUFDcEIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztRQUN4QixTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNqQyxJQUFJLEVBQUUsS0FBSztRQUNYLHNCQUFzQixFQUFFLElBQUk7S0FDN0IsQ0FBQyxDQUFDO0lBRUgsSUFBQSxxREFBMEIsRUFBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFdEMsbUNBQW9CLENBQUMsU0FBUyxDQUFDO1FBQzdCLEtBQUssRUFBRTtZQUNMO2dCQUNFLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUTtnQkFDbEIsTUFBTSxFQUFFLG1CQUFtQjthQUM1QjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUMifQ==