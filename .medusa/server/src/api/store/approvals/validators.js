"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreUpdateApproval = exports.StoreGetApprovals = void 0;
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const zod_1 = require("zod");
const approval_1 = require("../../../types/approval");
exports.StoreGetApprovals = (0, validators_1.createFindParams)()
    .merge(zod_1.z.object({
    status: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    type: zod_1.z
        .union([
        zod_1.z.nativeEnum(approval_1.ApprovalType),
        zod_1.z.array(zod_1.z.nativeEnum(approval_1.ApprovalType)),
        (0, validators_1.createOperatorMap)(),
    ])
        .optional(),
}))
    .strict();
exports.StoreUpdateApproval = zod_1.z.object({
    status: zod_1.z.string(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3RvcmUvYXBwcm92YWxzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBRytDO0FBQy9DLDZCQUF3QjtBQUN4QixzREFBdUQ7QUFHMUMsUUFBQSxpQkFBaUIsR0FBRyxJQUFBLDZCQUFnQixHQUFFO0tBQ2hELEtBQUssQ0FDSixPQUFDLENBQUMsTUFBTSxDQUFDO0lBQ1AsTUFBTSxFQUFFLE9BQUM7U0FDTixLQUFLLENBQUMsQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFBLDhCQUFpQixHQUFFLENBQUMsQ0FBQztTQUM3RCxRQUFRLEVBQUU7SUFDYixJQUFJLEVBQUUsT0FBQztTQUNKLEtBQUssQ0FBQztRQUNMLE9BQUMsQ0FBQyxVQUFVLENBQUMsdUJBQVksQ0FBQztRQUMxQixPQUFDLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxVQUFVLENBQUMsdUJBQVksQ0FBQyxDQUFDO1FBQ25DLElBQUEsOEJBQWlCLEdBQUU7S0FDcEIsQ0FBQztTQUNELFFBQVEsRUFBRTtDQUNkLENBQUMsQ0FDSDtLQUNBLE1BQU0sRUFBRSxDQUFDO0FBR0MsUUFBQSxtQkFBbUIsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQzFDLE1BQU0sRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0NBQ25CLENBQUMsQ0FBQyJ9