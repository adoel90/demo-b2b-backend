"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
/*
  A step to update the order. This is being used in the update order workflow.
  The first function attempts to update the order, while the second function attempts to revert
  the update incase the workflow fails. The first function is also preparing the data to be reverted
  when a failure is triggered.
*/
exports.updateOrderStep = (0, workflows_sdk_1.createStep)("update-order", async (data, { container }) => {
    const { id, ...rest } = data;
    const orderModule = container.resolve(utils_1.Modules.ORDER);
    const { selects, relations } = (0, utils_1.getSelectsAndRelationsFromObjectArray)([
        data,
    ]);
    const dataBeforeUpdate = await orderModule.listOrders({ id: data.id }, { relations, select: selects });
    const updatedQuotes = await orderModule.updateOrders(id, rest);
    return new workflows_sdk_1.StepResponse(updatedQuotes, {
        dataBeforeUpdate,
        selects,
        relations,
    });
}, async (revertInput, { container }) => {
    if (!revertInput) {
        return;
    }
    const { dataBeforeUpdate, selects, relations } = revertInput;
    const orderModule = container.resolve(utils_1.Modules.ORDER);
    await orderModule.updateOrder(dataBeforeUpdate.map((data) => (0, utils_1.convertItemResponseToUpdateRequest)(data, selects, relations)));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9vcmRlci9zdGVwcy91cGRhdGUtb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBSW1DO0FBQ25DLHFFQUE2RTtBQUU3RTs7Ozs7RUFLRTtBQUNXLFFBQUEsZUFBZSxHQUFHLElBQUEsMEJBQVUsRUFDdkMsY0FBYyxFQUNkLEtBQUssRUFDSCxJQUE2RCxFQUM3RCxFQUFFLFNBQVMsRUFBRSxFQUNiLEVBQUU7SUFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzdCLE1BQU0sV0FBVyxHQUF3QixTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUEsNkNBQXFDLEVBQUM7UUFDbkUsSUFBSTtLQUNMLENBQUMsQ0FBQztJQUVILE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxXQUFXLENBQUMsVUFBVSxDQUNuRCxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQ2YsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUMvQixDQUFDO0lBRUYsTUFBTSxhQUFhLEdBQUcsTUFBTSxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFXLENBQUMsQ0FBQztJQUV0RSxPQUFPLElBQUksNEJBQVksQ0FBQyxhQUFhLEVBQUU7UUFDckMsZ0JBQWdCO1FBQ2hCLE9BQU87UUFDUCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUNELEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ25DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQixPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsV0FBVyxDQUFDO0lBQzdELE1BQU0sV0FBVyxHQUFRLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTFELE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FDM0IsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDNUIsSUFBQSwwQ0FBa0MsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUM3RCxDQUNGLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQyJ9