"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDeleteApprovalSettings = exports.AdminUpdateApprovalSettings = exports.AdminCreateApprovalSettings = exports.AdminGetApprovalSettingsParams = exports.AdminUpdateEmployee = exports.AdminCreateEmployee = exports.AdminGetEmployeeParams = exports.AdminRemoveCompanyFromCustomerGroup = exports.AdminAddCompanyToCustomerGroup = exports.AdminGetCustomerGroupParams = exports.AdminUpdateCompany = exports.AdminCreateCompany = exports.AdminGetCompanyParams = void 0;
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const zod_1 = require("zod");
exports.AdminGetCompanyParams = (0, validators_1.createSelectParams)();
exports.AdminCreateCompany = zod_1.z
    .object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    currency_code: zod_1.z.string(),
    phone: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
    state: zod_1.z.string().optional(),
    zip: zod_1.z.string().optional(),
    country: zod_1.z.string().optional(),
    logo_url: zod_1.z.string().optional(),
})
    .strict();
exports.AdminUpdateCompany = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    currency_code: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
    state: zod_1.z.string().optional(),
    zip: zod_1.z.string().optional(),
    country: zod_1.z.string().optional(),
    logo_url: zod_1.z.string().optional().nullable(),
})
    .strict();
exports.AdminGetCustomerGroupParams = (0, validators_1.createSelectParams)();
exports.AdminAddCompanyToCustomerGroup = zod_1.z.object({
    group_id: zod_1.z.string(),
});
exports.AdminRemoveCompanyFromCustomerGroup = zod_1.z.object({
    group_id: zod_1.z.string(),
});
exports.AdminGetEmployeeParams = (0, validators_1.createSelectParams)();
exports.AdminCreateEmployee = zod_1.z
    .object({
    spending_limit: zod_1.z.number().optional(),
    raw_spending_limit: zod_1.z
        .object({
        value: zod_1.z.number().optional(),
        precision: zod_1.z.number().optional(),
    })
        .optional(),
    is_admin: zod_1.z.boolean().optional(),
    customer_id: zod_1.z.string(),
})
    .strict();
exports.AdminUpdateEmployee = zod_1.z
    .object({
    id: zod_1.z.string(),
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
exports.AdminGetApprovalSettingsParams = (0, validators_1.createSelectParams)();
exports.AdminCreateApprovalSettings = zod_1.z
    .object({
    company_id: zod_1.z.string(),
    requires_admin_approval: zod_1.z.boolean(),
    requires_sales_manager_approval: zod_1.z.boolean(),
})
    .strict();
exports.AdminUpdateApprovalSettings = zod_1.z
    .object({
    id: zod_1.z.string(),
    requires_admin_approval: zod_1.z.boolean(),
    requires_sales_manager_approval: zod_1.z.boolean(),
})
    .strict();
exports.AdminDeleteApprovalSettings = zod_1.z.object({
    ids: zod_1.z.array(zod_1.z.string()),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vY29tcGFuaWVzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBQTJFO0FBQzNFLDZCQUF3QjtBQUlYLFFBQUEscUJBQXFCLEdBQUcsSUFBQSwrQkFBa0IsR0FBRSxDQUFDO0FBRzdDLFFBQUEsa0JBQWtCLEdBQUcsT0FBQztLQUNoQyxNQUFNLENBQUM7SUFDTixJQUFJLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNoQixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNqQixhQUFhLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUN6QixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM1QixPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM5QixJQUFJLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMzQixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM1QixHQUFHLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMxQixPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM5QixRQUFRLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUNoQyxDQUFDO0tBQ0QsTUFBTSxFQUFFLENBQUM7QUFHQyxRQUFBLGtCQUFrQixHQUFHLE9BQUM7S0FDaEMsTUFBTSxDQUFDO0lBQ04sSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDM0IsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7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