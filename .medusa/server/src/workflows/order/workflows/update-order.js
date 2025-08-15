"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderWorkflow = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const update_order_1 = require("../steps/update-order");
/*
  A workflow to update the order. We use this in the quote workflows to convert a draft order
  to an active order.
*/
exports.updateOrderWorkflow = (0, workflows_sdk_1.createWorkflow)("b2b-update-order-workflow", function (input) {
    (0, core_flows_1.useRemoteQueryStep)({
        entry_point: "order",
        fields: ["id"],
        variables: { id: input.id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, update_order_1.updateOrderStep)(input);
    return new workflows_sdk_1.WorkflowResponse(void 0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9vcmRlci93b3JrZmxvd3MvdXBkYXRlLW9yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDREQUFpRTtBQUNqRSwyREFBMkU7QUFDM0Usd0RBQXdEO0FBRXhEOzs7RUFHRTtBQUNXLFFBQUEsbUJBQW1CLEdBQUcsSUFBQSw4QkFBYyxFQUMvQywyQkFBMkIsRUFDM0IsVUFBVSxLQUE4RDtJQUN0RSxJQUFBLCtCQUFrQixFQUFDO1FBQ2pCLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQzNCLElBQUksRUFBRSxLQUFLO1FBQ1gsc0JBQXNCLEVBQUUsSUFBSTtLQUM3QixDQUFDLENBQUM7SUFFSCxJQUFBLDhCQUFlLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFdkIsT0FBTyxJQUFJLGdDQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUNGLENBQUMifQ==