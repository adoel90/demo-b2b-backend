"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_flows_1 = require("@medusajs/core-flows");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
const get_cart_approval_status_1 = require("../../utils/get-cart-approval-status");
const check_spending_limit_1 = require("../../utils/check-spending-limit");
core_flows_1.completeCartWorkflow.hooks.validate(async ({ cart }, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [queryCart], } = await query.graph({
        entity: "cart",
        fields: ["approvals.*", "customer_id", "total"],
        filters: {
            id: cart.id,
        },
    });
    // Check if cart is pending approval
    const { isPendingApproval } = (0, get_cart_approval_status_1.getCartApprovalStatus)(queryCart);
    if (isPendingApproval) {
        throw new Error("Cart is pending approval");
    }
    // Check if spending limit will be exceeded
    if (queryCart.customer_id) {
        const { data: [customer], } = await query.graph({
            entity: "customer",
            fields: ["employee.spending_limit"],
            filters: {
                id: queryCart.customer_id,
            },
        });
        if (customer.employee?.spending_limit) {
            const spendLimitExceeded = (0, check_spending_limit_1.checkSpendingLimit)(queryCart, customer);
            if (spendLimitExceeded) {
                throw new Error("Cart total exceeds spending limit");
            }
        }
    }
    return new workflows_sdk_1.StepResponse(undefined, null);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtY2FydC1jb21wbGV0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9ob29rcy92YWxpZGF0ZS1jYXJ0LWNvbXBsZXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBNEQ7QUFDNUQscUVBQWlFO0FBQ2pFLHFEQUFzRTtBQUN0RSxtRkFBNkU7QUFDN0UsMkVBQXNFO0FBRXRFLGlDQUFvQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3BFLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUNsQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDO1FBQy9DLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNaO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsb0NBQW9DO0lBQ3BDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxHQUFHLElBQUEsZ0RBQXFCLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFFL0QsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FDakIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDcEIsTUFBTSxFQUFFLFVBQVU7WUFDbEIsTUFBTSxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDbkMsT0FBTyxFQUFFO2dCQUNQLEVBQUUsRUFBRSxTQUFTLENBQUMsV0FBVzthQUMxQjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsQ0FBQztZQUN0QyxNQUFNLGtCQUFrQixHQUFHLElBQUEseUNBQWtCLEVBQzNDLFNBQWdCLEVBQ2hCLFFBQWUsQ0FDaEIsQ0FBQztZQUVGLElBQUksa0JBQWtCLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sSUFBSSw0QkFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQyJ9