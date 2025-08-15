"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApprovalSettingsWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.updateApprovalSettingsWorkflow = (0, workflows_sdk_1.createWorkflow)("update-approval-settings", function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.updateApprovalSettingsStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWFwcHJvdmFsLXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hcHByb3ZhbC93b3JrZmxvd3MvdXBkYXRlLWFwcHJvdmFsLXNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEyRTtBQUUzRSxvQ0FBc0Q7QUFFekMsUUFBQSw4QkFBOEIsR0FBRyxJQUFBLDhCQUFjLEVBQzFELDBCQUEwQixFQUMxQixVQUFVLEtBQW1DO0lBQzNDLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFBLGtDQUEwQixFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUNGLENBQUMifQ==