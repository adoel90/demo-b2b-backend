"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployeesWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const workflows_sdk_2 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.updateEmployeesWorkflow = (0, workflows_sdk_2.createWorkflow)("update-employees", (input) => {
    const updatedEmployee = (0, steps_1.updateEmployeesStep)(input);
    (0, workflows_sdk_1.when)(updatedEmployee, ({ is_admin }) => {
        return is_admin === false;
    }).then(() => {
        (0, steps_1.removeAdminRoleStep)({
            email: updatedEmployee.customer.email,
        });
    });
    return new workflows_sdk_2.WorkflowResponse(updatedEmployee);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtcGxveWVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvZW1wbG95ZWUvd29ya2Zsb3dzL3VwZGF0ZS1lbXBsb3llZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQXlEO0FBQ3pELDJEQUlpQztBQUVqQyxvQ0FBb0U7QUFFdkQsUUFBQSx1QkFBdUIsR0FBRyxJQUFBLDhCQUFjLEVBQ25ELGtCQUFrQixFQUNsQixDQUNFLEtBQXlDLEVBQ1IsRUFBRTtJQUNuQyxNQUFNLGVBQWUsR0FBRyxJQUFBLDJCQUFtQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5ELElBQUEsb0JBQUksRUFBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7UUFDckMsT0FBTyxRQUFRLEtBQUssS0FBSyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDWCxJQUFBLDJCQUFtQixFQUFDO1lBQ2xCLEtBQUssRUFBRSxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUs7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksZ0NBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUNGLENBQUMifQ==