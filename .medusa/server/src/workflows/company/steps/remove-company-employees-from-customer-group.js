"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCompanyEmployeesFromCustomerGroupStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.removeCompanyEmployeesFromCustomerGroupStep = (0, workflows_sdk_1.createStep)("remove-company-employees-from-customer-group", async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [{ employees, customer_group }], } = await query.graph({
        entity: "company",
        filters: { id: input.company_id },
        fields: ["id", "customer_group.*", "employees.*", "employees.customer.*"],
    });
    const customerModuleService = container.resolve(utils_1.Modules.CUSTOMER);
    const customerGroupCustomers = employees
        .filter((employee) => Boolean(employee) &&
        Boolean(employee?.customer) &&
        Boolean(employee?.customer?.id) &&
        Boolean(customer_group?.id))
        .map((employee) => ({
        customer_id: employee.customer.id,
        customer_group_id: customer_group.id,
    }));
    await customerModuleService.removeCustomerFromGroup(customerGroupCustomers);
    const { data: [{ customer_group: newCustomerGroup }], } = await query.graph({
        entity: "company",
        filters: { id: input.company_id },
        fields: ["*", "customer_group.*"],
    }, { throwIfKeyNotFound: true });
    return new workflows_sdk_1.StepResponse(newCustomerGroup, {
        customer_ids: customerGroupCustomers.map(({ customer_id }) => customer_id),
        group_id: newCustomerGroup.id,
    });
}, async (input, { container }) => {
    const customerModuleService = container.resolve(utils_1.Modules.CUSTOMER);
    await customerModuleService.addCustomerToGroup(input.customer_ids.map((id) => ({
        customer_id: id,
        customer_group_id: input.group_id,
    })));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNvbXBhbnktZW1wbG95ZWVzLWZyb20tY3VzdG9tZXItZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NvbXBhbnkvc3RlcHMvcmVtb3ZlLWNvbXBhbnktZW1wbG95ZWVzLWZyb20tY3VzdG9tZXItZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQStFO0FBQy9FLHFFQUE2RTtBQUVoRSxRQUFBLDJDQUEyQyxHQUFHLElBQUEsMEJBQVUsRUFDbkUsOENBQThDLEVBQzlDLEtBQUssRUFBRSxLQUE2QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNyRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxHQUN0QyxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRTtRQUNqQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixDQUFDO0tBQzFFLENBQUMsQ0FBQztJQUVILE1BQU0scUJBQXFCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDN0MsZUFBTyxDQUFDLFFBQVEsQ0FDakIsQ0FBQztJQUVGLE1BQU0sc0JBQXNCLEdBQUcsU0FBUztTQUNyQyxNQUFNLENBQ0wsQ0FDRSxRQUFRLEVBR1IsRUFBRSxDQUNGLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakIsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDM0IsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQzlCO1NBQ0EsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLFdBQVcsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDakMsaUJBQWlCLEVBQUUsY0FBZSxDQUFDLEVBQUU7S0FDdEMsQ0FBQyxDQUFDLENBQUM7SUFFTixNQUFNLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFFNUUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLENBQUMsR0FDN0MsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDakMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDO0tBQ2xDLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQztJQUVGLE9BQU8sSUFBSSw0QkFBWSxDQUFDLGdCQUFnQixFQUFFO1FBQ3hDLFlBQVksRUFBRSxzQkFBc0IsQ0FBQyxHQUFHLENBQ3RDLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUNqQztRQUNELFFBQVEsRUFBRSxnQkFBaUIsQ0FBQyxFQUFFO0tBQy9CLENBQUMsQ0FBQztBQUNMLENBQUMsRUFDRCxLQUFLLEVBQ0gsS0FBbUQsRUFDbkQsRUFBRSxTQUFTLEVBQUUsRUFDYixFQUFFO0lBQ0YsTUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUM3QyxlQUFPLENBQUMsUUFBUSxDQUNqQixDQUFDO0lBRUYsTUFBTSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FDNUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIsV0FBVyxFQUFFLEVBQUU7UUFDZixpQkFBaUIsRUFBRSxLQUFLLENBQUMsUUFBUTtLQUNsQyxDQUFDLENBQUMsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUMifQ==