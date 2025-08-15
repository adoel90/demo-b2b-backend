"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreDeleteApproval = exports.StoreUpdateApproval = exports.StoreGetApprovalParams = exports.StoreUpdateApprovalSettings = exports.StoreGetApprovalSettingsParams = exports.StoreUpdateEmployee = exports.StoreCreateEmployee = exports.StoreGetEmployeeParams = exports.StoreUpdateCompany = exports.StoreCreateCompany = exports.StoreGetCompanyParams = void 0;
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const zod_1 = require("zod");
const approval_1 = require("../../../types/approval");
exports.StoreGetCompanyParams = (0, validators_1.createSelectParams)();
exports.StoreCreateCompany = zod_1.z
    .object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    currency_code: zod_1.z.string(),
    phone: zod_1.z.string().optional().nullable(),
    address: zod_1.z.string().optional().nullable(),
    city: zod_1.z.string().optional().nullable(),
    state: zod_1.z.string().optional().nullable(),
    zip: zod_1.z.string().optional().nullable(),
    country: zod_1.z.string().optional().nullable(),
    logo_url: zod_1.z.string().optional().nullable(),
    spending_limit_reset_frequency: zod_1.z
        .enum(["never", "daily", "weekly", "monthly", "yearly"])
        .optional()
        .nullable(),
})
    .strict();
exports.StoreUpdateCompany = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    currency_code: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional().nullable(),
    address: zod_1.z.string().optional().nullable(),
    city: zod_1.z.string().optional().nullable(),
    state: zod_1.z.string().optional().nullable(),
    zip: zod_1.z.string().optional().nullable(),
    country: zod_1.z.string().optional().nullable(),
    logo_url: zod_1.z.string().optional().nullable(),
    spending_limit_reset_frequency: zod_1.z
        .enum(["never", "daily", "weekly", "monthly", "yearly"])
        .optional()
        .nullable(),
})
    .strict();
exports.StoreGetEmployeeParams = (0, validators_1.createSelectParams)();
exports.StoreCreateEmployee = zod_1.z
    .object({
    spending_limit: zod_1.z.number().optional().nullable(),
    is_admin: zod_1.z.boolean().optional().nullable().default(false),
    customer_id: zod_1.z.string(),
})
    .strict();
exports.StoreUpdateEmployee = zod_1.z
    .object({
    spending_limit: zod_1.z.number().optional(),
    raw_spending_limit: zod_1.z
        .object({
        value: zod_1.z.number().optional(),
        precision: zod_1.z.number().optional(),
    })
        .optional(),
    is_admin: zod_1.z.boolean().optional(),
})
    .strict();
exports.StoreGetApprovalSettingsParams = (0, validators_1.createSelectParams)();
exports.StoreUpdateApprovalSettings = zod_1.z
    .object({
    requires_admin_approval: zod_1.z.boolean(),
})
    .strict();
exports.StoreGetApprovalParams = (0, validators_1.createSelectParams)();
exports.StoreUpdateApproval = zod_1.z.object({
    status: zod_1.z.nativeEnum(approval_1.ApprovalStatusType),
    handled_by: zod_1.z.string(),
});
exports.StoreDeleteApproval = zod_1.z.object({
    id: zod_1.z.string(),
});
``;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3RvcmUvY29tcGFuaWVzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBQTJFO0FBQzNFLDZCQUF3QjtBQUN4QixzREFBNkQ7QUFJaEQsUUFBQSxxQkFBcUIsR0FBRyxJQUFBLCtCQUFrQixHQUFFLENBQUM7QUFHN0MsUUFBQSxrQkFBa0IsR0FBRyxPQUFDO0tBQ2hDLE1BQU0sQ0FBQztJQUNOLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ2hCLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ2pCLGFBQWEsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ3pCLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3ZDLE9BQU8sRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3pDLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3RDLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3ZDLEdBQUcsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3JDLE9BQU8sRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3pDLFFBQVEsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzFDLDhCQUE4QixFQUFFLE9BQUM7U0FDOUIsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE9B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