"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApprovalSettingsWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_2 = require("@medusajs/workflows-sdk");
const approval_1 = require("../../../modules/approval");
const company_1 = require("../../../modules/company");
const steps_1 = require("../steps");
exports.createApprovalSettingsWorkflow = (0, workflows_sdk_2.createWorkflow)("create-approval-settings", function (input) {
    const approvalSettings = (0, steps_1.createApprovalSettingsStep)(input);
    const linkData = (0, workflows_sdk_1.transform)(approvalSettings, (settings) => settings.map((setting) => ({
        [company_1.COMPANY_MODULE]: {
            company_id: setting.company_id,
        },
        [approval_1.APPROVAL_MODULE]: {
            approval_settings_id: setting.id,
        },
    })));
    (0, core_flows_1.createRemoteLinkStep)(linkData);
    return new workflows_sdk_2.WorkflowResponse(approvalSettings);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFwcHJvdmFsLXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hcHByb3ZhbC93b3JrZmxvd3MvY3JlYXRlLWFwcHJvdmFsLXNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE4RDtBQUM5RCw0REFBbUU7QUFDbkUsMkRBQTJFO0FBQzNFLHdEQUE0RDtBQUM1RCxzREFBMEQ7QUFFMUQsb0NBQXNEO0FBRXpDLFFBQUEsOEJBQThCLEdBQUcsSUFBQSw4QkFBYyxFQUMxRCwwQkFBMEIsRUFDMUIsVUFBVSxLQUFzQjtJQUM5QixNQUFNLGdCQUFnQixHQUFHLElBQUEsa0NBQTBCLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFM0QsTUFBTSxRQUFRLEdBQUcsSUFBQSx5QkFBUyxFQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDeEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QixDQUFDLHdCQUFjLENBQUMsRUFBRTtZQUNoQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7U0FDL0I7UUFDRCxDQUFDLDBCQUFlLENBQUMsRUFBRTtZQUNqQixvQkFBb0IsRUFBRSxPQUFPLENBQUMsRUFBRTtTQUNqQztLQUNGLENBQUMsQ0FBQyxDQUNKLENBQUM7SUFFRixJQUFBLGlDQUFvQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRS9CLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FDRixDQUFDIn0=