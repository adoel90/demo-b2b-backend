"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeCompaniesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const medusa_1 = require("@medusajs/medusa");
const ensure_role_1 = require("../../middlewares/ensure-role");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.storeCompaniesMiddlewares = [
    /* Company middlewares */
    {
        method: "ALL",
        matcher: "/store/companies*",
        middlewares: [(0, medusa_1.authenticate)("customer", ["session", "bearer"])],
    },
    {
        method: ["GET"],
        matcher: "/store/companies",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetCompanyParams, query_config_1.storeCompanyQueryConfig.list),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/companies",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.StoreCreateCompany),
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetCompanyParams, query_config_1.storeCompanyQueryConfig.retrieve),
        ],
    },
    {
        method: ["GET"],
        matcher: "/store/companies/:id",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetCompanyParams, query_config_1.storeCompanyQueryConfig.retrieve),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/companies/:id",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetCompanyParams, query_config_1.storeCompanyQueryConfig.retrieve),
        ],
    },
    /* Employee middlewares */
    {
        method: ["GET"],
        matcher: "/store/companies/:id/employees",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetEmployeeParams, query_config_1.storeEmployeeQueryConfig.list),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/companies/:id/employees",
        middlewares: [
            (0, ensure_role_1.ensureRole)("company_admin"),
            (0, framework_1.validateAndTransformBody)(validators_1.StoreCreateEmployee),
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetEmployeeParams, query_config_1.storeEmployeeQueryConfig.list),
        ],
    },
    {
        method: ["GET"],
        matcher: "/store/companies/:id/employees/:employee_id",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetEmployeeParams, query_config_1.storeEmployeeQueryConfig.retrieve),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/companies/:id/employees/:employee_id",
        middlewares: [
            (0, ensure_role_1.ensureRole)("company_admin"),
            (0, framework_1.validateAndTransformBody)(validators_1.StoreUpdateEmployee),
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetEmployeeParams, query_config_1.storeEmployeeQueryConfig.retrieve),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/companies/:id/approval-settings",
        middlewares: [
            (0, ensure_role_1.ensureRole)("company_admin"),
            (0, framework_1.validateAndTransformBody)(validators_1.StoreUpdateApprovalSettings),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NvbXBhbmllcy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFJNkI7QUFDN0IsNkNBQWdEO0FBQ2hELCtEQUEyRDtBQUMzRCxpREFHd0I7QUFDeEIsNkNBT3NCO0FBRVQsUUFBQSx5QkFBeUIsR0FBc0I7SUFDMUQseUJBQXlCO0lBQ3pCO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLFdBQVcsRUFBRSxDQUFDLElBQUEscUJBQVksRUFBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUMvRDtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixrQ0FBcUIsRUFDckIsc0NBQXVCLENBQUMsSUFBSSxDQUM3QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsK0JBQWtCLENBQUM7WUFDNUMsSUFBQSxxQ0FBeUIsRUFDdkIsa0NBQXFCLEVBQ3JCLHNDQUF1QixDQUFDLFFBQVEsQ0FDakM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLGtDQUFxQixFQUNyQixzQ0FBdUIsQ0FBQyxRQUFRLENBQ2pDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsa0NBQXFCLEVBQ3JCLHNDQUF1QixDQUFDLFFBQVEsQ0FDakM7U0FDRjtLQUNGO0lBRUQsMEJBQTBCO0lBQzFCO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLGdDQUFnQztRQUN6QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixtQ0FBc0IsRUFDdEIsdUNBQXdCLENBQUMsSUFBSSxDQUM5QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsZ0NBQWdDO1FBQ3pDLFdBQVcsRUFBRTtZQUNYLElBQUEsd0JBQVUsRUFBQyxlQUFlLENBQUM7WUFDM0IsSUFBQSxvQ0FBd0IsRUFBQyxnQ0FBbUIsQ0FBQztZQUM3QyxJQUFBLHFDQUF5QixFQUN2QixtQ0FBc0IsRUFDdEIsdUNBQXdCLENBQUMsSUFBSSxDQUM5QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSw2Q0FBNkM7UUFDdEQsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsbUNBQXNCLEVBQ3RCLHVDQUF3QixDQUFDLFFBQVEsQ0FDbEM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDZDQUE2QztRQUN0RCxXQUFXLEVBQUU7WUFDWCxJQUFBLHdCQUFVLEVBQUMsZUFBZSxDQUFDO1lBQzNCLElBQUEsb0NBQXdCLEVBQUMsZ0NBQW1CLENBQUM7WUFDN0MsSUFBQSxxQ0FBeUIsRUFDdkIsbUNBQXNCLEVBQ3RCLHVDQUF3QixDQUFDLFFBQVEsQ0FDbEM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLHdDQUF3QztRQUNqRCxXQUFXLEVBQUU7WUFDWCxJQUFBLHdCQUFVLEVBQUMsZUFBZSxDQUFDO1lBQzNCLElBQUEsb0NBQXdCLEVBQUMsd0NBQTJCLENBQUM7U0FDdEQ7S0FDRjtDQUNGLENBQUMifQ==