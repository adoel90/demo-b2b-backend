"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCompanyToCustomerGroupWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const core_flows_1 = require("@medusajs/core-flows");
const company_1 = require("../../../modules/company");
const utils_1 = require("@medusajs/framework/utils");
const add_company_employees_to_customer_group_1 = require("../steps/add-company-employees-to-customer-group");
exports.addCompanyToCustomerGroupWorkflow = (0, workflows_sdk_1.createWorkflow)("add-company-to-customer-group", function (input) {
    (0, core_flows_1.createRemoteLinkStep)([
        {
            [company_1.COMPANY_MODULE]: {
                company_id: input.company_id,
            },
            [utils_1.Modules.CUSTOMER]: {
                customer_group_id: input.group_id,
            },
        },
    ]);
    (0, add_company_employees_to_customer_group_1.addCompanyEmployeesToCustomerGroupStep)({
        company_id: input.company_id,
    });
    return new workflows_sdk_1.WorkflowResponse(input);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNvbXBhbnktdG8tY3VzdG9tZXItZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NvbXBhbnkvd29ya2Zsb3dzL2FkZC1jb21wYW55LXRvLWN1c3RvbWVyLWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEyRTtBQUMzRSxxREFBNEQ7QUFDNUQsc0RBQTBEO0FBQzFELHFEQUFvRDtBQUNwRCw4R0FBMEc7QUFFN0YsUUFBQSxpQ0FBaUMsR0FBRyxJQUFBLDhCQUFjLEVBQzdELCtCQUErQixFQUMvQixVQUFVLEtBQStDO0lBQ3ZELElBQUEsaUNBQW9CLEVBQUM7UUFDbkI7WUFDRSxDQUFDLHdCQUFjLENBQUMsRUFBRTtnQkFDaEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO2FBQzdCO1lBQ0QsQ0FBQyxlQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxRQUFRO2FBQ2xDO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFBLGdGQUFzQyxFQUFDO1FBQ3JDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtLQUM3QixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksZ0NBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUNGLENBQUMifQ==