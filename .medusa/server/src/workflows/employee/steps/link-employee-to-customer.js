"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkEmployeeToCustomerStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const company_1 = require("../../../modules/company");
exports.linkEmployeeToCustomerStep = (0, workflows_sdk_1.createStep)("link-employee-to-customer", async (input, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    const link = {
        [company_1.COMPANY_MODULE]: {
            employee_id: input.employeeId,
        },
        [utils_1.Modules.CUSTOMER]: {
            customer_id: input.customerId,
        },
    };
    await remoteLink.create(link);
    return new workflows_sdk_1.StepResponse(undefined, input);
}, async (input, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    const link = {
        [company_1.COMPANY_MODULE]: {
            employee_id: input.employeeId,
        },
        [utils_1.Modules.CUSTOMER]: {
            customer_id: input.customerId,
        },
    };
    await remoteLink.dismiss(link);
    return new workflows_sdk_1.StepResponse(undefined, input);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay1lbXBsb3llZS10by1jdXN0b21lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvZW1wbG95ZWUvc3RlcHMvbGluay1lbXBsb3llZS10by1jdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBK0U7QUFDL0UscUVBQTZFO0FBQzdFLHNEQUEwRDtBQUU3QyxRQUFBLDBCQUEwQixHQUFHLElBQUEsMEJBQVUsRUFDbEQsMkJBQTJCLEVBQzNCLEtBQUssRUFDSCxLQUFpRCxFQUNqRCxFQUFFLFNBQVMsRUFBRSxFQUdiLEVBQUU7SUFDRixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTVFLE1BQU0sSUFBSSxHQUFHO1FBQ1gsQ0FBQyx3QkFBYyxDQUFDLEVBQUU7WUFDaEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQzlCO1FBQ0QsQ0FBQyxlQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQzlCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU5QixPQUFPLElBQUksNEJBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxFQUNELEtBQUssRUFDSCxLQUFpRCxFQUNqRCxFQUFFLFNBQVMsRUFBRSxFQUdiLEVBQUU7SUFDRixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTVFLE1BQU0sSUFBSSxHQUFHO1FBQ1gsQ0FBQyx3QkFBYyxDQUFDLEVBQUU7WUFDaEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQzlCO1FBQ0QsQ0FBQyxlQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQzlCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvQixPQUFPLElBQUksNEJBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUNGLENBQUMifQ==