"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = void 0;
const remove_company_from_customer_group_1 = require("../../../../../../workflows/company/workflows/remove-company-from-customer-group");
const DELETE = async (req, res) => {
    const { id, customerGroupId } = req.params;
    await remove_company_from_customer_group_1.removeCompanyFromCustomerGroupWorkflow.run({
        input: { company_id: id, group_id: customerGroupId },
        container: req.scope,
    });
    res.status(200).send();
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2NvbXBhbmllcy9baWRdL2N1c3RvbWVyLWdyb3VwL1tjdXN0b21lckdyb3VwSWRdL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHlJQUEwSTtBQUduSSxNQUFNLE1BQU0sR0FBRyxLQUFLLEVBQ3pCLEdBQXdFLEVBQ3hFLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFM0MsTUFBTSwyRUFBc0MsQ0FBQyxHQUFHLENBQUM7UUFDL0MsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFO1FBQ3BELFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztLQUNyQixDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQVpXLFFBQUEsTUFBTSxVQVlqQiJ9