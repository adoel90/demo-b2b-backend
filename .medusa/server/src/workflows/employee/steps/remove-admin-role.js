"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAdminRoleStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_2 = require("@medusajs/framework/utils");
exports.removeAdminRoleStep = (0, workflows_sdk_1.createStep)("remove-admin-role", async (input, { container }) => {
    const authModuleService = container.resolve(utils_1.Modules.AUTH);
    const query = container.resolve(utils_2.ContainerRegistrationKeys.QUERY);
    const { data: [providerIdentity], } = await query.graph({
        entity: "provider_identity",
        fields: ["id"],
        filters: {
            provider: "emailpass",
            entity_id: input.email,
        },
    });
    await authModuleService.updateProviderIdentities([
        {
            id: providerIdentity.id,
            user_metadata: {
                role: null,
            },
        },
    ]);
    return new workflows_sdk_1.StepResponse(undefined, providerIdentity.id);
}, async (providerIdentityId, { container }) => {
    const authModuleService = container.resolve(utils_1.Modules.AUTH);
    await authModuleService.updateProviderIdentities([
        {
            id: providerIdentityId,
            user_metadata: {
                role: "company_admin",
            },
        },
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWFkbWluLXJvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2VtcGxveWVlL3N0ZXBzL3JlbW92ZS1hZG1pbi1yb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFvRDtBQUNwRCxxRUFBNkU7QUFDN0UscURBQXNFO0FBRXpELFFBQUEsbUJBQW1CLEdBQUcsSUFBQSwwQkFBVSxFQUMzQyxtQkFBbUIsRUFDbkIsS0FBSyxFQUNILEtBQXdCLEVBQ3hCLEVBQUUsU0FBUyxFQUFFLEVBQzZCLEVBQUU7SUFDNUMsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUN6QyxlQUFPLENBQUMsSUFBSSxDQUNiLENBQUM7SUFFRixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUN6QixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sRUFBRTtZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRSxLQUFLLENBQUMsS0FBSztTQUN2QjtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0saUJBQWlCLENBQUMsd0JBQXdCLENBQUM7UUFDL0M7WUFDRSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtZQUN2QixhQUFhLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLElBQUk7YUFDWDtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLDRCQUFZLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFELENBQUMsRUFDRCxLQUFLLEVBQUUsa0JBQTBCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2xELE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDekMsZUFBTyxDQUFDLElBQUksQ0FDYixDQUFDO0lBRUYsTUFBTSxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQztRQUMvQztZQUNFLEVBQUUsRUFBRSxrQkFBa0I7WUFDdEIsYUFBYSxFQUFFO2dCQUNiLElBQUksRUFBRSxlQUFlO2FBQ3RCO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQ0YsQ0FBQyJ9