"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApprovalSettingsStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const approval_1 = require("../../../modules/approval");
exports.createApprovalSettingsStep = (0, workflows_sdk_1.createStep)("create-approval-settings", async (input, { container }) => {
    const approvalModuleService = container.resolve(approval_1.APPROVAL_MODULE);
    const approvalSettings = await approvalModuleService.createApprovalSettings(input.map((company) => ({
        company_id: company.id,
        requires_admin_approval: false,
        requires_sales_manager_approval: false,
    })));
    return new workflows_sdk_1.StepResponse(approvalSettings, approvalSettings.map((setting) => setting.id));
}, async (settingIds, { container }) => {
    if (!settingIds) {
        return;
    }
    const approvalModuleService = container.resolve(approval_1.APPROVAL_MODULE);
    await approvalModuleService.deleteApprovalSettings(settingIds);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFwcHJvdmFsLXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hcHByb3ZhbC9zdGVwcy9jcmVhdGUtYXBwcm92YWwtc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBQzdFLHdEQUE0RDtBQUcvQyxRQUFBLDBCQUEwQixHQUFHLElBQUEsMEJBQVUsRUFDbEQsMEJBQTBCLEVBQzFCLEtBQUssRUFBRSxLQUFzQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM5QyxNQUFNLHFCQUFxQixHQUN6QixTQUFTLENBQUMsT0FBTyxDQUF5QiwwQkFBZSxDQUFDLENBQUM7SUFFN0QsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLHFCQUFxQixDQUFDLHNCQUFzQixDQUN6RSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRTtRQUN0Qix1QkFBdUIsRUFBRSxLQUFLO1FBQzlCLCtCQUErQixFQUFFLEtBQUs7S0FDdkMsQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUVGLE9BQU8sSUFBSSw0QkFBWSxDQUNyQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQzlDLENBQUM7QUFDSixDQUFDLEVBQ0QsS0FBSyxFQUFFLFVBQW9CLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzVDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQixPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU0scUJBQXFCLEdBQ3pCLFNBQVMsQ0FBQyxPQUFPLENBQXlCLDBCQUFlLENBQUMsQ0FBQztJQUU3RCxNQUFNLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FDRixDQUFDIn0=