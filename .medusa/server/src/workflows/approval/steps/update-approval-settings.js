"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApprovalSettingsStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const approval_1 = require("../../../modules/approval");
exports.updateApprovalSettingsStep = (0, workflows_sdk_1.createStep)("update-approval-settings", async (input, { container }) => {
    const approvalModule = container.resolve(approval_1.APPROVAL_MODULE);
    const previousData = await approvalModule.retrieveApprovalSettings(input.id);
    const updatedApprovalSettings = await approvalModule.updateApprovalSettings(input);
    return new workflows_sdk_1.StepResponse(updatedApprovalSettings, previousData);
}, async (previousData, { container }) => {
    const approvalModule = container.resolve(approval_1.APPROVAL_MODULE);
    await approvalModule.updateApprovalSettings(previousData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWFwcHJvdmFsLXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hcHByb3ZhbC9zdGVwcy91cGRhdGUtYXBwcm92YWwtc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBQzdFLHdEQUE0RDtBQU0vQyxRQUFBLDBCQUEwQixHQUFHLElBQUEsMEJBQVUsRUFDbEQsMEJBQTBCLEVBQzFCLEtBQUssRUFBRSxLQUFtQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUMzRCxNQUFNLGNBQWMsR0FDbEIsU0FBUyxDQUFDLE9BQU8sQ0FBeUIsMEJBQWUsQ0FBQyxDQUFDO0lBRTdELE1BQU0sWUFBWSxHQUFHLE1BQU0sY0FBYyxDQUFDLHdCQUF3QixDQUNoRSxLQUFLLENBQUMsRUFBRSxDQUNULENBQUM7SUFFRixNQUFNLHVCQUF1QixHQUFHLE1BQU0sY0FBYyxDQUFDLHNCQUFzQixDQUN6RSxLQUFLLENBQ04sQ0FBQztJQUVGLE9BQU8sSUFBSSw0QkFBWSxDQUFDLHVCQUF1QixFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2pFLENBQUMsRUFDRCxLQUFLLEVBQUUsWUFBMEMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbEUsTUFBTSxjQUFjLEdBQ2xCLFNBQVMsQ0FBQyxPQUFPLENBQXlCLDBCQUFlLENBQUMsQ0FBQztJQUU3RCxNQUFNLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1RCxDQUFDLENBQ0YsQ0FBQyJ9