"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApprovalsWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.updateApprovalsWorkflow = (0, workflows_sdk_1.createWorkflow)("update-approvals", function (input) {
    const updatedApproval = (0, steps_1.updateApprovalStep)(input);
    (0, steps_1.updateApprovalStatusStep)(updatedApproval);
    return new workflows_sdk_1.WorkflowResponse(updatedApproval);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWFwcHJvdmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hcHByb3ZhbC93b3JrZmxvd3MvdXBkYXRlLWFwcHJvdmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEyRTtBQUUzRSxvQ0FBd0U7QUFFM0QsUUFBQSx1QkFBdUIsR0FBRyxJQUFBLDhCQUFjLEVBQ25ELGtCQUFrQixFQUNsQixVQUFVLEtBQTJCO0lBQ25DLE1BQU0sZUFBZSxHQUFHLElBQUEsMEJBQWtCLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEQsSUFBQSxnQ0FBd0IsRUFBQyxlQUFlLENBQUMsQ0FBQztJQUUxQyxPQUFPLElBQUksZ0NBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUNGLENBQUMifQ==