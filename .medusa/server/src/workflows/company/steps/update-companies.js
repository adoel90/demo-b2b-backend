"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompaniesStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const company_1 = require("../../../modules/company");
exports.updateCompaniesStep = (0, workflows_sdk_1.createStep)("update-companies", async (input, { container }) => {
    const companyModule = container.resolve(company_1.COMPANY_MODULE);
    const [previousData] = await companyModule.listCompanies({
        id: input.id,
    });
    const updatedCompanies = await companyModule.updateCompanies(input);
    return new workflows_sdk_1.StepResponse(updatedCompanies, previousData);
}, async (previousData, { container }) => {
    const companyModule = container.resolve(company_1.COMPANY_MODULE);
    await companyModule.updateCompanies(previousData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWNvbXBhbmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29tcGFueS9zdGVwcy91cGRhdGUtY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUU3RSxzREFBMEQ7QUFFN0MsUUFBQSxtQkFBbUIsR0FBRyxJQUFBLDBCQUFVLEVBQzNDLGtCQUFrQixFQUNsQixLQUFLLEVBQUUsS0FBMEIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbEQsTUFBTSxhQUFhLEdBQ2pCLFNBQVMsQ0FBQyxPQUFPLENBQXdCLHdCQUFjLENBQUMsQ0FBQztJQUUzRCxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ3ZELEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtLQUNiLENBQUMsQ0FBQztJQUVILE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxhQUFhLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBFLE9BQU8sSUFBSSw0QkFBWSxDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzFELENBQUMsRUFDRCxLQUFLLEVBQUUsWUFBaUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDekQsTUFBTSxhQUFhLEdBQ2pCLFNBQVMsQ0FBQyxPQUFPLENBQXdCLHdCQUFjLENBQUMsQ0FBQztJQUUzRCxNQUFNLGFBQWEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUNGLENBQUMifQ==