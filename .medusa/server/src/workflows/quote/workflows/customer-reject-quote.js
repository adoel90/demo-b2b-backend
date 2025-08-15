"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRejectQuoteWorkflow = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const update_quote_1 = require("./update-quote");
/*
  A workflow that rejects a quote by a customer.
  
  Once the customer rejects the quote, the decision then turns to the merchant to perform
  any further adjustments, or let it remain in a rejected state.
*/
exports.customerRejectQuoteWorkflow = (0, workflows_sdk_1.createWorkflow)("customer-reject-quote-workflow", function (input) {
    (0, core_flows_1.useRemoteQueryStep)({
        entry_point: "quote",
        fields: ["id"],
        variables: { id: input.quote_id },
        list: false,
        throw_if_key_not_found: true,
    });
    update_quote_1.updateQuotesWorkflow.runAsStep({
        input: [
            {
                id: input.quote_id,
                status: "customer_rejected",
            },
        ],
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmVqZWN0LXF1b3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9xdW90ZS93b3JrZmxvd3MvY3VzdG9tZXItcmVqZWN0LXF1b3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUEwRDtBQUMxRCwyREFBeUQ7QUFDekQsaURBQXNEO0FBRXREOzs7OztFQUtFO0FBQ1csUUFBQSwyQkFBMkIsR0FBRyxJQUFBLDhCQUFjLEVBQ3ZELGdDQUFnQyxFQUNoQyxVQUFVLEtBQTJCO0lBQ25DLElBQUEsK0JBQWtCLEVBQUM7UUFDakIsV0FBVyxFQUFFLE9BQU87UUFDcEIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDakMsSUFBSSxFQUFFLEtBQUs7UUFDWCxzQkFBc0IsRUFBRSxJQUFJO0tBQzdCLENBQUMsQ0FBQztJQUVILG1DQUFvQixDQUFDLFNBQVMsQ0FBQztRQUM3QixLQUFLLEVBQUU7WUFDTDtnQkFDRSxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRSxtQkFBbUI7YUFDNUI7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FDRixDQUFDIn0=