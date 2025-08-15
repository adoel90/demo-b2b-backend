"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeFreeShippingMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const validators_1 = require("./validators");
exports.storeFreeShippingMiddlewares = [
    {
        method: ["GET"],
        matcher: "/store/free-shipping/prices",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetFreeShippingPricesParams, {
                defaultLimit: 20,
                isList: true,
            }),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2ZyZWUtc2hpcHBpbmcvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQWdFO0FBRWhFLDZDQUFnRTtBQUVuRCxRQUFBLDRCQUE0QixHQUFzQjtJQUM3RDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSw2QkFBNkI7UUFDdEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFBQyw2Q0FBZ0MsRUFBRTtnQkFDMUQsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sRUFBRSxJQUFJO2FBQ2IsQ0FBQztTQUNIO0tBQ0Y7Q0FDRixDQUFDIn0=