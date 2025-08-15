"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/utils");
const workflows_1 = require("../../../../../../workflows/employee/workflows");
const GET = async (req, res) => {
    const { employeeId } = req.params;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [employee], } = await query.graph({
        entity: "employee",
        // TODO: fix this
        fields: req.queryConfig.fields,
        filters: {
            ...req.filterableFields,
            id: employeeId,
        },
    }, { throwIfKeyNotFound: true });
    res.json({ employee });
};
exports.GET = GET;
const POST = async (req, res) => {
    const { id, employeeId } = req.params;
    const { spending_limit, is_admin } = req.validatedBody;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
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
        // TODO: fix this
        fields: req.queryConfig.fields,
        filters: {
            ...req.filterableFields,
            id: employeeId,
        },
    }, { throwIfKeyNotFound: true });
    res.json({ employee });
};
exports.POST = POST;
const DELETE = async (req, res) => {
    const { employeeId } = req.params;
    await workflows_1.deleteEmployeesWorkflow.run({
        input: [employeeId],
        container: req.scope,
    });
    res.json({
        id: employeeId,
        object: "employee",
        deleted: true,
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NvbXBhbmllcy9baWRdL2VtcGxveWVlcy9bZW1wbG95ZWVJZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkNBQTREO0FBQzVELDhFQUd3RDtBQU1qRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQThDLEVBQzlDLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQ2pCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUNuQjtRQUNFLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLGlCQUFpQjtRQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLEdBQUcsR0FBRyxDQUFDLGdCQUFnQjtZQUN2QixFQUFFLEVBQUUsVUFBVTtTQUNmO0tBQ0YsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBdkJXLFFBQUEsR0FBRyxPQXVCZDtBQUVLLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBMkMsRUFDM0MsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN0QyxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDdkQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxtQ0FBdUIsQ0FBQyxHQUFHLENBQUM7UUFDaEMsS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFLFVBQVU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLGNBQWM7WUFDZCxRQUFRO1NBQ1Q7UUFDRCxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7S0FDckIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUNqQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsVUFBVTtRQUNsQixpQkFBaUI7UUFDakIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0I7WUFDdkIsRUFBRSxFQUFFLFVBQVU7U0FDZjtLQUNGLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQztJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQWxDVyxRQUFBLElBQUksUUFrQ2Y7QUFFSyxNQUFNLE1BQU0sR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDdEUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFbEMsTUFBTSxtQ0FBdUIsQ0FBQyxHQUFHLENBQUM7UUFDaEMsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ25CLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztLQUNyQixDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsRUFBRSxFQUFFLFVBQVU7UUFDZCxNQUFNLEVBQUUsVUFBVTtRQUNsQixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQWJXLFFBQUEsTUFBTSxVQWFqQiJ9