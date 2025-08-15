"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeesWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteEmployeesWorkflow = (0, workflows_sdk_1.createWorkflow)("delete-employees", (input) => {
    (0, steps_1.deleteEmployeesStep)(input);
    return new workflows_sdk_1.WorkflowResponse("Company customers deleted");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWVtcGxveWVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvZW1wbG95ZWUvd29ya2Zsb3dzL2RlbGV0ZS1lbXBsb3llZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkRBSWlDO0FBQ2pDLG9DQUErQztBQUVsQyxRQUFBLHVCQUF1QixHQUFHLElBQUEsOEJBQWMsRUFDbkQsa0JBQWtCLEVBQ2xCLENBQUMsS0FBc0MsRUFBNEIsRUFBRTtJQUNuRSxJQUFBLDJCQUFtQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FDRixDQUFDIn0=