"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { status } = req.validatedQuery || {};
    let filters = {};
    if (status) {
        filters = {
            status,
        };
    }
    const { data: approvalStatuses, metadata } = await query.graph({
        entity: "approval_status",
        ...req.queryConfig,
        fields: [
            "cart.*",
            "cart.approvals.*",
            "cart.approval_status.*",
            "cart.company.approval_settings.*",
            "cart.company.*",
            "cart.items.*",
            "cart.completed_at",
        ],
        filters: {
            ...filters,
        },
    });
    let carts = approvalStatuses
        .map((approvalStatus) => approvalStatus.cart)
        .filter(Boolean);
    res.json({
        carts_with_approvals: carts,
        ...metadata,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2FwcHJvdmFscy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxxREFBc0U7QUFHL0QsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFzRCxFQUN0RCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO0lBRTVDLElBQUksT0FBTyxHQUFRLEVBQUUsQ0FBQztJQUV0QixJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ1gsT0FBTyxHQUFHO1lBQ1IsTUFBTTtTQUNQLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDN0QsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixHQUFHLEdBQUcsQ0FBQyxXQUFXO1FBQ2xCLE1BQU0sRUFBRTtZQUNOLFFBQVE7WUFDUixrQkFBa0I7WUFDbEIsd0JBQXdCO1lBQ3hCLGtDQUFrQztZQUNsQyxnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLG1CQUFtQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNQLEdBQUcsT0FBTztTQUNYO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxLQUFLLEdBQUcsZ0JBQWdCO1NBQ3pCLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztTQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkIsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLG9CQUFvQixFQUFFLEtBQUs7UUFDM0IsR0FBRyxRQUFRO0tBQ1osQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBekNXLFFBQUEsR0FBRyxPQXlDZCJ9