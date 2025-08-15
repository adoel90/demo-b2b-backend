"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddlewares = void 0;
const middlewares_1 = require("./companies/middlewares");
const middlewares_2 = require("./quotes/middlewares");
const middlewares_3 = require("./approvals/middlewares");
exports.adminMiddlewares = [
    ...middlewares_1.adminCompaniesMiddlewares,
    ...middlewares_2.adminQuotesMiddlewares,
    ...middlewares_3.adminApprovalsMiddlewares,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlEQUFvRTtBQUNwRSxzREFBOEQ7QUFDOUQseURBQW9FO0FBRXZELFFBQUEsZ0JBQWdCLEdBQXNCO0lBQ2pELEdBQUcsdUNBQXlCO0lBQzVCLEdBQUcsb0NBQXNCO0lBQ3pCLEdBQUcsdUNBQXlCO0NBQzdCLENBQUMifQ==