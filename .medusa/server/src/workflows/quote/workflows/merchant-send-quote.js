"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merchantSendQuoteWorkflow = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const update_quote_1 = require("./update-quote");
/*
  A workflow that sends a quote to the customer.
  
  A merchant can perform any changes that the customer requests or the merchant deems necessary through the
  order edit functionality of the draft order. Once its ready for review, the merchant can then send
  it over to the customer.
*/
exports.merchantSendQuoteWorkflow = (0, workflows_sdk_1.createWorkflow)("merchant-send-quote-workflow", function (input) {
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
                status: "pending_customer",
            },
        ],
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnQtc2VuZC1xdW90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcXVvdGUvd29ya2Zsb3dzL21lcmNoYW50LXNlbmQtcXVvdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQTBEO0FBQzFELDJEQUF5RDtBQUN6RCxpREFBc0Q7QUFFdEQ7Ozs7OztFQU1FO0FBQ1csUUFBQSx5QkFBeUIsR0FBRyxJQUFBLDhCQUFjLEVBQ3JELDhCQUE4QixFQUM5QixVQUFVLEtBQTJCO0lBQ25DLElBQUEsK0JBQWtCLEVBQUM7UUFDakIsV0FBVyxFQUFFLE9BQU87UUFDcEIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDakMsSUFBSSxFQUFFLEtBQUs7UUFDWCxzQkFBc0IsRUFBRSxJQUFJO0tBQzdCLENBQUMsQ0FBQztJQUVILG1DQUFvQixDQUFDLFNBQVMsQ0FBQztRQUM3QixLQUFLLEVBQUU7WUFDTDtnQkFDRSxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0I7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FDRixDQUFDIn0=