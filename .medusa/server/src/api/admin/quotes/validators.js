"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateQuoteMessage = exports.AdminRejectQuote = exports.AdminSendQuote = exports.AdminGetQuoteParams = void 0;
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const zod_1 = require("zod");
exports.AdminGetQuoteParams = (0, validators_1.createFindParams)({
    limit: 15,
    offset: 0,
})
    .merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    draft_order_id: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    status: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
}))
    .strict();
exports.AdminSendQuote = zod_1.z.object({}).strict();
exports.AdminRejectQuote = zod_1.z.object({}).strict();
exports.AdminCreateQuoteMessage = zod_1.z
    .object({
    text: zod_1.z.string(),
    item_id: zod_1.z.string().nullish(),
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vcXVvdGVzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBRytDO0FBQy9DLDZCQUF3QjtBQUdYLFFBQUEsbUJBQW1CLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUNsRCxLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxDQUFDO0NBQ1YsQ0FBQztLQUNDLEtBQUssQ0FDSixPQUFDLENBQUMsTUFBTSxDQUFDO0lBQ1AsQ0FBQyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDeEIsRUFBRSxFQUFFLE9BQUM7U0FDRixLQUFLLENBQUMsQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFBLDhCQUFpQixHQUFFLENBQUMsQ0FBQztTQUM3RCxRQUFRLEVBQUU7SUFDYixjQUFjLEVBQUUsT0FBQztTQUNkLEtBQUssQ0FBQyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUEsOEJBQWlCLEdBQUUsQ0FBQyxDQUFDO1NBQzdELFFBQVEsRUFBRTtJQUNiLE1BQU0sRUFBRSxPQUFDO1NBQ04sS0FBSyxDQUFDLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQUMsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBQSw4QkFBaUIsR0FBRSxDQUFDLENBQUM7U0FDN0QsUUFBUSxFQUFFO0lBQ2IsVUFBVSxFQUFFLElBQUEsOEJBQWlCLEdBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDMUMsVUFBVSxFQUFFLElBQUEsOEJBQWlCLEdBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDM0MsQ0FBQyxDQUNIO0tBQ0EsTUFBTSxFQUFFLENBQUM7QUFHQyxRQUFBLGNBQWMsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBR3ZDLFFBQUEsZ0JBQWdCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUt6QyxRQUFBLHVCQUF1QixHQUFHLE9BQUM7S0FDckMsTUFBTSxDQUFDO0lBQ04sSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDaEIsT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Q0FDOUIsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFDIn0=