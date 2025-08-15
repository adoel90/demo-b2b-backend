"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCompanyFromCustomerGroupWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const company_1 = require("../../../modules/company");
const remove_company_employees_from_customer_group_1 = require("../steps/remove-company-employees-from-customer-group");
exports.removeCompanyFromCustomerGroupWorkflow = (0, workflows_sdk_1.createWorkflow)("remove-company-from-customer-group", function (input) {
    (0, remove_company_employees_from_customer_group_1.removeCompanyEmployeesFromCustomerGroupStep)({
        company_id: input.company_id,
    });
    (0, core_flows_1.removeRemoteLinkStep)([
        {
            [company_1.COMPANY_MODULE]: {
                company_id: input.company_id,
            },
            [utils_1.Modules.CUSTOMER]: {
                customer_group_id: input.group_id,
            },
        },
    ]);
    return new workflows_sdk_1.WorkflowResponse(input);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNvbXBhbnktZnJvbS1jdXN0b21lci1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29tcGFueS93b3JrZmxvd3MvcmVtb3ZlLWNvbXBhbnktZnJvbS1jdXN0b21lci1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBb0Q7QUFDcEQsNERBQW1FO0FBQ25FLDJEQUEyRTtBQUMzRSxzREFBMEQ7QUFDMUQsd0hBQW9IO0FBRXZHLFFBQUEsc0NBQXNDLEdBQUcsSUFBQSw4QkFBYyxFQUNsRSxvQ0FBb0MsRUFDcEMsVUFBVSxLQUErQztJQUN2RCxJQUFBLDBGQUEyQyxFQUFDO1FBQzFDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtLQUM3QixDQUFDLENBQUM7SUFFSCxJQUFBLGlDQUFvQixFQUFDO1FBQ25CO1lBQ0UsQ0FBQyx3QkFBYyxDQUFDLEVBQUU7Z0JBQ2hCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTthQUM3QjtZQUNELENBQUMsZUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNsQixpQkFBaUIsRUFBRSxLQUFLLENBQUMsUUFBUTthQUNsQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLGdDQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FDRixDQUFDIn0=