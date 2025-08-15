"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployeesStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const company_1 = require("../../../modules/company");
exports.updateEmployeesStep = (0, workflows_sdk_1.createStep)("update-employees", async (input, { container }) => {
    const companyModuleService = container.resolve(company_1.COMPANY_MODULE);
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [currentData], } = await query.graph({
        entity: "employee",
        fields: ["*"],
        filters: {
            id: input.id,
        },
    });
    const updatedEmployee = await companyModuleService.updateEmployees(input);
    const { data: [employee], } = await query.graph({
        entity: "employee",
        fields: ["*", "customer.*", "company.*"],
        filters: {
            id: updatedEmployee.id,
        },
    });
    return new workflows_sdk_1.StepResponse(employee, currentData);
}, async (currentData, { container }) => {
    const companyModuleService = container.resolve(company_1.COMPANY_MODULE);
    await companyModuleService.updateEmployees(currentData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtcGxveWVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvZW1wbG95ZWUvc3RlcHMvdXBkYXRlLWVtcGxveWVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBc0U7QUFDdEUscUVBQTZFO0FBQzdFLHNEQUEwRDtBQU83QyxRQUFBLG1CQUFtQixHQUFHLElBQUEsMEJBQVUsRUFDM0Msa0JBQWtCLEVBQ2xCLEtBQUssRUFDSCxLQUEyQixFQUMzQixFQUFFLFNBQVMsRUFBRSxFQUN3QyxFQUFFO0lBQ3ZELE1BQU0sb0JBQW9CLEdBQ3hCLFNBQVMsQ0FBQyxPQUFPLENBQXdCLHdCQUFjLENBQUMsQ0FBQztJQUUzRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FDcEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1NBQ2I7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLGVBQWUsR0FBRyxNQUFNLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxRSxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQ2pCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDO1FBQ3hDLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxlQUFlLENBQUMsRUFBRTtTQUN2QjtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSw0QkFBWSxDQUNyQixRQUFvQyxFQUNwQyxXQUF1QyxDQUN4QyxDQUFDO0FBQ0osQ0FBQyxFQUNELEtBQUssRUFBRSxXQUFpQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN6RCxNQUFNLG9CQUFvQixHQUN4QixTQUFTLENBQUMsT0FBTyxDQUF3Qix3QkFBYyxDQUFDLENBQUM7SUFFM0QsTUFBTSxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUNGLENBQUMifQ==