"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quote_1 = require("./src/modules/quote");
const approval_1 = require("./src/modules/approval");
const company_1 = require("./src/modules/company");
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV, process.cwd());
module.exports = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        http: {
            storeCors: process.env.STORE_CORS,
            adminCors: process.env.ADMIN_CORS,
            authCors: process.env.AUTH_CORS,
            jwtSecret: process.env.JWT_SECRET || "supersecret",
            cookieSecret: process.env.COOKIE_SECRET || "supersecret",
        },
        workerMode: process.env.MEDUSA_WORKER_MODE,
    },
    admin: {
        disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
        backendUrl: process.env.MEDUSA_BACKEND_URL,
    },
    modules: {
        [company_1.COMPANY_MODULE]: {
            resolve: "./modules/company",
        },
        [quote_1.QUOTE_MODULE]: {
            resolve: "./modules/quote",
        },
        [approval_1.APPROVAL_MODULE]: {
            resolve: "./modules/approval",
        },
        [utils_1.Modules.CACHE]: {
            resolve: "@medusajs/medusa/cache-redis",
            options: {
                redisUrl: process.env.REDIS_URL,
            },
        },
        [utils_1.Modules.WORKFLOW_ENGINE]: {
            resolve: "@medusajs/medusa/workflow-engine-redis",
            options: {
                redis: {
                    url: process.env.REDIS_URL,
                },
            },
        },
        [utils_1.Modules.EVENT_BUS]: {
            resolve: "@medusajs/medusa/event-bus-redis",
            options: {
                redisUrl: process.env.REDIS_URL,
            },
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBbUQ7QUFDbkQscURBQXlEO0FBQ3pELG1EQUF1RDtBQUN2RCxxREFBMkU7QUFFM0UsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFFOUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFBLG9CQUFZLEVBQUM7SUFDNUIsYUFBYSxFQUFFO1FBQ2IsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtRQUNyQyxJQUFJLEVBQUU7WUFDSixTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFXO1lBQ2xDLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVc7WUFDbEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBVTtZQUNoQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksYUFBYTtZQUNsRCxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksYUFBYTtTQUN6RDtRQUNELFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFvRDtLQUM3RTtJQUNDLEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixLQUFLLE1BQU07UUFDcEQsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO0tBQzNDO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsQ0FBQyx3QkFBYyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxFQUFFLG1CQUFtQjtTQUM3QjtRQUNELENBQUMsb0JBQVksQ0FBQyxFQUFFO1lBQ2QsT0FBTyxFQUFFLGlCQUFpQjtTQUMzQjtRQUNELENBQUMsMEJBQWUsQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxvQkFBb0I7U0FDOUI7UUFDRCxDQUFDLGVBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLE9BQU8sRUFBRSw4QkFBOEI7WUFDdkMsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVM7YUFDaEM7U0FDRjtRQUNELENBQUMsZUFBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSx3Q0FBd0M7WUFDakQsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRTtvQkFDTCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTO2lCQUMzQjthQUNGO1NBQ0Y7UUFDRCxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNuQixPQUFPLEVBQUUsa0NBQWtDO1lBQzNDLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTO2FBQ2hDO1NBQ0Y7S0FFRjtDQUNGLENBQUMsQ0FBQyJ9