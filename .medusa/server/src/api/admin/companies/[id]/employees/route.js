"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
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
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take,
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = req.params;
    const { result: createdEmployee } = await workflows_1.createEmployeesWorkflow.run({
        input: {
            employeeData: { ...req.validatedBody, company_id: id },
            customerId: req.validatedBody.customer_id,
        },
        container: req.scope,
    });
    const { data: [employee], } = await query.graph({
        entity: "employee",
        fields: req.queryConfig.fields,
        filters: { id: createdEmployee.id },
    }, { throwIfKeyNotFound: true });
    res.json({ employee });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2NvbXBhbmllcy9baWRdL2VtcGxveWVlcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBc0U7QUFDdEUsMkVBQXNGO0FBTS9FLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBOEMsRUFDOUMsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQ3JCLFFBQVEsR0FDVCxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQztRQUNsRCxPQUFPLEVBQUU7WUFDUCxFQUFFO1lBQ0YsR0FBRyxHQUFHLENBQUMsZ0JBQWdCO1NBQ3hCO0tBQ0YsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFNBQVM7UUFDVCxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUs7UUFDdEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJO1FBQ3RCLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSTtLQUN0QixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUE1QlcsUUFBQSxHQUFHLE9BNEJkO0FBRUssTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUEyQyxFQUMzQyxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFMUIsTUFBTSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsR0FBRyxNQUFNLG1DQUF1QixDQUFDLEdBQUcsQ0FBQztRQUNwRSxLQUFLLEVBQUU7WUFDTCxZQUFZLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRTtZQUN0RCxVQUFVLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXO1NBQzFDO1FBQ0QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO0tBQ3JCLENBQUMsQ0FBQztJQUVILE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FDakIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFDLEVBQUUsRUFBRTtLQUNwQyxFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUM7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUM7QUEzQlcsUUFBQSxJQUFJLFFBMkJmIn0=