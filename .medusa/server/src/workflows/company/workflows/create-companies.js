"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompaniesWorkflow = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const approval_1 = require("../../../modules/approval");
const company_1 = require("../../../modules/company");
const create_approval_settings_1 = require("../../../workflows/approval/steps/create-approval-settings");
const steps_1 = require("../steps");
exports.createCompaniesWorkflow = (0, workflows_sdk_1.createWorkflow)("create-companies", function (input) {
    const companies = (0, steps_1.createCompaniesStep)(input);
    const approvalSettings = (0, create_approval_settings_1.createApprovalSettingsStep)(companies);
    const linkData = (0, workflows_sdk_1.transform)(approvalSettings, (settings) => settings.map((setting) => ({
        [company_1.COMPANY_MODULE]: {
            company_id: setting.company_id,
        },
        [approval_1.APPROVAL_MODULE]: {
            approval_settings_id: setting.id,
        },
    })));
    (0, core_flows_1.createRemoteLinkStep)(linkData);
    return new workflows_sdk_1.WorkflowResponse(companies);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbXBhbmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29tcGFueS93b3JrZmxvd3MvY3JlYXRlLWNvbXBhbmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0REFBbUU7QUFDbkUsMkRBSWlDO0FBQ2pDLHdEQUE0RDtBQUM1RCxzREFBMEQ7QUFFMUQseUdBQXdHO0FBQ3hHLG9DQUErQztBQUVsQyxRQUFBLHVCQUF1QixHQUFHLElBQUEsOEJBQWMsRUFDbkQsa0JBQWtCLEVBQ2xCLFVBQVUsS0FBNEI7SUFDcEMsTUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBbUIsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUU3QyxNQUFNLGdCQUFnQixHQUFHLElBQUEscURBQTBCLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFFL0QsTUFBTSxRQUFRLEdBQUcsSUFBQSx5QkFBUyxFQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDeEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QixDQUFDLHdCQUFjLENBQUMsRUFBRTtZQUNoQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7U0FDL0I7UUFDRCxDQUFDLDBCQUFlLENBQUMsRUFBRTtZQUNqQixvQkFBb0IsRUFBRSxPQUFPLENBQUMsRUFBRTtTQUNqQztLQUNGLENBQUMsQ0FBQyxDQUNKLENBQUM7SUFFRixJQUFBLGlDQUFvQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRS9CLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQ0YsQ0FBQyJ9