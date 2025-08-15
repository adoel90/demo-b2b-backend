"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeApprovalsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const ensure_role_1 = require("../../middlewares/ensure-role");
const approval_1 = require("../../../types/approval");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
const ensureApprovalType = async (req, res, next) => {
    const { id } = req.params;
    const query = req.scope.resolve("query");
    const { data: [approval], } = await query.graph({
        entity: "approval",
        fields: ["type"],
        filters: { id },
    });
    if (!approval) {
        res.status(404).json({ message: "Approval not found" });
        return;
    }
    const approvalType = approval.type;
    if (approvalType !== approval_1.ApprovalType.ADMIN) {
        res.status(403).json({ message: "Forbidden" });
        return;
    }
    next();
};
exports.storeApprovalsMiddlewares = [
    {
        method: "ALL",
        matcher: "/store/approvals*",
        middlewares: [
            (0, framework_1.authenticate)("customer", ["session", "bearer"]),
            (0, ensure_role_1.ensureRole)("company_admin"),
        ],
    },
    {
        method: ["GET"],
        matcher: "/store/approvals",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetApprovals, query_config_1.approvalTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/approvals/:id",
        middlewares: [
            ensureApprovalType,
            (0, framework_1.validateAndTransformBody)(validators_1.StoreUpdateApproval),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2FwcHJvdmFscy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFPNkI7QUFFN0IsK0RBQTJEO0FBQzNELHNEQUF1RDtBQUN2RCxpREFBOEQ7QUFDOUQsNkNBQXNFO0FBRXRFLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxFQUM5QixHQUErQixFQUMvQixHQUFtQixFQUNuQixJQUF3QixFQUN4QixFQUFFO0lBQ0YsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFMUIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFekMsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUNqQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFO0tBQ2hCLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUN4RCxPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUErQixDQUFDO0lBRTlELElBQUksWUFBWSxLQUFLLHVCQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMvQyxPQUFPO0lBQ1QsQ0FBQztJQUVELElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQyxDQUFDO0FBRVcsUUFBQSx5QkFBeUIsR0FBc0I7SUFDMUQ7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSx3QkFBWSxFQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvQyxJQUFBLHdCQUFVLEVBQUMsZUFBZSxDQUFDO1NBQzVCO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsOEJBQWlCLEVBQ2pCLDJDQUE0QixDQUM3QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFdBQVcsRUFBRTtZQUNYLGtCQUFrQjtZQUNsQixJQUFBLG9DQUF3QixFQUFDLGdDQUFtQixDQUFDO1NBQzlDO0tBQ0Y7Q0FDRixDQUFDIn0=