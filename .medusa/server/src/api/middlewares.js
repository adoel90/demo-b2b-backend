"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const middlewares_1 = require("./admin/middlewares");
const middlewares_2 = require("./store/middlewares");
exports.default = (0, medusa_1.defineMiddlewares)({
    routes: [
        ...middlewares_1.adminMiddlewares,
        ...middlewares_2.storeMiddlewares,
        {
            matcher: "/store/customers/me",
            middlewares: [
                (req, res, next) => {
                    req.allowed = ["employee"];
                    next();
                },
            ],
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsNkNBQXFEO0FBQ3JELHFEQUF1RDtBQUN2RCxxREFBdUQ7QUFFdkQsa0JBQWUsSUFBQSwwQkFBaUIsRUFBQztJQUMvQixNQUFNLEVBQUU7UUFDTixHQUFHLDhCQUFnQjtRQUNuQixHQUFHLDhCQUFnQjtRQUNuQjtZQUNFLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsV0FBVyxFQUFFO2dCQUNYLENBQUMsR0FBa0IsRUFBRSxHQUFtQixFQUFFLElBQXdCLEVBQUUsRUFBRTtvQkFDcEUsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUMzQixJQUFJLEVBQUUsQ0FBQztnQkFDVCxDQUFDO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDIn0=