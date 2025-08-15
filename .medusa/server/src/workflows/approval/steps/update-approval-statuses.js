"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApprovalStatusStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const approval_1 = require("../../../modules/approval");
const types_1 = require("../../../types");
exports.updateApprovalStatusStep = (0, workflows_sdk_1.createStep)("update-approval-status", async (input, { container }) => {
    const query = container.resolve("query");
    const approvalModule = container.resolve(approval_1.APPROVAL_MODULE);
    const { data: [approvalStatus], } = await query.graph({
        entity: "approval_status",
        fields: ["*", "status"],
        filters: {
            cart_id: input.cart_id,
        },
        pagination: {
            skip: 0,
            take: 1,
        },
    });
    const previousData = approvalStatus;
    const hasPendingApprovals = await approvalModule.hasPendingApprovals(input.cart_id);
    if (input.status === types_1.ApprovalStatusType.APPROVED && !hasPendingApprovals) {
        await approvalModule.updateApprovalStatuses([
            {
                id: approvalStatus.id,
                status: types_1.ApprovalStatusType.APPROVED,
            },
        ]);
    }
    if (input.status === types_1.ApprovalStatusType.REJECTED) {
        await approvalModule.updateApprovalStatuses([
            {
                id: approvalStatus.id,
                status: types_1.ApprovalStatusType.REJECTED,
            },
        ]);
    }
    return new workflows_sdk_1.StepResponse(undefined, previousData);
}, async (previousData, { container }) => {
    const approvalModule = container.resolve(approval_1.APPROVAL_MODULE);
    await approvalModule.updateApprovalStatuses([
        {
            id: previousData.id,
            status: previousData.status,
        },
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWFwcHJvdmFsLXN0YXR1c2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hcHByb3ZhbC9zdGVwcy91cGRhdGUtYXBwcm92YWwtc3RhdHVzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBQzdFLHdEQUE0RDtBQUM1RCwwQ0FLd0I7QUFFWCxRQUFBLHdCQUF3QixHQUFHLElBQUEsMEJBQVUsRUFDaEQsd0JBQXdCLEVBQ3hCLEtBQUssRUFDSCxLQUFxQixFQUNyQixFQUFFLFNBQVMsRUFBRSxFQUMyQyxFQUFFO0lBQzFELE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsTUFBTSxjQUFjLEdBQ2xCLFNBQVMsQ0FBQyxPQUFPLENBQXlCLDBCQUFlLENBQUMsQ0FBQztJQUU3RCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQ3ZCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztRQUN2QixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDdkI7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxDQUFDO1NBQ1I7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLFlBQVksR0FBRyxjQUFjLENBQUM7SUFFcEMsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLGNBQWMsQ0FBQyxtQkFBbUIsQ0FDbEUsS0FBSyxDQUFDLE9BQU8sQ0FDZCxDQUFDO0lBRUYsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLDBCQUFrQixDQUFDLFFBQVEsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekUsTUFBTSxjQUFjLENBQUMsc0JBQXNCLENBQUM7WUFDMUM7Z0JBQ0UsRUFBRSxFQUFFLGNBQWMsQ0FBQyxFQUFFO2dCQUNyQixNQUFNLEVBQUUsMEJBQWtCLENBQUMsUUFBUTthQUNwQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssMEJBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakQsTUFBTSxjQUFjLENBQUMsc0JBQXNCLENBQUM7WUFDMUM7Z0JBQ0UsRUFBRSxFQUFFLGNBQWMsQ0FBQyxFQUFFO2dCQUNyQixNQUFNLEVBQUUsMEJBQWtCLENBQUMsUUFBUTthQUNwQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLElBQUksNEJBQVksQ0FDckIsU0FBUyxFQUNULFlBQStDLENBQ2hELENBQUM7QUFDSixDQUFDLEVBQ0QsS0FBSyxFQUFFLFlBQWtDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzFELE1BQU0sY0FBYyxHQUNsQixTQUFTLENBQUMsT0FBTyxDQUF5QiwwQkFBZSxDQUFDLENBQUM7SUFFN0QsTUFBTSxjQUFjLENBQUMsc0JBQXNCLENBQUM7UUFDMUM7WUFDRSxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDbkIsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO1NBQzVCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUMifQ==