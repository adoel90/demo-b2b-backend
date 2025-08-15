"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const approval_1 = require("../../../types/approval");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { customer_id } = req.auth_context.app_metadata;
    const { data: [customer], } = await query.graph({
        entity: "customer",
        fields: ["employee.company.id"],
        filters: { id: customer_id },
    });
    const companyId = customer?.employee?.company?.id;
    if (!companyId) {
        return res.json({ approvals: [], count: 0 });
    }
    const { data: [company], } = await query.graph({
        entity: "company",
        fields: [
            "carts.*",
            "carts.approval_status.*",
            "carts.company.approval_settings.*",
            "carts.company.*",
            "carts.items.*",
            "carts.completed_at",
        ],
        filters: { id: companyId },
    });
    if (!company?.carts) {
        return res.json({ carts_with_approvals: [], count: 0 });
    }
    const { status } = req.validatedQuery || {};
    const cartIds = company.carts
        .filter((cart) => cart !== undefined && cart !== null)
        .map((cart) => cart.id);
    let approvalStatusFilters = {
        cart_id: cartIds,
    };
    if (status) {
        approvalStatusFilters.status = status;
    }
    const { data: approvalStatuses, metadata } = await query.graph({
        entity: "approval_status",
        ...req.queryConfig,
        fields: ["*", "cart.approvals.id"],
        filters: approvalStatusFilters,
    });
    const approvalIds = approvalStatuses
        .flatMap((approvalStatus) => approvalStatus.cart?.approvals?.map((approval) => approval?.id))
        .filter(Boolean);
    const { data: approvals } = await query.graph({
        entity: "approval",
        fields: ["*"],
        filters: {
            id: approvalIds,
            type: approval_1.ApprovalType.ADMIN,
        },
    });
    const cartsWithAdminApprovals = company.carts
        .map((cart) => {
        const cartApprovals = approvals.filter((approval) => approval.cart_id === cart?.id);
        if (cartApprovals.length > 0) {
            cart && (cart.approvals = cartApprovals);
            return cart;
        }
        return null;
    })
        .filter(Boolean);
    if (!cartsWithAdminApprovals.length) {
        return res.json({ carts_with_approvals: [], count: 0 });
    }
    res.json({
        carts_with_approvals: cartsWithAdminApprovals,
        ...metadata,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2FwcHJvdmFscy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxxREFBc0U7QUFDdEUsc0RBQXVEO0FBR2hELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBc0QsRUFDdEQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFlBRXhDLENBQUM7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQ2pCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQy9CLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUU7S0FDN0IsQ0FBQyxDQUFDO0lBRUgsTUFBTSxTQUFTLEdBQUcsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBWSxDQUFDO0lBRTVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNmLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FDaEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFO1lBQ04sU0FBUztZQUNULHlCQUF5QjtZQUN6QixtQ0FBbUM7WUFDbkMsaUJBQWlCO1lB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