"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("../../types");
const models_1 = require("./models");
class ApprovalModuleService extends (0, utils_1.MedusaService)({
    Approval: models_1.Approval,
    ApprovalSettings: models_1.ApprovalSettings,
    ApprovalStatus: models_1.ApprovalStatus,
}) {
    async hasPendingApprovals(cartId) {
        const [_, count] = await this.listAndCountApprovals({
            cart_id: cartId,
            status: types_1.ApprovalStatusType.PENDING,
        });
        return count > 0;
    }
}
exports.default = ApprovalModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2FwcHJvdmFsL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBMEQ7QUFDMUQsdUNBQWlEO0FBQ2pELHFDQUFzRTtBQUV0RSxNQUFNLHFCQUFzQixTQUFRLElBQUEscUJBQWEsRUFBQztJQUNoRCxRQUFRLEVBQVIsaUJBQVE7SUFDUixnQkFBZ0IsRUFBaEIseUJBQWdCO0lBQ2hCLGNBQWMsRUFBZCx1QkFBYztDQUNmLENBQUM7SUFDQSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBYztRQUN0QyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xELE9BQU8sRUFBRSxNQUFNO1lBQ2YsTUFBTSxFQUFFLDBCQUFrQixDQUFDLE9BQU87U0FDbkMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQUVELGtCQUFlLHFCQUFxQixDQUFDIn0=