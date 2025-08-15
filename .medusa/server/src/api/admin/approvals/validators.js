"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateApproval = exports.AdminGetApprovals = void 0;
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const zod_1 = require("zod");
exports.AdminGetApprovals = (0, validators_1.createFindParams)()
    .merge(zod_1.z.object({
    status: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
}))
    .strict();
exports.AdminUpdateApproval = zod_1.z.object({
    status: zod_1.z.string(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vYXBwcm92YWxzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBRytDO0FBQy9DLDZCQUF3QjtBQUdYLFFBQUEsaUJBQWlCLEdBQUcsSUFBQSw2QkFBZ0IsR0FBRTtLQUNoRCxLQUFLLENBQ0osT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNQLE1BQU0sRUFBRSxPQUFDO1NBQ04sS0FBSyxDQUFDLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQUMsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBQSw4QkFBaUIsR0FBRSxDQUFDLENBQUM7U0FDN0QsUUFBUSxFQUFFO0NBQ2QsQ0FBQyxDQUNIO0tBQ0EsTUFBTSxFQUFFLENBQUM7QUFHQyxRQUFBLG1CQUFtQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDMUMsTUFBTSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDbkIsQ0FBQyxDQUFDIn0=