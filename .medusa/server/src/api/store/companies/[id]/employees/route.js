"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/utils");
const workflows_1 = require("../../../../../workflows/employee/workflows");
const GET = async (req, res) => {
    const { id } = req.params;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [{ employees }], metadata, } = await query.graph({
        entity: "company",
        fields: [...req.queryConfig.fields, "employees.*"],
        filters: {
            id,
            ...req.filterableFields,
        },
    }, { throwIfKeyNotFound: true });
    res.json({
        employees,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const { id } = req.params;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { result: createdEmployee } = await workflows_1.createEmployeesWorkflow.run({
        input: {
            employeeData: {
                ...req.validatedBody,
                company_id: id,
            },
            customerId: req.validatedBody.customer_id,
        },
        container: req.scope,
    });
    const { data: [employee], } = await query.graph({
        entity: "employee",
        fields: req.queryConfig.fields,
        filters: {
            ...req.filterableFields,
            id: createdEmployee.id,
        },
    }, { throwIfKeyNotFound: true });
    res.json({ employee });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NvbXBhbmllcy9baWRdL2VtcGxveWVlcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBNEQ7QUFDNUQsMkVBQXNGO0FBTS9FLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBOEMsRUFDOUMsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQ3JCLFFBQVEsR0FDVCxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQztRQUNsRCxPQUFPLEVBQUU7WUFDUCxFQUFFO1lBQ0YsR0FBRyxHQUFHLENBQUMsZ0JBQWdCO1NBQ3hCO0tBQ0YsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFNBQVM7UUFDVCxLQUFLLEVBQUUsUUFBUyxDQUFDLEtBQUs7UUFDdEIsTUFBTSxFQUFFLFFBQVMsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxRQUFTLENBQUMsSUFBSTtLQUN0QixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUE1QlcsUUFBQSxHQUFHLE9BNEJkO0FBRUssTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUEyQyxFQUMzQyxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsR0FBRyxNQUFNLG1DQUF1QixDQUFDLEdBQUcsQ0FBQztRQUNwRSxLQUFLLEVBQUU7WUFDTCxZQUFZLEVBQUU7Z0JBQ1osR0FBRyxHQUFHLENBQUMsYUFBYTtnQkFDcEIsVUFBVSxFQUFFLEVBQUU7YUFDZjtZQUNELFVBQVUsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVc7U0FDMUM7UUFDRCxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7S0FDckIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUNqQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLEdBQUcsR0FBRyxDQUFDLGdCQUFnQjtZQUN2QixFQUFFLEVBQUUsZUFBZSxDQUFDLEVBQUU7U0FDdkI7S0FDRixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUM7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUM7QUFqQ1csUUFBQSxJQUFJLFFBaUNmIn0=