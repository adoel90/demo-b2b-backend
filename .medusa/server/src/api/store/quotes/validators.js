"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCreateQuoteMessage = exports.RejectQuote = exports.AcceptQuote = exports.CreateQuote = exports.GetQuoteParams = void 0;
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const zod_1 = require("zod");
exports.GetQuoteParams = (0, validators_1.createFindParams)({
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
exports.CreateQuote = zod_1.z
    .object({
    cart_id: zod_1.z.string().min(1),
})
    .strict();
exports.AcceptQuote = zod_1.z.object({}).strict();
exports.RejectQuote = zod_1.z.object({}).strict();
exports.StoreCreateQuoteMessage = zod_1.z
    .object({
    text: zod_1.z.string(),
    item_id: zod_1.z.string().nullish(),
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3RvcmUvcXVvdGVzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBRytDO0FBQy9DLDZCQUF3QjtBQUdYLFFBQUEsY0FBYyxHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDN0MsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUM7S0FDQyxLQUFLLENBQ0osT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNQLENBQUMsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3hCLEVBQUUsRUFBRSxPQUFDO1NBQ0YsS0FBSyxDQUFDLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQUMsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBQSw4QkFBaUIsR0FBRSxDQUFDLENBQUM7U0FDN0QsUUFBUSxFQUFFO0lBQ2IsY0FBYyxFQUFFLE9BQUM7U0FDZCxLQUFLLENBQUMsQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFBLDhCQUFpQixHQUFFLENBQUMsQ0FBQztTQUM3RCxRQUFRLEVBQUU7SUFDYixNQUFNLEVBQUUsT0FBQztTQUNOLEtBQUssQ0FBQyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUEsOEJBQWlCLEdBQUUsQ0FBQyxDQUFDO1NBQzdELFFBQVEsRUFBRTtJQUNiLFVBQVUsRUFBRSxJQUFBLDhCQUFpQixHQUFFLENBQUMsUUFBUSxFQUFFO0lBQzFDLFVBQVUsRUFBRSxJQUFBLDhCQUFpQixHQUFFLENBQUMsUUFBUSxFQUFFO0NBQzNDLENBQUMsQ0FDSDtLQUNBLE1BQU0sRUFBRSxDQUFDO0FBR0MsUUFBQSxXQUFXLEdBQUcsT0FBQztLQUN6QixNQUFNLENBQUM7SUFDTixPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDM0IsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFDO0FBR0MsUUFBQSxXQUFXLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUdwQyxRQUFBLFdBQVcsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBS3BDLFFBQUEsdUJBQXVCLEdBQUcsT0FBQztLQUNyQyxNQUFNLENBQUM7SUFDTixJQUFJLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNoQixPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtDQUM5QixDQUFDO0tBQ0QsTUFBTSxFQUFFLENBQUMifQ==