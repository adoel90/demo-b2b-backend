"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApprovalStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const approval_1 = require("../../../modules/approval");
const types_1 = require("../../../types");
exports.createApprovalStep = (0, workflows_sdk_1.createStep)("create-approval", async (input, { container }) => {
    const query = container.resolve("query");
    const approvalData = Array.isArray(input) ? input : [input];
    const { data: [cart], } = await query.graph({
        entity: "cart",
        fields: [
            "id",
            "approvals.*",
            "approval_status.*",
            "company.id",
            "company.approval_settings.*",
        ],
        filters: {
            id: approvalData[0].cart_id,
        },
    }, {
        throwIfKeyNotFound: true,
    });
    if (cart.approval_status?.status ===
        types_1.ApprovalStatusType.PENDING) {
        throw new Error("Cart already has a pending approval");
    }
    if (cart.approval_status?.status ===
        types_1.ApprovalStatusType.APPROVED) {
        throw new Error("Cart is already approved");
    }
    const { requires_admin_approval, requires_sales_manager_approval } = cart?.company?.approval_settings || {};
    const approvalsToCreate = [];
    if (requires_admin_approval) {
        approvalsToCreate.push(...approvalData.map((data) => ({
            ...data,
            type: types_1.ApprovalType.ADMIN,
        })));
    }
    if (requires_sales_manager_approval) {
        approvalsToCreate.push(...approvalData.map((data) => ({
            ...data,
            type: types_1.ApprovalType.SALES_MANAGER,
        })));
    }
    if (approvalsToCreate.length === 0) {
        throw new Error("No enabled approval types found");
    }
    const approvalModuleService = container.resolve(approval_1.APPROVAL_MODULE);
    const approvals = await approvalModuleService.createApprovals(approvalsToCreate);
    return new workflows_sdk_1.StepResponse(approvals, approvals.map((approval) => approval.id));
}, async (approvalIds, { container }) => {
    const approvalModuleService = container.resolve(approval_1.APPROVAL_MODULE);
    await approvalModuleService.deleteApprovals(approvalIds);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFwcHJvdmFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXBwcm92YWwvc3RlcHMvY3JlYXRlLWFwcHJvdmFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkU7QUFDN0Usd0RBQTREO0FBQzVELDBDQUt3QjtBQUVYLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSwwQkFBVSxFQUMxQyxpQkFBaUIsRUFDakIsS0FBSyxFQUNILEtBRXdDLEVBQ3hDLEVBQUUsU0FBUyxFQUFFLEVBQ2IsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFekMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTVELE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FDYixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRTtZQUNOLElBQUk7WUFDSixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWiw2QkFBNkI7U0FDOUI7UUFDRCxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87U0FDNUI7S0FDRixFQUNEO1FBQ0Usa0JBQWtCLEVBQUUsSUFBSTtLQUN6QixDQUNGLENBQUM7SUFFRixJQUNHLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBd0M7UUFDL0QsMEJBQWtCLENBQUMsT0FBTyxFQUMxQixDQUFDO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxJQUNHLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBd0M7UUFDL0QsMEJBQWtCLENBQUMsUUFBUSxFQUMzQixDQUFDO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsK0JBQStCLEVBQUUsR0FDaEUsSUFBSSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsSUFBSSxFQUFFLENBQUM7SUFFekMsTUFBTSxpQkFBaUIsR0FBRyxFQUE0QixDQUFDO0lBRXZELElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUM1QixpQkFBaUIsQ0FBQyxJQUFJLENBQ3BCLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3QixHQUFHLElBQUk7WUFDUCxJQUFJLEVBQUUsb0JBQVksQ0FBQyxLQUFLO1NBQ3pCLENBQUMsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSwrQkFBK0IsRUFBRSxDQUFDO1FBQ3BDLGlCQUFpQixDQUFDLElBQUksQ0FDcEIsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsSUFBSTtZQUNQLElBQUksRUFBRSxvQkFBWSxDQUFDLGFBQWE7U0FDakMsQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELE1BQU0scUJBQXFCLEdBQ3pCLFNBQVMsQ0FBQyxPQUFPLENBQXlCLDBCQUFlLENBQUMsQ0FBQztJQUU3RCxNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFxQixDQUFDLGVBQWUsQ0FDM0QsaUJBQWlCLENBQ2xCLENBQUM7SUFFRixPQUFPLElBQUksNEJBQVksQ0FDckIsU0FBUyxFQUNULFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FDekMsQ0FBQztBQUNKLENBQUMsRUFDRCxLQUFLLEVBQUUsV0FBcUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDN0MsTUFBTSxxQkFBcUIsR0FDekIsU0FBUyxDQUFDLE9BQU8sQ0FBeUIsMEJBQWUsQ0FBQyxDQUFDO0lBRTdELE1BQU0scUJBQXFCLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FDRixDQUFDIn0=