"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeMiddlewares = void 0;
const middlewares_1 = require("./approvals/middlewares");
const middlewares_2 = require("./carts/middlewares");
const middlewares_3 = require("./companies/middlewares");
const middlewares_4 = require("./free-shipping/middlewares");
const middlewares_5 = require("./quotes/middlewares");
exports.storeMiddlewares = [
    ...middlewares_2.storeCartsMiddlewares,
    ...middlewares_3.storeCompaniesMiddlewares,
    ...middlewares_5.storeQuotesMiddlewares,
    ...middlewares_4.storeFreeShippingMiddlewares,
    ...middlewares_1.storeApprovalsMiddlewares,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlEQUFvRTtBQUNwRSxxREFBNEQ7QUFDNUQseURBQW9FO0FBQ3BFLDZEQUEyRTtBQUMzRSxzREFBOEQ7QUFFakQsUUFBQSxnQkFBZ0IsR0FBc0I7SUFDakQsR0FBRyxtQ0FBcUI7SUFDeEIsR0FBRyx1Q0FBeUI7SUFDNUIsR0FBRyxvQ0FBc0I7SUFDekIsR0FBRywwQ0FBNEI7SUFDL0IsR0FBRyx1Q0FBeUI7Q0FDN0IsQ0FBQyJ9