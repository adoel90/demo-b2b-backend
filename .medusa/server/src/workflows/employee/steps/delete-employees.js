"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeesStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const company_1 = require("../../../modules/company");
exports.deleteEmployeesStep = (0, workflows_sdk_1.createStep)("delete-employees", async (id, { container }) => {
    const ids = Array.isArray(id) ? id : [id];
    const companyModuleService = container.resolve(company_1.COMPANY_MODULE);
    await companyModuleService.softDeleteEmployees(ids);
    return new workflows_sdk_1.StepResponse(ids);
}, async (ids, { container }) => {
    const companyModuleService = container.resolve(company_1.COMPANY_MODULE);
    await companyModuleService.restoreEmployees(ids);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWVtcGxveWVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvZW1wbG95ZWUvc3RlcHMvZGVsZXRlLWVtcGxveWVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkU7QUFDN0Usc0RBQTBEO0FBRzdDLFFBQUEsbUJBQW1CLEdBQUcsSUFBQSwwQkFBVSxFQUMzQyxrQkFBa0IsRUFDbEIsS0FBSyxFQUNILEVBQXFCLEVBQ3JCLEVBQUUsU0FBUyxFQUFFLEVBQzhCLEVBQUU7SUFDN0MsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTFDLE1BQU0sb0JBQW9CLEdBQ3hCLFNBQVMsQ0FBQyxPQUFPLENBQXdCLHdCQUFjLENBQUMsQ0FBQztJQUMzRCxNQUFNLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXBELE9BQU8sSUFBSSw0QkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUMsRUFDRCxLQUFLLEVBQUUsR0FBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNyQyxNQUFNLG9CQUFvQixHQUN4QixTQUFTLENBQUMsT0FBTyxDQUF3Qix3QkFBYyxDQUFDLENBQUM7SUFDM0QsTUFBTSxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQ0YsQ0FBQyJ9