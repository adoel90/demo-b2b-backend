"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCompanyEmployeesToCustomerGroupStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.addCompanyEmployeesToCustomerGroupStep = (0, workflows_sdk_1.createStep)("add-company-employees-to-customer-group", async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [{ id, customer_group, employees }], } = await query.graph({
        entity: "companies",
        filters: { id: input.company_id },
        fields: [
            "*",
            "customer_group.*",
            "employees.*",
            "employees.customer.*",
        ],
    }, { throwIfKeyNotFound: true });
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
    await customerModuleService.addCustomerToGroup(customerGroupCustomers);
    return new workflows_sdk_1.StepResponse(customer_group, {
        customer_ids: customerGroupCustomers.map(({ customer_id }) => customer_id),
        group_id: customer_group.id,
    });
}, async (input, { container }) => {
    const customerModuleService = container.resolve(utils_1.Modules.CUSTOMER);
    await customerModuleService.removeCustomerFromGroup(input.customer_ids.map((id) => ({
        customer_id: id,
        customer_group_id: input.group_id,
    })));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNvbXBhbnktZW1wbG95ZWVzLXRvLWN1c3RvbWVyLWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9jb21wYW55L3N0ZXBzL2FkZC1jb21wYW55LWVtcGxveWVlcy10by1jdXN0b21lci1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBK0U7QUFDL0UscUVBQTZFO0FBRWhFLFFBQUEsc0NBQXNDLEdBQUcsSUFBQSwwQkFBVSxFQUM5RCx5Q0FBeUMsRUFDekMsS0FBSyxFQUFFLEtBQTZCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3JELE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUMxQyxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsV0FBVztRQUNuQixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRTtRQUNqQyxNQUFNLEVBQUU7WUFDTixHQUFHO1lBQ0gsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixzQkFBc0I7U0FDdkI7S0FDRixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUM7SUFFRixNQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQzdDLGVBQU8sQ0FBQyxRQUFRLENBQ2pCLENBQUM7SUFDRixNQUFNLHNCQUFzQixHQUFHLFNBQVM7U0FDckMsTUFBTSxDQUNMLENBQ0UsUUFBUSxFQUdSLEVBQUUsQ0FDRixPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUM5QjtTQUNBLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQixXQUFXLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDLGlCQUFpQixFQUFFLGNBQWUsQ0FBQyxFQUFFO0tBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBRU4sTUFBTSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRXZFLE9BQU8sSUFBSSw0QkFBWSxDQUFDLGNBQWMsRUFBRTtRQUN0QyxZQUFZLEVBQUUsc0JBQXNCLENBQUMsR0FBRyxDQUN0QyxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FDakM7UUFDRCxRQUFRLEVBQUUsY0FBZSxDQUFDLEVBQUU7S0FDN0IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUNELEtBQUssRUFDSCxLQUFtRCxFQUNuRCxFQUFFLFNBQVMsRUFBRSxFQUNiLEVBQUU7SUFDRixNQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQzdDLGVBQU8sQ0FBQyxRQUFRLENBQ2pCLENBQUM7SUFFRixNQUFNLHFCQUFxQixDQUFDLHVCQUF1QixDQUNqRCxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QixXQUFXLEVBQUUsRUFBRTtRQUNmLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxRQUFRO0tBQ2xDLENBQUMsQ0FBQyxDQUNKLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQyJ9