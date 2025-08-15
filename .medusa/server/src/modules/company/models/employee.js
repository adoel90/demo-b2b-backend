"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const utils_1 = require("@medusajs/framework/utils");
const company_1 = require("./company");
exports.Employee = utils_1.model.define("employee", {
    id: utils_1.model
        .id({
        prefix: "emp",
    })
        .primaryKey(),
    spending_limit: utils_1.model.bigNumber().default(0),
    is_admin: utils_1.model.boolean().default(false),
    company: utils_1.model.belongsTo(() => company_1.Company, {
        mappedBy: "employees",
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jb21wYW55L21vZGVscy9lbXBsb3llZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBa0Q7QUFDbEQsdUNBQW9DO0FBRXZCLFFBQUEsUUFBUSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO0lBQy9DLEVBQUUsRUFBRSxhQUFLO1NBQ04sRUFBRSxDQUFDO1FBQ0YsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDO1NBQ0QsVUFBVSxFQUFFO0lBQ2YsY0FBYyxFQUFFLGFBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVDLFFBQVEsRUFBRSxhQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUN4QyxPQUFPLEVBQUUsYUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxFQUFFO1FBQ3RDLFFBQVEsRUFBRSxXQUFXO0tBQ3RCLENBQUM7Q0FDSCxDQUFDLENBQUMifQ==