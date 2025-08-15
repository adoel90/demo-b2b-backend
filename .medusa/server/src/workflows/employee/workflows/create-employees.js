"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployeesWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_2 = require("@medusajs/workflows-sdk");
const company_1 = require("../../../modules/company");
const steps_1 = require("../steps");
const add_employee_to_customer_group_1 = require("../steps/add-employee-to-customer-group");
exports.createEmployeesWorkflow = (0, workflows_sdk_2.createWorkflow)("create-employees", function (input) {
    const employee = (0, steps_1.createEmployeesStep)(input.employeeData);
    (0, core_flows_1.createRemoteLinkStep)([
        {
            [company_1.COMPANY_MODULE]: {
                employee_id: employee.id,
            },
            [utils_1.Modules.CUSTOMER]: {
                customer_id: input.customerId,
            },
        },
    ]);
    (0, workflows_sdk_1.when)(input.employeeData, (employee) => !!employee.is_admin).then(() => {
        (0, steps_1.setAdminRoleStep)({
            employeeId: employee.id,
            customerId: input.customerId,
        });
    });
    (0, add_employee_to_customer_group_1.addEmployeeToCustomerGroupStep)({
        employee_id: employee.id,
    });
    return new workflows_sdk_2.WorkflowResponse(employee);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWVtcGxveWVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvZW1wbG95ZWUvd29ya2Zsb3dzL2NyZWF0ZS1lbXBsb3llZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW9EO0FBQ3BELHFFQUF5RDtBQUN6RCw0REFBbUU7QUFDbkUsMkRBQTJFO0FBQzNFLHNEQUEwRDtBQUUxRCxvQ0FBaUU7QUFDakUsNEZBQXlGO0FBTzVFLFFBQUEsdUJBQXVCLEdBQUcsSUFBQSw4QkFBYyxFQUNuRCxrQkFBa0IsRUFDbEIsVUFBVSxLQUFvQjtJQUM1QixNQUFNLFFBQVEsR0FBRyxJQUFBLDJCQUFtQixFQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUV6RCxJQUFBLGlDQUFvQixFQUFDO1FBQ25CO1lBQ0UsQ0FBQyx3QkFBYyxDQUFDLEVBQUU7Z0JBQ2hCLFdBQVcsRUFBRSxRQUFRLENBQUMsRUFBRTthQUN6QjtZQUNELENBQUMsZUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNsQixXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVU7YUFDOUI7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVILElBQUEsb0JBQUksRUFBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDcEUsSUFBQSx3QkFBZ0IsRUFBQztZQUNmLFVBQVUsRUFBRSxRQUFRLENBQUMsRUFBRTtZQUN2QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFBLCtEQUE4QixFQUFDO1FBQzdCLFdBQVcsRUFBRSxRQUFRLENBQUMsRUFBRTtLQUN6QixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksZ0NBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUNGLENBQUMifQ==