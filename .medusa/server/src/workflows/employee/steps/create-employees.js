"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployeesStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const company_1 = require("../../../modules/company");
exports.createEmployeesStep = (0, workflows_sdk_1.createStep)("create-employees", async (input, { container }) => {
    const companyModuleService = container.resolve(company_1.COMPANY_MODULE);
    const createdEmployee = await companyModuleService.createEmployees(input);
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [employee], } = await query.graph({
        entity: "employee",
        filters: { id: createdEmployee.id },
        fields: ["id", "company.*"],
    }, { throwIfKeyNotFound: true });
    return new workflows_sdk_1.StepResponse(employee, employee.id);
}, async (employeeId, { container }) => {
    const companyModuleService = container.resolve(company_1.COMPANY_MODULE);
    await companyModuleService.deleteEmployees([employeeId]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWVtcGxveWVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvZW1wbG95ZWUvc3RlcHMvY3JlYXRlLWVtcGxveWVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBc0U7QUFDdEUscUVBQTZFO0FBQzdFLHNEQUEwRDtBQU83QyxRQUFBLG1CQUFtQixHQUFHLElBQUEsMEJBQVUsRUFDM0Msa0JBQWtCLEVBQ2xCLEtBQUssRUFDSCxLQUEyQixFQUMzQixFQUFFLFNBQVMsRUFBRSxFQUNrQyxFQUFFO0lBQ2pELE1BQU0sb0JBQW9CLEdBQ3hCLFNBQVMsQ0FBQyxPQUFPLENBQXdCLHdCQUFjLENBQUMsQ0FBQztJQUUzRCxNQUFNLGVBQWUsR0FBRyxNQUFNLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxRSxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FDakIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLFVBQVU7UUFDbEIsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztLQUM1QixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUM7SUFFRixPQUFPLElBQUksNEJBQVksQ0FBQyxRQUFxQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM5RSxDQUFDLEVBQ0QsS0FBSyxFQUFFLFVBQWtCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzFDLE1BQU0sb0JBQW9CLEdBQ3hCLFNBQVMsQ0FBQyxPQUFPLENBQXdCLHdCQUFjLENBQUMsQ0FBQztJQUMzRCxNQUFNLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUNGLENBQUMifQ==