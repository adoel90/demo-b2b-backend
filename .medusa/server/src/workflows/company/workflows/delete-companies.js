"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompaniesWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const workflows_sdk_2 = require("@medusajs/workflows-sdk");
const delete_approval_settings_1 = require("../../approval/steps/delete-approval-settings");
const steps_1 = require("../steps");
exports.deleteCompaniesWorkflow = (0, workflows_sdk_2.createWorkflow)("delete-companies", function (input) {
    (0, steps_1.deleteCompaniesStep)([input.id]);
    (0, delete_approval_settings_1.deleteApprovalSettingsStep)({
        companyIds: [input.id],
    });
    return new workflows_sdk_1.WorkflowResponse(undefined);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWNvbXBhbmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29tcGFueS93b3JrZmxvd3MvZGVsZXRlLWNvbXBhbmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBcUU7QUFDckUsMkRBQXlEO0FBRXpELDRGQUEyRjtBQUMzRixvQ0FBK0M7QUFFbEMsUUFBQSx1QkFBdUIsR0FBRyxJQUFBLDhCQUFjLEVBQ25ELGtCQUFrQixFQUNsQixVQUFVLEtBQTBCO0lBQ2xDLElBQUEsMkJBQW1CLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVoQyxJQUFBLHFEQUEwQixFQUFDO1FBQ3pCLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7S0FDdkIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLGdDQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FDRixDQUFDIn0=