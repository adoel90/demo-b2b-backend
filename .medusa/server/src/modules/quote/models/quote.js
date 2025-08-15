"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quote = void 0;
const utils_1 = require("@medusajs/framework/utils");
const message_1 = require("./message");
exports.Quote = utils_1.model.define("quote", {
    id: utils_1.model.id({ prefix: "quo" }).primaryKey(),
    status: utils_1.model
        .enum([
        "pending_merchant",
        "pending_customer",
        "accepted",
        "customer_rejected",
        "merchant_rejected",
    ])
        .default("pending_merchant"),
    customer_id: utils_1.model.text(),
    draft_order_id: utils_1.model.text(),
    order_change_id: utils_1.model.text(),
    cart_id: utils_1.model.text(),
    messages: utils_1.model.hasMany(() => message_1.Message),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9xdW90ZS9tb2RlbHMvcXVvdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWtEO0FBQ2xELHVDQUFvQztBQUV2QixRQUFBLEtBQUssR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtJQUN6QyxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRTtJQUM1QyxNQUFNLEVBQUUsYUFBSztTQUNWLElBQUksQ0FBQztRQUNKLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixtQkFBbUI7S0FDcEIsQ0FBQztTQUNELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUM5QixXQUFXLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUN6QixjQUFjLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUM1QixlQUFlLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUM3QixPQUFPLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUNyQixRQUFRLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxDQUFDO0NBQ3ZDLENBQUMsQ0FBQyJ9