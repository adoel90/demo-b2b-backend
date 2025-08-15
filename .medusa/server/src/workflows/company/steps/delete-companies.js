"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompaniesStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const company_1 = require("../../../modules/company");
exports.deleteCompaniesStep = (0, workflows_sdk_1.createStep)("delete-companies", async (ids, { container }) => {
    const companyModule = container.resolve(company_1.COMPANY_MODULE);
    await companyModule.softDeleteCompanies(ids);
    return new workflows_sdk_1.StepResponse(ids, ids);
}, async (companyIds, { container }) => {
    const companyModule = container.resolve(company_1.COMPANY_MODULE);
    await companyModule.restoreCompanies(companyIds);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWNvbXBhbmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29tcGFueS9zdGVwcy9kZWxldGUtY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUU3RSxzREFBMEQ7QUFFN0MsUUFBQSxtQkFBbUIsR0FBRyxJQUFBLDBCQUFVLEVBQzNDLGtCQUFrQixFQUNsQixLQUFLLEVBQUUsR0FBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNyQyxNQUFNLGFBQWEsR0FDakIsU0FBUyxDQUFDLE9BQU8sQ0FBd0Isd0JBQWMsQ0FBQyxDQUFDO0lBRTNELE1BQU0sYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTdDLE9BQU8sSUFBSSw0QkFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwQyxDQUFDLEVBQ0QsS0FBSyxFQUFFLFVBQW9CLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzVDLE1BQU0sYUFBYSxHQUNqQixTQUFTLENBQUMsT0FBTyxDQUF3Qix3QkFBYyxDQUFDLENBQUM7SUFFM0QsTUFBTSxhQUFhLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUNGLENBQUMifQ==