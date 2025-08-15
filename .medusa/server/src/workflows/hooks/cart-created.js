"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const company_1 = require("../../modules/company");
core_flows_1.createCartWorkflow.hooks.cartCreated(async ({ cart }, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    const cartInputdata = cart;
    if (!cartInputdata.metadata?.company_id) {
        return new workflows_sdk_1.StepResponse(undefined, null);
    }
    await remoteLink.create({
        [company_1.COMPANY_MODULE]: {
            company_id: cartInputdata.metadata?.company_id,
        },
        [utils_1.Modules.CART]: {
            cart_id: cartInputdata.id,
        },
    });
    return new workflows_sdk_1.StepResponse(undefined, {
        cart_id: cartInputdata.id,
        company_id: cartInputdata.metadata?.company_id,
    });
}, async (input, { container }) => {
    if (!input) {
        return;
    }
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.dismiss({
        [company_1.COMPANY_MODULE]: {
            company_id: input.company_id,
        },
        [utils_1.Modules.CART]: {
            cart_id: input.cart_id,
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jcmVhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9ob29rcy9jYXJ0LWNyZWF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBMEQ7QUFDMUQscURBQStFO0FBQy9FLDJEQUF1RDtBQUN2RCxtREFBdUQ7QUFHdkQsK0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDbEMsS0FBSyxFQUNILEVBQUUsSUFBSSxFQUFFLEVBQ1IsRUFBRSxTQUFTLEVBQUUsRUFJYixFQUFFO0lBQ0YsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyRSxNQUFNLGFBQWEsR0FBRyxJQUFlLENBQUM7SUFFdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDeEMsT0FBTyxJQUFJLDRCQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDdEIsQ0FBQyx3QkFBYyxDQUFDLEVBQUU7WUFDaEIsVUFBVSxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBVTtTQUMvQztRQUNELENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2QsT0FBTyxFQUFFLGFBQWEsQ0FBQyxFQUFFO1NBQzFCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLDRCQUFZLENBQUMsU0FBUyxFQUFFO1FBQ2pDLE9BQU8sRUFBRSxhQUFhLENBQUMsRUFBRTtRQUN6QixVQUFVLEVBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFvQjtLQUN6RCxDQUFDLENBQUM7QUFDTCxDQUFDLEVBQ0QsS0FBSyxFQUNILEtBQXFELEVBQ3JELEVBQUUsU0FBUyxFQUFFLEVBQ2IsRUFBRTtJQUNGLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLE9BQU87SUFDVCxDQUFDO0lBRUQsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU1RSxNQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDdkIsQ0FBQyx3QkFBYyxDQUFDLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQzdCO1FBQ0QsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDdkI7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQ0YsQ0FBQyJ9