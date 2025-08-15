"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../../../workflows/company/workflows/");
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = req.params;
    const { group_id } = req.body;
    await workflows_1.addCompanyToCustomerGroupWorkflow.run({
        input: { company_id: id, group_id },
        container: req.scope,
    });
    const { data: [company], } = await query.graph({
        entity: "companies",
        fields: req.remoteQueryConfig?.fields,
        filters: { id },
    }, { throwIfKeyNotFound: true });
    res.json({ company });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2NvbXBhbmllcy9baWRdL2N1c3RvbWVyLWdyb3VwL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFEQUFzRTtBQUN0RSwyRUFBZ0c7QUFHekYsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUFtRSxFQUNuRSxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFOUIsTUFBTSw2Q0FBaUMsQ0FBQyxHQUFHLENBQUM7UUFDMUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUU7UUFDbkMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO0tBQ3JCLENBQUMsQ0FBQztJQUVILE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FDaEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNO1FBQ3JDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRTtLQUNoQixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUM7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUM7QUF6QlcsUUFBQSxJQUFJLFFBeUJmIn0=