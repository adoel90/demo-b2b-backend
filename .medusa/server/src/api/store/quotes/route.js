"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const create_request_for_quote_1 = require("../../../workflows/quote/workflows/create-request-for-quote");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { fields, pagination } = req.queryConfig;
    const { data: quotes, metadata } = await query.graph({
        entity: "quote",
        fields,
        filters: {
            customer_id: req.auth_context.actor_id,
        },
        pagination: {
            ...pagination,
            skip: pagination.skip,
        },
    });
    res.json({
        quotes,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { result: { quote: createdQuote }, } = await (0, create_request_for_quote_1.createRequestForQuoteWorkflow)(req.scope).run({
        input: {
            ...req.validatedBody,
            customer_id: req.auth_context.actor_id,
        },
    });
    const { data: [quote], } = await query.graph({
        entity: "quote",
        fields: req.queryConfig.fields,
        filters: { id: createdQuote.id },
    }, { throwIfKeyNotFound: true });
    return res.json({ quote });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3F1b3Rlcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLQSxxREFBc0U7QUFDdEUsMEdBQTRHO0FBR3JHLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBbUQsRUFDbkQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUM3QixpQ0FBeUIsQ0FBQyxLQUFLLENBQ2hDLENBQUM7SUFFRixNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDL0MsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25ELE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTTtRQUNOLE9BQU8sRUFBRTtZQUNQLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVE7U0FDdkM7UUFDRCxVQUFVLEVBQUU7WUFDVixHQUFHLFVBQVU7WUFDYixJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUs7U0FDdkI7S0FDRixDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsTUFBTTtRQUNOLEtBQUssRUFBRSxRQUFTLENBQUMsS0FBSztRQUN0QixNQUFNLEVBQUUsUUFBUyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLFFBQVMsQ0FBQyxJQUFJO0tBQ3RCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQTNCVyxRQUFBLEdBQUcsT0EyQmQ7QUFFSyxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQWdELEVBQ2hELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDN0IsaUNBQXlCLENBQUMsS0FBSyxDQUNoQyxDQUFDO0lBRUYsTUFBTSxFQUNKLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsR0FDaEMsR0FBRyxNQUFNLElBQUEsd0RBQTZCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyRCxLQUFLLEVBQUU7WUFDTCxHQUFHLEdBQUcsQ0FBQyxhQUFhO1lBQ3BCLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVE7U0FDdkM7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQ2QsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFO0tBQ2pDLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQztJQUVGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBN0JXLFFBQUEsSUFBSSxRQTZCZiJ9