"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminCompaniesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.adminCompaniesMiddlewares = [
    /* Companies Middlewares */
    {
        method: ["GET"],
        matcher: "/admin/companies",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetCompanyParams, query_config_1.adminCompanyQueryConfig.list),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/companies",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminCreateCompany),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetCompanyParams, query_config_1.adminCompanyQueryConfig.retrieve),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/companies/:id",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetCompanyParams, query_config_1.adminCompanyQueryConfig.retrieve),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/companies/:id",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminUpdateCompany),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetCompanyParams, query_config_1.adminCompanyQueryConfig.retrieve),
        ],
    },
    /* Employees Middlewares */
    {
        method: ["GET"],
        matcher: "/admin/companies/:id/employees",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetEmployeeParams, query_config_1.adminEmployeeQueryConfig.list),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/companies/:id/employees",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminCreateEmployee),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetEmployeeParams, query_config_1.adminEmployeeQueryConfig.retrieve),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/companies/:id/employees/:employee_id",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetEmployeeParams, query_config_1.adminEmployeeQueryConfig.retrieve),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/companies/:id/employees/:employee_id",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminUpdateEmployee),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetEmployeeParams, query_config_1.adminEmployeeQueryConfig.retrieve),
        ],
    },
    /* Approval Settings Middlewares */
    {
        method: ["POST"],
        matcher: "/admin/companies/:id/approval-settings",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminUpdateApprovalSettings),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetApprovalSettingsParams, query_config_1.adminApprovalSettingsQueryConfig.retrieve),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2NvbXBhbmllcy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFHNkI7QUFFN0IsaURBSXdCO0FBQ3hCLDZDQVNzQjtBQUVULFFBQUEseUJBQXlCLEdBQXNCO0lBQzFELDJCQUEyQjtJQUMzQjtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsa0NBQXFCLEVBQ3JCLHNDQUF1QixDQUFDLElBQUksQ0FDN0I7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLCtCQUFrQixDQUFDO1lBQzVDLElBQUEscUNBQXlCLEVBQ3ZCLGtDQUFxQixFQUNyQixzQ0FBdUIsQ0FBQyxRQUFRLENBQ2pDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixrQ0FBcUIsRUFDckIsc0NBQXVCLENBQUMsUUFBUSxDQUNqQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsK0JBQWtCLENBQUM7WUFDNUMsSUFBQSxxQ0FBeUIsRUFDdkIsa0NBQXFCLEVBQ3JCLHNDQUF1QixDQUFDLFFBQVEsQ0FDakM7U0FDRjtLQUNGO0lBRUQsMkJBQTJCO0lBQzNCO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLGdDQUFnQztRQUN6QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixtQ0FBc0IsRUFDdEIsdUNBQXdCLENBQUMsSUFBSSxDQUM5QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsZ0NBQWdDO1FBQ3pDLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsZ0NBQW1CLENBQUM7WUFDN0MsSUFBQSxxQ0FBeUIsRUFDdkIsbUNBQXNCLEVBQ3RCLHVDQUF3QixDQUFDLFFBQVEsQ0FDbEM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsNkNBQTZDO1FBQ3RELFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLG1DQUFzQixFQUN0Qix1Q0FBd0IsQ0FBQyxRQUFRLENBQ2xDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSw2Q0FBNkM7UUFDdEQsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQyxnQ0FBbUIsQ0FBQztZQUM3QyxJQUFBLHFDQUF5QixFQUN2QixtQ0FBc0IsRUFDdEIsdUNBQXdCLENBQUMsUUFBUSxDQUNsQztTQUNGO0tBQ0Y7SUFDRCxtQ0FBbUM7SUFDbkM7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLHdDQUF3QztRQUNqRCxXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLHdDQUEyQixDQUFDO1lBQ3JELElBQUEscUNBQXlCLEVBQ3ZCLDJDQUE4QixFQUM5QiwrQ0FBZ0MsQ0FBQyxRQUFRLENBQzFDO1NBQ0Y7S0FDRjtDQUNGLENBQUMifQ==