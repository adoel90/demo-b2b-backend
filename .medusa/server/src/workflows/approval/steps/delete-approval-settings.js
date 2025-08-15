"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteApprovalSettingsStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const approval_1 = require("../../../modules/approval");
exports.deleteApprovalSettingsStep = (0, workflows_sdk_1.createStep)("delete-approval-settings", async (input, { container }) => {
    const approvalModule = container.resolve(approval_1.APPROVAL_MODULE);
    const filters = {};
    if (input.ids) {
        filters.id = input.ids;
    }
    if (input.companyIds) {
        filters.company_id = input.companyIds;
    }
    const approvalSettings = await approvalModule.listApprovalSettings(filters);
    await approvalModule.deleteApprovalSettings(approvalSettings.map((setting) => setting.id));
    return new workflows_sdk_1.StepResponse(undefined, approvalSettings.map((setting) => setting.company_id));
}, async (companyIds, { container }) => {
    const approvalModule = container.resolve(approval_1.APPROVAL_MODULE);
    await approvalModule.createApprovalSettings(companyIds.map((id) => ({
        company_id: id,
        requires_admin_approval: false,
        requires_sales_manager_approval: false,
    })));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWFwcHJvdmFsLXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hcHByb3ZhbC9zdGVwcy9kZWxldGUtYXBwcm92YWwtc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBQzdFLHdEQUE0RDtBQVcvQyxRQUFBLDBCQUEwQixHQUFHLElBQUEsMEJBQVUsRUFDbEQsMEJBQTBCLEVBQzFCLEtBQUssRUFBRSxLQUFzQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM5RCxNQUFNLGNBQWMsR0FDbEIsU0FBUyxDQUFDLE9BQU8sQ0FBeUIsMEJBQWUsQ0FBQyxDQUFDO0lBRTdELE1BQU0sT0FBTyxHQUFrQyxFQUFFLENBQUM7SUFFbEQsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDZCxPQUFPLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU1RSxNQUFNLGNBQWMsQ0FBQyxzQkFBc0IsQ0FDekMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQzlDLENBQUM7SUFFRixPQUFPLElBQUksNEJBQVksQ0FDckIsU0FBUyxFQUNULGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUN0RCxDQUFDO0FBQ0osQ0FBQyxFQUNELEtBQUssRUFBRSxVQUFvQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM1QyxNQUFNLGNBQWMsR0FDbEIsU0FBUyxDQUFDLE9BQU8sQ0FBeUIsMEJBQWUsQ0FBQyxDQUFDO0lBRTdELE1BQU0sY0FBYyxDQUFDLHNCQUFzQixDQUN6QyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsdUJBQXVCLEVBQUUsS0FBSztRQUM5QiwrQkFBK0IsRUFBRSxLQUFLO0tBQ3ZDLENBQUMsQ0FBQyxDQUNKLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQyJ9