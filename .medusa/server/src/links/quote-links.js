"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const modules_sdk_1 = require("@medusajs/modules-sdk");
const quote_1 = require("../modules/quote");
modules_sdk_1.MedusaModule.setCustomLink(() => {
    return {
        isLink: true,
        isReadOnlyLink: true,
        extends: [
            {
                serviceName: quote_1.QUOTE_MODULE,
                relationship: {
                    serviceName: utils_1.Modules.ORDER,
                    entity: "Order",
                    primaryKey: "id",
                    foreignKey: "draft_order_id",
                    alias: "draft_order",
                    args: {
                        methodSuffix: "Orders",
                    },
                },
            },
            {
                serviceName: quote_1.QUOTE_MODULE,
                relationship: {
                    serviceName: utils_1.Modules.CART,
                    entity: "Cart",
                    primaryKey: "id",
                    foreignKey: "cart_id",
                    alias: "cart",
                    args: {
                        methodSuffix: "Carts",
                    },
                },
            },
            {
                serviceName: quote_1.QUOTE_MODULE,
                relationship: {
                    serviceName: utils_1.Modules.ORDER,
                    entity: "OrderChange",
                    primaryKey: "id",
                    foreignKey: "order_change_id",
                    alias: "order_change",
                    args: {
                        methodSuffix: "OrderChanges",
                    },
                },
            },
            {
                serviceName: quote_1.QUOTE_MODULE,
                relationship: {
                    serviceName: utils_1.Modules.USER,
                    entity: "User",
                    primaryKey: "id",
                    foreignKey: "admin_id",
                    alias: "admin",
                    args: {
                        methodSuffix: "Users",
                    },
                },
            },
            {
                serviceName: quote_1.QUOTE_MODULE,
                relationship: {
                    serviceName: utils_1.Modules.CUSTOMER,
                    entity: "Customer",
                    primaryKey: "id",
                    foreignKey: "customer_id",
                    alias: "customer",
                    args: {
                        methodSuffix: "Customers",
                    },
                },
            },
        ],
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGUtbGlua3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3MvcXVvdGUtbGlua3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBb0Q7QUFDcEQsdURBQXFEO0FBQ3JELDRDQUFnRDtBQUVoRCwwQkFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFDOUIsT0FBTztRQUNMLE1BQU0sRUFBRSxJQUFJO1FBQ1osY0FBYyxFQUFFLElBQUk7UUFDcEIsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsV0FBVyxFQUFFLG9CQUFZO2dCQUN6QixZQUFZLEVBQUU7b0JBQ1osV0FBVyxFQUFFLGVBQU8sQ0FBQyxLQUFLO29CQUMxQixNQUFNLEVBQUUsT0FBTztvQkFDZixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsVUFBVSxFQUFFLGdCQUFnQjtvQkFDNUIsS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsUUFBUTtxQkFDdkI7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLFdBQVcsRUFBRSxvQkFBWTtnQkFDekIsWUFBWSxFQUFFO29CQUNaLFdBQVcsRUFBRSxlQUFPLENBQUMsSUFBSTtvQkFDekIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFVBQVUsRUFBRSxTQUFTO29CQUNyQixLQUFLLEVBQUUsTUFBTTtvQkFDYixJQUFJLEVBQUU7d0JBQ0osWUFBWSxFQUFFLE9BQU87cUJBQ3RCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxXQUFXLEVBQUUsb0JBQVk7Z0JBQ3pCLFlBQVksRUFBRTtvQkFDWixXQUFXLEVBQUUsZUFBTyxDQUFDLEtBQUs7b0JBQzFCLE1BQU0sRUFBRSxhQUFhO29CQUNyQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsVUFBVSxFQUFFLGlCQUFpQjtvQkFDN0IsS0FBSyxFQUFFLGNBQWM7b0JBQ3JCLElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsY0FBYztxQkFDN0I7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLFdBQVcsRUFBRSxvQkFBWTtnQkFDekIsWUFBWSxFQUFFO29CQUNaLFdBQVcsRUFBRSxlQUFPLENBQUMsSUFBSTtvQkFDekIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFVBQVUsRUFBRSxVQUFVO29CQUN0QixLQUFLLEVBQUUsT0FBTztvQkFDZCxJQUFJLEVBQUU7d0JBQ0osWUFBWSxFQUFFLE9BQU87cUJBQ3RCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxXQUFXLEVBQUUsb0JBQVk7Z0JBQ3pCLFlBQVksRUFBRTtvQkFDWixXQUFXLEVBQUUsZUFBTyxDQUFDLFFBQVE7b0JBQzdCLE1BQU0sRUFBRSxVQUFVO29CQUNsQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLEtBQUssRUFBRSxVQUFVO29CQUNqQixJQUFJLEVBQUU7d0JBQ0osWUFBWSxFQUFFLFdBQVc7cUJBQzFCO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9