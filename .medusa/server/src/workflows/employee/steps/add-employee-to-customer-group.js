"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEmployeeToCustomerGroupStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.addEmployeeToCustomerGroupStep = (0, workflows_sdk_1.createStep)("add-employee-to-customer-group", async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [employee], } = await query.graph({
        entity: "employee",
        filters: { id: input.employee_id },
        fields: ["id", "customer.*", "company.*"],
    }, { throwIfKeyNotFound: true });
    const { data: [company], } = await query.graph({
        entity: "company",
        filters: { id: employee.company.id },
        fields: ["id", "customer_group.*"],
    }, { throwIfKeyNotFound: true });
    const customerModuleService = container.resolve(utils_1.Modules.CUSTOMER);
    if (!employee.customer?.id || !company.customer_group?.id) {
        return new workflows_sdk_1.StepResponse(null, {
            customer_id: employee.customer?.id,
            group_id: company.customer_group?.id,
        });
    }
    await customerModuleService.addCustomerToGroup({
        customer_id: employee.customer.id,
        customer_group_id: company.customer_group.id,
    });
    const customerGroup = await customerModuleService.retrieveCustomerGroup(company.customer_group.id);
    return new workflows_sdk_1.StepResponse(customerGroup, {
        customer_id: employee.customer.id,
        group_id: company.customer_group.id,
    });
}, async (input, { container }) => {
    if (!input.customer_id || !input.group_id) {
        return;
    }
    const customerModuleService = container.resolve(utils_1.Modules.CUSTOMER);
    await customerModuleService.removeCustomerFromGroup({
        customer_id: input.customer_id,
        customer_group_id: input.group_id,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVtcGxveWVlLXRvLWN1c3RvbWVyLWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9lbXBsb3llZS9zdGVwcy9hZGQtZW1wbG95ZWUtdG8tY3VzdG9tZXItZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQStFO0FBQy9FLHFFQUE2RTtBQUVoRSxRQUFBLDhCQUE4QixHQUFHLElBQUEsMEJBQVUsRUFDdEQsZ0NBQWdDLEVBQ2hDLEtBQUssRUFBRSxLQUE4QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN0RCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FDakIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLFVBQVU7UUFDbEIsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFDbEMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7S0FDMUMsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUNoQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDcEMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDO0tBQ25DLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQztJQUVGLE1BQU0scUJBQXFCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDN0MsZUFBTyxDQUFDLFFBQVEsQ0FDakIsQ0FBQztJQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDMUQsT0FBTyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFO1lBQzVCLFdBQVcsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQztRQUM3QyxXQUFXLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtLQUM3QyxDQUFDLENBQUM7SUFFSCxNQUFNLGFBQWEsR0FBRyxNQUFNLHFCQUFxQixDQUFDLHFCQUFxQixDQUNyRSxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FDMUIsQ0FBQztJQUVGLE9BQU8sSUFBSSw0QkFBWSxDQUFDLGFBQWEsRUFBRTtRQUNyQyxXQUFXLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDLFFBQVEsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7S0FDcEMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUNELEtBQUssRUFDSCxLQUF3RSxFQUN4RSxFQUFFLFNBQVMsRUFBRSxFQUNiLEVBQUU7SUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU0scUJBQXFCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDN0MsZUFBTyxDQUFDLFFBQVEsQ0FDakIsQ0FBQztJQUVGLE1BQU0scUJBQXFCLENBQUMsdUJBQXVCLENBQUM7UUFDbEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1FBQzlCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxRQUFRO0tBQ2xDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FDRixDQUFDIn0=