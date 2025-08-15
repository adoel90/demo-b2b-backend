"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const get_cart_approval_status_1 = require("../../utils/get-cart-approval-status");
core_flows_1.updateCartWorkflow.hooks.validate(async ({ cart }, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [queryCart], } = await query.graph({
        entity: "cart",
        fields: ["approvals.*"],
        filters: {
            id: cart.id,
        },
    });
    const { isPendingApproval } = (0, get_cart_approval_status_1.getCartApprovalStatus)(queryCart);
    if (isPendingApproval) {
        throw new Error("Cart is pending approval");
    }
    return new workflows_sdk_1.StepResponse(undefined, null);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtdXBkYXRlLWNhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2hvb2tzL3ZhbGlkYXRlLXVwZGF0ZS1jYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQXNFO0FBQ3RFLHFFQUFpRTtBQUNqRSw0REFBaUU7QUFDakUsbUZBQTZFO0FBRTdFLCtCQUFrQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2xFLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUNsQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN2QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7U0FDWjtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxHQUFHLElBQUEsZ0RBQXFCLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFFL0QsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsT0FBTyxJQUFJLDRCQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDIn0=