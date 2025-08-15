"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerAcceptQuoteWorkflow = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const update_order_1 = require("../../order/workflows/update-order");
const validate_quote_acceptance_1 = require("../steps/validate-quote-acceptance");
const update_quote_1 = require("./update-quote");
/*
  A workflow that accepts a quote by a customer.
  
  Once the customer accepts the quote, any staged changes made on the draft order is then committed.
  The draft order is then converted to an actual order ready for processing.
*/
exports.customerAcceptQuoteWorkflow = (0, workflows_sdk_1.createWorkflow)("customer-accept-quote-workflow", function (input) {
    const quote = (0, core_flows_1.useRemoteQueryStep)({
        entry_point: "quote",
        fields: ["id", "draft_order_id", "status"],
        variables: { id: input.quote_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, validate_quote_acceptance_1.validateQuoteAcceptanceStep)({ quote });
    update_quote_1.updateQuotesWorkflow.runAsStep({
        input: [{ id: input.quote_id, status: "accepted" }],
    });
    core_flows_1.confirmOrderEditRequestWorkflow.runAsStep({
        input: {
            order_id: quote.draft_order_id,
            confirmed_by: input.customer_id,
        },
    });
    update_order_1.updateOrderWorkflow.runAsStep({
        input: {
            id: quote.draft_order_id,
            is_draft_order: false,
            status: utils_1.OrderStatus.PENDING,
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItYWNjZXB0LXF1b3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9xdW90ZS93b3JrZmxvd3MvY3VzdG9tZXItYWNjZXB0LXF1b3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUc4QjtBQUM5QixxREFBd0Q7QUFDeEQsMkRBQXlEO0FBQ3pELHFFQUF5RTtBQUN6RSxrRkFBaUY7QUFDakYsaURBQXNEO0FBRXREOzs7OztFQUtFO0FBQ1csUUFBQSwyQkFBMkIsR0FBRyxJQUFBLDhCQUFjLEVBQ3ZELGdDQUFnQyxFQUNoQyxVQUFVLEtBQWdEO0lBQ3hELE1BQU0sS0FBSyxHQUFHLElBQUEsK0JBQWtCLEVBQUM7UUFDL0IsV0FBVyxFQUFFLE9BQU87UUFDcEIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQztRQUMxQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNqQyxJQUFJLEVBQUUsS0FBSztRQUNYLHNCQUFzQixFQUFFLElBQUk7S0FDN0IsQ0FBQyxDQUFDO0lBRUgsSUFBQSx1REFBMkIsRUFBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFdkMsbUNBQW9CLENBQUMsU0FBUyxDQUFDO1FBQzdCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO0tBQ3BELENBQUMsQ0FBQztJQUVILDRDQUErQixDQUFDLFNBQVMsQ0FBQztRQUN4QyxLQUFLLEVBQUU7WUFDTCxRQUFRLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDOUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxXQUFXO1NBQ2hDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsa0NBQW1CLENBQUMsU0FBUyxDQUFDO1FBQzVCLEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYztZQUN4QixjQUFjLEVBQUUsS0FBSztZQUNyQixNQUFNLEVBQUUsbUJBQVcsQ0FBQyxPQUFPO1NBQzVCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUMifQ==