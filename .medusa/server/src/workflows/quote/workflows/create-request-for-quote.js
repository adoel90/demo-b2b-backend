"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestForQuoteWorkflow = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const create_quote_1 = require("./create-quote");
/*
  A workflow that creates a request for quote.
  
  Quotes contain links to a draft order, customer and cart. Any changes (updated price, quantity, etc) made on the quote
  is performed within the scope of a draft order. We then re-use the order edit functionality of the order to stage
  any changes to the quote made by the merchant.

  The customer can then accept or reject the changes. The lifecycle of the quote is managed through its status,
  that is performed by independent workflows - accept / reject.
*/
exports.createRequestForQuoteWorkflow = (0, workflows_sdk_1.createWorkflow)("create-request-for-quote", function (input) {
    const cart = (0, core_flows_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: [
            "id",
            "sales_channel_id",
            "currency_code",
            "region_id",
            "customer.id",
            "customer.email",
            "shipping_address.*",
            "billing_address.*",
            "items.*",
            "shipping_methods.*",
            "promotions.code",
        ],
        variables: { id: input.cart_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const customer = (0, core_flows_1.useRemoteQueryStep)({
        entry_point: "customer",
        fields: ["id", "customer"],
        variables: { id: input.customer_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "customer-query" });
    const orderInput = (0, workflows_sdk_1.transform)({ cart, customer }, ({ cart, customer }) => {
        return {
            is_draft_order: true,
            status: utils_1.OrderStatus.DRAFT,
            sales_channel_id: cart.sales_channel_id,
            email: customer.email,
            customer_id: customer.id,
            billing_address: cart.billing_address,
            shipping_address: cart.shipping_address,
            items: cart.items,
            region_id: cart.region_id,
            promo_codes: cart.promotions.map(({ code }) => code),
            currency_code: cart.currency_code,
            shipping_methods: cart.shipping_methods,
        };
    });
    const draftOrder = core_flows_1.createOrdersWorkflow.runAsStep({
        input: orderInput,
    });
    const orderEditInput = (0, workflows_sdk_1.transform)({ draftOrder }, ({ draftOrder }) => {
        return {
            order_id: draftOrder.id,
            description: "",
            internal_note: "",
            metadata: {},
        };
    });
    const changeOrder = core_flows_1.beginOrderEditOrderWorkflow.runAsStep({
        input: orderEditInput,
    });
    const quotes = create_quote_1.createQuotesWorkflow.runAsStep({
        input: [
            {
                draft_order_id: draftOrder.id,
                cart_id: cart.id,
                customer_id: customer.id,
                order_change_id: changeOrder.id,
            },
        ],
    });
    return new workflows_sdk_1.WorkflowResponse({ quote: quotes[0] });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJlcXVlc3QtZm9yLXF1b3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9xdW90ZS93b3JrZmxvd3MvY3JlYXRlLXJlcXVlc3QtZm9yLXF1b3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUk4QjtBQUM5QixxREFBd0Q7QUFDeEQsMkRBSWlDO0FBQ2pDLGlEQUFzRDtBQUV0RDs7Ozs7Ozs7O0VBU0U7QUFDVyxRQUFBLDZCQUE2QixHQUFHLElBQUEsOEJBQWMsRUFDekQsMEJBQTBCLEVBQzFCLFVBQVUsS0FBK0M7SUFDdkQsTUFBTSxJQUFJLEdBQUcsSUFBQSwrQkFBa0IsRUFBQztRQUM5QixXQUFXLEVBQUUsTUFBTTtRQUNuQixNQUFNLEVBQUU7WUFDTixJQUFJO1lBQ0osa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixXQUFXO1lBQ1gsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxvQkFBb0I7WUFDcEIsaUJBQWlCO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDaEMsSUFBSSxFQUFFLEtBQUs7UUFDWCxzQkFBc0IsRUFBRSxJQUFJO0tBQzdCLENBQUMsQ0FBQztJQUVILE1BQU0sUUFBUSxHQUFHLElBQUEsK0JBQWtCLEVBQUM7UUFDbEMsV0FBVyxFQUFFLFVBQVU7UUFDdkIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQztRQUMxQixTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUNwQyxJQUFJLEVBQUUsS0FBSztRQUNYLHNCQUFzQixFQUFFLElBQUk7S0FDN0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFFdEMsTUFBTSxVQUFVLEdBQUcsSUFBQSx5QkFBUyxFQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtRQUN0RSxPQUFPO1lBQ0wsY0FBYyxFQUFFLElBQUk7WUFDcEIsTUFBTSxFQUFFLG1CQUFXLENBQUMsS0FBSztZQUN6QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztZQUNyQixXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDeEIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDcEQsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDeEMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxVQUFVLEdBQUcsaUNBQW9CLENBQUMsU0FBUyxDQUFDO1FBQ2hELEtBQUssRUFBRSxVQUFVO0tBQ2xCLENBQUMsQ0FBQztJQUVILE1BQU0sY0FBYyxHQUFHLElBQUEseUJBQVMsRUFBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFO1FBQ2xFLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQUU7WUFDdkIsV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsRUFBRTtZQUNqQixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sV0FBVyxHQUFHLHdDQUEyQixDQUFDLFNBQVMsQ0FBQztRQUN4RCxLQUFLLEVBQUUsY0FBYztLQUN0QixDQUFDLENBQUM7SUFFSCxNQUFNLE1BQU0sR0FBRyxtQ0FBb0IsQ0FBQyxTQUFTLENBQUM7UUFDNUMsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsY0FBYyxFQUFFLFVBQVUsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLFdBQVcsRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDeEIsZUFBZSxFQUFFLFdBQVcsQ0FBQyxFQUFFO2FBQ2hDO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksZ0NBQWdCLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQ0YsQ0FBQyJ9