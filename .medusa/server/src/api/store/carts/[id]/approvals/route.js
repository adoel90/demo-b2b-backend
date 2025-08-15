"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const approval_1 = require("../../../../../types/approval");
const workflows_1 = require("../../../../../workflows/approval/workflows");
const POST = async (req, res) => {
    const { id: cartId } = req.params;
    const { customer_id } = req.auth_context.app_metadata;
    const { result: approvals, errors } = await workflows_1.createApprovalsWorkflow.run({
        input: {
            created_by: customer_id,
            cart_id: cartId,
            status: approval_1.ApprovalStatusType.PENDING,
        },
        container: req.scope,
        throwOnError: false,
    });
    if (errors.length > 0) {
        res.status(400).json({
            message: errors[0].error.message,
            code: "INVALID_DATA",
        });
        return;
    }
    res.json({ approvals });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NhcnRzL1tpZF0vYXBwcm92YWxzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLDREQUFtRTtBQUNuRSwyRUFBc0Y7QUFFL0UsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2xDLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFlBRXhDLENBQUM7SUFFRixNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLG1DQUF1QixDQUFDLEdBQUcsQ0FBQztRQUN0RSxLQUFLLEVBQUU7WUFDTCxVQUFVLEVBQUUsV0FBVztZQUN2QixPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU0sRUFBRSw2QkFBa0IsQ0FBQyxPQUFPO1NBQ25DO1FBQ0QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLFlBQVksRUFBRSxLQUFLO0tBQ3BCLENBQUMsQ0FBQztJQUVILElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN0QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ2hDLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUMsQ0FBQztRQUNILE9BQU87SUFDVCxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBNUJXLFFBQUEsSUFBSSxRQTRCZiJ9