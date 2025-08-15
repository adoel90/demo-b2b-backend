"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApprovalsWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_2 = require("@medusajs/workflows-sdk");
const approval_1 = require("../../../modules/approval");
const steps_1 = require("../steps");
const create_approval_status_1 = require("../steps/create-approval-status");
exports.createApprovalsWorkflow = (0, workflows_sdk_2.createWorkflow)("create-approvals", function (input) {
    const result = (0, steps_1.createApprovalStep)(input);
    const cartIds = (0, workflows_sdk_1.transform)(input, (input) => {
        const approvals = Array.isArray(input) ? input : [input];
        return approvals.map((approval) => approval.cart_id);
    });
    const approvalStatusResult = (0, create_approval_status_1.createApprovalStatusStep)(cartIds);
    const approvalLinkData = (0, workflows_sdk_1.transform)(result, (approval) => {
        const approvals = Array.isArray(approval) ? approval : [approval];
        return approvals.map((approval) => ({
            [utils_1.Modules.CART]: {
                cart_id: approval.cart_id,
            },
            [approval_1.APPROVAL_MODULE]: {
                approval_id: approval.id,
            },
        }));
    });
    const approvalStatusLinkData = (0, workflows_sdk_1.transform)(approvalStatusResult, (status) => {
        const statuses = Array.isArray(status) ? status : [status];
        return statuses.map((status) => ({
            [utils_1.Modules.CART]: {
                cart_id: status.cart_id,
            },
            [approval_1.APPROVAL_MODULE]: {
                approval_status_id: status.id,
            },
        }));
    });
    const linkData = (0, workflows_sdk_1.transform)([approvalLinkData, approvalStatusLinkData], (data) => {
        return data.flat();
    });
    (0, core_flows_1.createRemoteLinkStep)(linkData);
    return new workflows_sdk_2.WorkflowResponse(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFwcHJvdmFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXBwcm92YWwvd29ya2Zsb3dzL2NyZWF0ZS1hcHByb3ZhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW9EO0FBQ3BELHFFQUE4RDtBQUM5RCw0REFBbUU7QUFDbkUsMkRBQTJFO0FBQzNFLHdEQUE0RDtBQUU1RCxvQ0FBOEM7QUFDOUMsNEVBQTJFO0FBRTlELFFBQUEsdUJBQXVCLEdBQUcsSUFBQSw4QkFBYyxFQUNuRCxrQkFBa0IsRUFDbEIsVUFBVSxLQUFvRDtJQUM1RCxNQUFNLE1BQU0sR0FBRyxJQUFBLDBCQUFrQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpDLE1BQU0sT0FBTyxHQUFHLElBQUEseUJBQVMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLG9CQUFvQixHQUFHLElBQUEsaURBQXdCLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFFL0QsTUFBTSxnQkFBZ0IsR0FBRyxJQUFBLHlCQUFTLEVBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDdEQsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsQyxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDZCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87YUFDMUI7WUFDRCxDQUFDLDBCQUFlLENBQUMsRUFBRTtnQkFDakIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUFFO2FBQ3pCO1NBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sc0JBQXNCLEdBQUcsSUFBQSx5QkFBUyxFQUFDLG9CQUFvQixFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDeEUsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDZCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87YUFDeEI7WUFDRCxDQUFDLDBCQUFlLENBQUMsRUFBRTtnQkFDakIsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEVBQUU7YUFDOUI7U0FDRixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxRQUFRLEdBQUcsSUFBQSx5QkFBUyxFQUN4QixDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDLEVBQzFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQ0YsQ0FBQztJQUVGLElBQUEsaUNBQW9CLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFFL0IsT0FBTyxJQUFJLGdDQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FDRixDQUFDIn0=