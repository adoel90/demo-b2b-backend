"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeCartsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.storeCartsMiddlewares = [
    {
        method: ["POST"],
        matcher: "/store/carts/:id/line-items/bulk",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.StoreAddLineItemsBulk),
            (0, framework_1.validateAndTransformQuery)(validators_1.GetCartLineItemsBulkParams, query_config_1.retrieveCartTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/carts/:id/approvals",
        middlewares: [(0, framework_1.authenticate)("customer", ["bearer", "session"])],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NhcnRzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUk2QjtBQUU3QixpREFBa0U7QUFDbEUsNkNBR3NCO0FBRVQsUUFBQSxxQkFBcUIsR0FBc0I7SUFDdEQ7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLGtDQUFrQztRQUMzQyxXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLGtDQUFxQixDQUFDO1lBQy9DLElBQUEscUNBQXlCLEVBQ3ZCLHVDQUEwQixFQUMxQiwrQ0FBZ0MsQ0FDakM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDRCQUE0QjtRQUNyQyxXQUFXLEVBQUUsQ0FBQyxJQUFBLHdCQUFZLEVBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FDL0Q7Q0FDRixDQUFDIn0=