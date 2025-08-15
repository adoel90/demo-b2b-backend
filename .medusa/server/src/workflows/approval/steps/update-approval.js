"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApprovalStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const approval_1 = require("../../../modules/approval");
const types_1 = require("../../../types");
exports.updateApprovalStep = (0, workflows_sdk_1.createStep)("update-approval", async (input, { container }) => {
    const query = container.resolve("query");
    const approvalModule = container.resolve(approval_1.APPROVAL_MODULE);
    const { data: [approval], } = await query.graph({
        entity: "approval",
        fields: ["*"],
        filters: {
            id: input.id,
        },
    });
    if (input.status === types_1.ApprovalStatusType.REJECTED) {
        const { data: approvalsToReject } = await query.graph({
            entity: "approval",
            fields: ["*"],
            filters: {
                cart_id: approval.cart_id,
                id: {
                    $ne: approval.id,
                },
            },
        });
        const updateData = approvalsToReject.map((approval) => ({
            id: approval.id,
            status: types_1.ApprovalStatusType.REJECTED,
            handled_by: input.handled_by,
        }));
        await approvalModule.updateApprovals(updateData);
    }
    const previousData = {
        id: approval.id,
        status: approval.status,
        handled_by: approval.handled_by,
    };
    const [updatedApproval] = await approvalModule.updateApprovals([input]);
    return new workflows_sdk_1.StepResponse(updatedApproval, previousData);
}, async (previousData, { container }) => {
    const approvalModule = container.resolve(approval_1.APPROVAL_MODULE);
    const updateData = Array.isArray(previousData)
        ? previousData
        : [previousData];
    await approvalModule.updateApprovals(updateData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWFwcHJvdmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hcHByb3ZhbC9zdGVwcy91cGRhdGUtYXBwcm92YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBQzdFLHdEQUE0RDtBQUM1RCwwQ0FLd0I7QUFFWCxRQUFBLGtCQUFrQixHQUFHLElBQUEsMEJBQVUsRUFDMUMsaUJBQWlCLEVBQ2pCLEtBQUssRUFDSCxLQUEyQixFQUMzQixFQUFFLFNBQVMsRUFBRSxFQUNnRCxFQUFFO0lBQy9ELE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsTUFBTSxjQUFjLEdBQ2xCLFNBQVMsQ0FBQyxPQUFPLENBQXlCLDBCQUFlLENBQUMsQ0FBQztJQUU3RCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQ2pCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNiLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtTQUNiO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLDBCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pELE1BQU0sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDcEQsTUFBTSxFQUFFLFVBQVU7WUFDbEIsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztnQkFDekIsRUFBRSxFQUFFO29CQUNGLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBRTtpQkFDakI7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RCxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDZixNQUFNLEVBQUUsMEJBQWtCLENBQUMsUUFBUTtZQUNuQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDN0IsQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLGNBQWMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELE1BQU0sWUFBWSxHQUFHO1FBQ25CLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRTtRQUNmLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBdUM7UUFDeEQsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVO0tBQ1IsQ0FBQztJQUUxQixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsTUFBTSxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV4RSxPQUFPLElBQUksNEJBQVksQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDekQsQ0FBQyxFQUNELEtBQUssRUFBRSxZQUFrQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUMxRCxNQUFNLGNBQWMsR0FDbEIsU0FBUyxDQUFDLE9BQU8sQ0FBeUIsMEJBQWUsQ0FBQyxDQUFDO0lBRTdELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVDLENBQUMsQ0FBQyxZQUFZO1FBQ2QsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFbkIsTUFBTSxjQUFjLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FDRixDQUFDIn0=