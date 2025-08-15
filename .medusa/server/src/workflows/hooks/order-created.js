"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const company_1 = require("../../modules/company");
core_flows_1.createOrderWorkflow.hooks.orderCreated(async ({ order }, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    if (!order.metadata?.company_id) {
        return new workflows_sdk_1.StepResponse(undefined, null);
    }
    await remoteLink.create({
        [utils_1.Modules.ORDER]: {
            order_id: order.id,
        },
        [company_1.COMPANY_MODULE]: {
            company_id: order.metadata?.company_id,
        },
    });
    return new workflows_sdk_1.StepResponse(undefined, order.id);
}, async (orderId, { container }) => {
    if (!orderId) {
        return;
    }
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.dismiss({
        [utils_1.Modules.ORDER]: {
            order_id: orderId,
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY3JlYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvaG9va3Mvb3JkZXItY3JlYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUErRTtBQUMvRSw0REFBa0U7QUFDbEUsMkRBQXVEO0FBQ3ZELG1EQUF1RDtBQUV2RCxnQ0FBbUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUNwQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDakMsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU1RSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksNEJBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN0QixDQUFDLGVBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRTtTQUNuQjtRQUNELENBQUMsd0JBQWMsQ0FBQyxFQUFFO1lBQ2hCLFVBQVUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVU7U0FDdkM7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksNEJBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLENBQUMsRUFDRCxLQUFLLEVBQUUsT0FBc0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDOUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2IsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTVFLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUN2QixDQUFDLGVBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLFFBQVEsRUFBRSxPQUFPO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUMifQ==