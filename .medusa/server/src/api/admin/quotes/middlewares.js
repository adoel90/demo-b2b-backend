"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminQuotesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.adminQuotesMiddlewares = [
    {
        method: ["GET"],
        matcher: "/admin/quotes",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetQuoteParams, query_config_1.listQuotesTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/quotes/:id",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetQuoteParams, query_config_1.retrieveQuoteTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/quotes/:id/send",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminSendQuote),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetQuoteParams, query_config_1.retrieveQuoteTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/quotes/:id/reject",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminRejectQuote),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetQuoteParams, query_config_1.retrieveQuoteTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/quotes/:id/messages",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminCreateQuoteMessage),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetQuoteParams, query_config_1.retrieveQuoteTransformQueryConfig),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3F1b3Rlcy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFHNkI7QUFFN0IsaURBR3dCO0FBQ3hCLDZDQUtzQjtBQUVULFFBQUEsc0JBQXNCLEdBQXNCO0lBQ3ZEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLGVBQWU7UUFDeEIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsZ0NBQW1CLEVBQ25CLDZDQUE4QixDQUMvQjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsZ0NBQW1CLEVBQ25CLGdEQUFpQyxDQUNsQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsMkJBQWMsQ0FBQztZQUN4QyxJQUFBLHFDQUF5QixFQUN2QixnQ0FBbUIsRUFDbkIsZ0RBQWlDLENBQ2xDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQyw2QkFBZ0IsQ0FBQztZQUMxQyxJQUFBLHFDQUF5QixFQUN2QixnQ0FBbUIsRUFDbkIsZ0RBQWlDLENBQ2xDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSw0QkFBNEI7UUFDckMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQyxvQ0FBdUIsQ0FBQztZQUNqRCxJQUFBLHFDQUF5QixFQUN2QixnQ0FBbUIsRUFDbkIsZ0RBQWlDLENBQ2xDO1NBQ0Y7S0FDRjtDQUNGLENBQUMifQ==