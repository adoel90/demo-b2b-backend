"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompaniesStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const company_1 = require("../../../modules/company");
exports.createCompaniesStep = (0, workflows_sdk_1.createStep)("create-companies", async (input, { container }) => {
    const companyModuleService = container.resolve(company_1.COMPANY_MODULE);
    const companies = await companyModuleService.createCompanies(input);
    return new workflows_sdk_1.StepResponse(companies, companies.map((company) => company.id));
}, async (companyIds, { container }) => {
    if (!companyIds) {
        return;
    }
    const companyModuleService = container.resolve(company_1.COMPANY_MODULE);
    await companyModuleService.deleteCompanies(companyIds);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbXBhbmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29tcGFueS9zdGVwcy9jcmVhdGUtY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUU3RSxzREFBMEQ7QUFFN0MsUUFBQSxtQkFBbUIsR0FBRyxJQUFBLDBCQUFVLEVBQzNDLGtCQUFrQixFQUNsQixLQUFLLEVBQUUsS0FBNEIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDcEQsTUFBTSxvQkFBb0IsR0FDeEIsU0FBUyxDQUFDLE9BQU8sQ0FBd0Isd0JBQWMsQ0FBQyxDQUFDO0lBRTNELE1BQU0sU0FBUyxHQUFHLE1BQU0sb0JBQW9CLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBFLE9BQU8sSUFBSSw0QkFBWSxDQUNyQixTQUFTLEVBQ1QsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUN2QyxDQUFDO0FBQ0osQ0FBQyxFQUNELEtBQUssRUFBRSxVQUFvQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM1QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEIsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLG9CQUFvQixHQUN4QixTQUFTLENBQUMsT0FBTyxDQUF3Qix3QkFBYyxDQUFDLENBQUM7SUFFM0QsTUFBTSxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUNGLENBQUMifQ==