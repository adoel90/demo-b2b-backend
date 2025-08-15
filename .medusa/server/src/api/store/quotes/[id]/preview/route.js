"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const { id } = req.params;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [quote], } = await query.graph({
        entity: "quote",
        fields: req.queryConfig.fields,
        filters: { id },
    }, { throwIfKeyNotFound: true });
    const orderModuleService = req.scope.resolve(utils_1.Modules.ORDER);
    const preview = await orderModuleService.previewOrderChange(quote.draft_order_id);
    res.status(200).json({
        quote: {
            ...quote,
            order_preview: preview,
        },
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3F1b3Rlcy9baWRdL3ByZXZpZXcvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUEscURBQStFO0FBRXhFLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUM3QixpQ0FBeUIsQ0FBQyxLQUFLLENBQ2hDLENBQUM7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQ2QsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRTtLQUNoQixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUM7SUFFRixNQUFNLGtCQUFrQixHQUF3QixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDL0QsZUFBTyxDQUFDLEtBQUssQ0FDZCxDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FDekQsS0FBSyxDQUFDLGNBQWMsQ0FDckIsQ0FBQztJQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLEtBQUssRUFBRTtZQUNMLEdBQUcsS0FBSztZQUNSLGFBQWEsRUFBRSxPQUFPO1NBQ3ZCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBbENXLFFBQUEsR0FBRyxPQWtDZCJ9