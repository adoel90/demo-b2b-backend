"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartApprovalStatus = void 0;
const approval_1 = require("../types/approval");
const getCartApprovalStatus = (cart) => {
    const defaultStatus = {
        isPendingApproval: false,
        isApproved: false,
        isRejected: false,
    };
    if (!cart?.approvals?.length)
        return defaultStatus;
    const approvals = cart.approvals;
    const isPendingApproval = approvals.some((approval) => approval?.status === approval_1.ApprovalStatusType.PENDING);
    if (isPendingApproval) {
        return { ...defaultStatus, isPendingApproval: true };
    }
    const isApproved = approvals.some((approval) => approval?.status === approval_1.ApprovalStatusType.APPROVED);
    if (isApproved) {
        return { ...defaultStatus, isApproved: true };
    }
    const isRejected = approvals.some((approval) => approval?.status === approval_1.ApprovalStatusType.REJECTED);
    return { ...defaultStatus, isRejected };
};
exports.getCartApprovalStatus = getCartApprovalStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNhcnQtYXBwcm92YWwtc3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2dldC1jYXJ0LWFwcHJvdmFsLXN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnREFBc0U7QUFFL0QsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLElBQWdDLEVBQUUsRUFBRTtJQUN4RSxNQUFNLGFBQWEsR0FBRztRQUNwQixpQkFBaUIsRUFBRSxLQUFLO1FBQ3hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFVBQVUsRUFBRSxLQUFLO0tBQ2xCLENBQUM7SUFFRixJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNO1FBQUUsT0FBTyxhQUFhLENBQUM7SUFFbkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQTRCLENBQUM7SUFFcEQsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUN0QyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sS0FBSyw2QkFBa0IsQ0FBQyxPQUFPLENBQzlELENBQUM7SUFFRixJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDdEIsT0FBTyxFQUFFLEdBQUcsYUFBYSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUMvQixDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sS0FBSyw2QkFBa0IsQ0FBQyxRQUFRLENBQy9ELENBQUM7SUFFRixJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2YsT0FBTyxFQUFFLEdBQUcsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FDL0IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEtBQUssNkJBQWtCLENBQUMsUUFBUSxDQUMvRCxDQUFDO0lBRUYsT0FBTyxFQUFFLEdBQUcsYUFBYSxFQUFFLFVBQVUsRUFBRSxDQUFDO0FBQzFDLENBQUMsQ0FBQztBQWhDVyxRQUFBLHFCQUFxQix5QkFnQ2hDIn0=