"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../../../../workflows/employee/workflows");
const GET = async (req, res) => {
    const { id, employeeId } = req.params;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [employee], } = await query.graph({
        entity: "employee",
        fields: req.queryConfig?.fields,
        filters: { ...req.filterableFields, id: employeeId },
    }, { throwIfKeyNotFound: true });
    res.json({ employee });
};
exports.GET = GET;
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id, employeeId } = req.params;
    const { spending_limit, is_admin } = req.body;
    await workflows_1.updateEmployeesWorkflow.run({
        input: {
            id: employeeId,
            company_id: id,
            spending_limit,
            is_admin,
        },
        container: req.scope,
    });
    const { data: [employee], } = await query.graph({
        entity: "employee",
        fields: req.queryConfig?.fields,
        filters: { ...req.filterableFields, id: employeeId },
    }, { throwIfKeyNotFound: true });
    res.json({ employee });
};
exports.POST = POST;
const DELETE = async (req, res) => {
    const { id, employeeId } = req.params;
    await workflows_1.deleteEmployeesWorkflow.run({
        input: {
            id: employeeId,
            company_id: id,
        },
        container: req.scope,
    });
    res.status(200).json({
        id: employeeId,
        object: "employee",
        deleted: true,
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2NvbXBhbmllcy9baWRdL2VtcGxveWVlcy9bZW1wbG95ZWVJZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEscURBQXNFO0FBQ3RFLDhFQUd3RDtBQU1qRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQTJELEVBQzNELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdEMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUNqQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNO1FBQy9CLE9BQU8sRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7S0FDckQsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBbkJXLFFBQUEsR0FBRyxPQW1CZDtBQUVLLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBd0QsRUFDeEQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN0QyxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFOUMsTUFBTSxtQ0FBdUIsQ0FBQyxHQUFHLENBQUM7UUFDaEMsS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFLFVBQVU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLGNBQWM7WUFDZCxRQUFRO1NBQ1Q7UUFDRCxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7S0FDckIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUNqQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNO1FBQy9CLE9BQU8sRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7S0FDckQsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBOUJXLFFBQUEsSUFBSSxRQThCZjtBQUVLLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFDekIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUV0QyxNQUFNLG1DQUF1QixDQUFDLEdBQUcsQ0FBQztRQUNoQyxLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsVUFBVTtZQUNkLFVBQVUsRUFBRSxFQUFFO1NBQ2Y7UUFDRCxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7S0FDckIsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkIsRUFBRSxFQUFFLFVBQVU7UUFDZCxNQUFNLEVBQUUsVUFBVTtRQUNsQixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQW5CVyxRQUFBLE1BQU0sVUFtQmpCIn0=