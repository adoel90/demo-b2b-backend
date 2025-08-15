"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { fields, pagination } = req.remoteQueryConfig;
    const { data: quotes, metadata } = await query.graph({
        entity: "quote",
        fields,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3F1b3Rlcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBc0U7QUFHL0QsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUEyQyxFQUMzQyxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDckQsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25ELE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTTtRQUNOLFVBQVUsRUFBRTtZQUNWLEdBQUcsVUFBVTtZQUNiLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSztTQUN2QjtLQUNGLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxNQUFNO1FBQ04sS0FBSyxFQUFFLFFBQVMsQ0FBQyxLQUFLO1FBQ3RCLE1BQU0sRUFBRSxRQUFTLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsUUFBUyxDQUFDLElBQUk7S0FDdEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBdEJXLFFBQUEsR0FBRyxPQXNCZCJ9