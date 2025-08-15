"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteApprovalsStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const approval_1 = require("../../../modules/approval");
exports.deleteApprovalsStep = (0, workflows_sdk_1.createStep)("delete-approvals", async (input, { container }) => {
    const approvalModule = container.resolve(approval_1.APPROVAL_MODULE);
    await approvalModule.softDeleteApprovals(input);
    return new workflows_sdk_1.StepResponse(undefined, input);
}, async (approvalIds, { container }) => {
    const approvalModule = container.resolve(approval_1.APPROVAL_MODULE);
    await approvalModule.restoreApprovals(approvalIds);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWFwcHJvdmFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXBwcm92YWwvc3RlcHMvZGVsZXRlLWFwcHJvdmFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkU7QUFDN0Usd0RBQTREO0FBRy9DLFFBQUEsbUJBQW1CLEdBQUcsSUFBQSwwQkFBVSxFQUMzQyxrQkFBa0IsRUFDbEIsS0FBSyxFQUFFLEtBQWUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDdkMsTUFBTSxjQUFjLEdBQ2xCLFNBQVMsQ0FBQyxPQUFPLENBQXlCLDBCQUFlLENBQUMsQ0FBQztJQUU3RCxNQUFNLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVoRCxPQUFPLElBQUksNEJBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxFQUNELEtBQUssRUFBRSxXQUFxQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM3QyxNQUFNLGNBQWMsR0FDbEIsU0FBUyxDQUFDLE9BQU8sQ0FBeUIsMEJBQWUsQ0FBQyxDQUFDO0lBRTdELE1BQU0sY0FBYyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FDRixDQUFDIn0=