"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApprovalStatusStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const approval_1 = require("../../../modules/approval");
const types_1 = require("../../../types");
exports.createApprovalStatusStep = (0, workflows_sdk_1.createStep)("create-approval-status", async (cartIds, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const approvalModuleService = container.resolve(approval_1.APPROVAL_MODULE);
    const { data: [existingApprovalStatus], } = await query.graph({
        entity: "approval_status",
        fields: ["*"],
        filters: {
            cart_id: cartIds[0],
        },
    });
    if (existingApprovalStatus) {
        const [approvalStatus] = await approvalModuleService.updateApprovalStatuses([
            {
                id: existingApprovalStatus.id,
                status: types_1.ApprovalStatusType.PENDING,
            },
        ]);
        return new workflows_sdk_1.StepResponse(approvalStatus, [approvalStatus.id]);
    }
    const approvalStatusesToCreate = cartIds.map((cartId) => ({
        cart_id: cartId,
        status: types_1.ApprovalStatusType.PENDING,
    }));
    const [approvalStatus] = await approvalModuleService.createApprovalStatuses(approvalStatusesToCreate);
    return new workflows_sdk_1.StepResponse(approvalStatus, [approvalStatus.id]);
}, async (statusIds, { container }) => {
    if (!statusIds) {
        return;
    }
    const approvalModuleService = container.resolve(approval_1.APPROVAL_MODULE);
    await approvalModuleService.deleteApprovalStatuses(statusIds);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFwcHJvdmFsLXN0YXR1cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXBwcm92YWwvc3RlcHMvY3JlYXRlLWFwcHJvdmFsLXN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBc0U7QUFDdEUscUVBQTZFO0FBQzdFLHdEQUE0RDtBQUM1RCwwQ0FBNEU7QUFFL0QsUUFBQSx3QkFBd0IsR0FBRyxJQUFBLDBCQUFVLEVBQ2hELHdCQUF3QixFQUN4QixLQUFLLEVBQUUsT0FBaUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDekMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxNQUFNLHFCQUFxQixHQUN6QixTQUFTLENBQUMsT0FBTyxDQUF5QiwwQkFBZSxDQUFDLENBQUM7SUFFN0QsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLHNCQUFzQixDQUFDLEdBQy9CLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDcEI7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUNwQixNQUFNLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDO1lBQ2pEO2dCQUNFLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFO2dCQUM3QixNQUFNLEVBQUUsMEJBQWtCLENBQUMsT0FBTzthQUNuQztTQUNGLENBQUMsQ0FBQztRQUVMLE9BQU8sSUFBSSw0QkFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxNQUFNLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsT0FBTyxFQUFFLE1BQU07UUFDZixNQUFNLEVBQUUsMEJBQWtCLENBQUMsT0FBTztLQUNuQyxDQUFDLENBQUMsQ0FBQztJQUVKLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxNQUFNLHFCQUFxQixDQUFDLHNCQUFzQixDQUN6RSx3QkFBd0IsQ0FDekIsQ0FBQztJQUVGLE9BQU8sSUFBSSw0QkFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9ELENBQUMsRUFDRCxLQUFLLEVBQUUsU0FBbUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDM0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2YsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLHFCQUFxQixHQUN6QixTQUFTLENBQUMsT0FBTyxDQUF5QiwwQkFBZSxDQUFDLENBQUM7SUFFN0QsTUFBTSxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQ0YsQ0FBQyJ9