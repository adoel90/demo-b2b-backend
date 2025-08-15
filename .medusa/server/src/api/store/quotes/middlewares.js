"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeQuotesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.storeQuotesMiddlewares = [
    {
        method: "ALL",
        matcher: "/store/quotes*",
        middlewares: [(0, framework_1.authenticate)("customer", ["session", "bearer"])],
    },
    {
        method: ["GET"],
        matcher: "/store/quotes",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.GetQuoteParams, query_config_1.listQuotesTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/quotes",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.CreateQuote),
            (0, framework_1.validateAndTransformQuery)(validators_1.GetQuoteParams, query_config_1.retrieveQuoteTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/store/quotes/:id",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.GetQuoteParams, query_config_1.retrieveQuoteTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/quotes/:id/accept",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AcceptQuote),
            (0, framework_1.validateAndTransformQuery)(validators_1.GetQuoteParams, query_config_1.retrieveQuoteTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/quotes/:id/reject",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.RejectQuote),
            (0, framework_1.validateAndTransformQuery)(validators_1.GetQuoteParams, query_config_1.retrieveQuoteTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/store/quotes/:id/preview",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.GetQuoteParams, query_config_1.retrieveQuoteTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/quotes/:id/messages",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.StoreCreateQuoteMessage),
            (0, framework_1.validateAndTransformQuery)(validators_1.GetQuoteParams, query_config_1.retrieveQuoteTransformQueryConfig),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3F1b3Rlcy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFJNkI7QUFFN0IsaURBR3dCO0FBQ3hCLDZDQU1zQjtBQUVULFFBQUEsc0JBQXNCLEdBQXNCO0lBQ3ZEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxDQUFDLElBQUEsd0JBQVksRUFBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUMvRDtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLGVBQWU7UUFDeEIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFBQywyQkFBYyxFQUFFLDZDQUE4QixDQUFDO1NBQzFFO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsZUFBZTtRQUN4QixXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLHdCQUFXLENBQUM7WUFDckMsSUFBQSxxQ0FBeUIsRUFDdkIsMkJBQWMsRUFDZCxnREFBaUMsQ0FDbEM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLDJCQUFjLEVBQ2QsZ0RBQWlDLENBQ2xDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQyx3QkFBVyxDQUFDO1lBQ3JDLElBQUEscUNBQXlCLEVBQ3ZCLDJCQUFjLEVBQ2QsZ0RBQWlDLENBQ2xDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQyx3QkFBVyxDQUFDO1lBQ3JDLElBQUEscUNBQXlCLEVBQ3ZCLDJCQUFjLEVBQ2QsZ0RBQWlDLENBQ2xDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QiwyQkFBYyxFQUNkLGdEQUFpQyxDQUNsQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsb0NBQXVCLENBQUM7WUFDakQsSUFBQSxxQ0FBeUIsRUFDdkIsMkJBQWMsRUFDZCxnREFBaUMsQ0FDbEM7U0FDRjtLQUNGO0NBQ0YsQ0FBQyJ9