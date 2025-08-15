"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAdminRoleStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.setAdminRoleStep = (0, workflows_sdk_1.createStep)("set-admin-role", async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [employee], } = await query.graph({
        entity: "employee",
        fields: ["id", "is_admin", "customer.has_account"],
        filters: {
            id: input.employeeId,
        },
    }, { throwIfKeyNotFound: true });
    if (employee.customer?.has_account === false) {
        return new workflows_sdk_1.StepResponse(undefined, input);
    }
    const { data: [customer], } = await query.graph({
        entity: "customer",
        fields: ["email"],
        filters: {
            id: input.customerId,
        },
    }, { throwIfKeyNotFound: true });
    if (!customer.email) {
        return new workflows_sdk_1.StepResponse(undefined, input);
    }
    const { data: [providerIdentity], } = await query.graph({
        entity: "provider_identity",
        fields: ["*"],
        filters: {
            provider: "emailpass",
            entity_id: customer.email,
        },
    });
    const authModuleService = container.resolve(utils_1.Modules.AUTH);
    if (providerIdentity) {
        await authModuleService.updateProviderIdentities([
            {
                id: providerIdentity.id,
                user_metadata: {
                    role: "company_admin",
                },
            },
        ]);
    }
    return new workflows_sdk_1.StepResponse(undefined, input);
}, async (input, { container }) => {
    const authModuleService = container.resolve(utils_1.Modules.AUTH);
    await authModuleService.updateProviderIdentities([
        {
            id: input.providerIdentityId,
            user_metadata: {
                role: null,
            },
        },
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWFkbWluLXJvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2VtcGxveWVlL3N0ZXBzL3NldC1hZG1pbi1yb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUErRTtBQUMvRSxxRUFBNkU7QUFFaEUsUUFBQSxnQkFBZ0IsR0FBRyxJQUFBLDBCQUFVLEVBQ3hDLGdCQUFnQixFQUNoQixLQUFLLEVBQ0gsS0FBaUQsRUFDakQsRUFBRSxTQUFTLEVBQUUsRUFDQyxFQUFFO0lBQ2hCLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUNqQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixDQUFDO1FBQ2xELE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUNyQjtLQUNGLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQztJQUVGLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxXQUFXLEtBQUssS0FBSyxFQUFFLENBQUM7UUFDN0MsT0FBTyxJQUFJLDRCQUFZLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQ2pCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUNuQjtRQUNFLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNqQixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDckI7S0FDRixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUM7SUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLE9BQU8sSUFBSSw0QkFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLEdBQ3pCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1NBQzFCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUN6QyxlQUFPLENBQUMsSUFBSSxDQUNiLENBQUM7SUFFRixJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDckIsTUFBTSxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQztZQUMvQztnQkFDRSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtnQkFDdkIsYUFBYSxFQUFFO29CQUNiLElBQUksRUFBRSxlQUFlO2lCQUN0QjthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sSUFBSSw0QkFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1QyxDQUFDLEVBQ0QsS0FBSyxFQUFFLEtBQXFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzdELE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDekMsZUFBTyxDQUFDLElBQUksQ0FDYixDQUFDO0lBRUYsTUFBTSxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQztRQUMvQztZQUNFLEVBQUUsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVCLGFBQWEsRUFBRTtnQkFDYixJQUFJLEVBQUUsSUFBSTthQUNYO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQ0YsQ0FBQyJ9