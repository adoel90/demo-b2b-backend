"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalStatus = void 0;
const utils_1 = require("@medusajs/framework/utils");
const approval_1 = require("../../../types/approval");
exports.ApprovalStatus = utils_1.model.define("approval_status", {
    id: utils_1.model
        .id({
        prefix: "apprstat",
    })
        .primaryKey(),
    cart_id: utils_1.model.text(),
    status: utils_1.model.enum(approval_1.ApprovalStatusType),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtc3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYXBwcm92YWwvbW9kZWxzL2FwcHJvdmFsLXN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBa0Q7QUFDbEQsc0RBQTZEO0FBRWhELFFBQUEsY0FBYyxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7SUFDNUQsRUFBRSxFQUFFLGFBQUs7U0FDTixFQUFFLENBQUM7UUFDRixNQUFNLEVBQUUsVUFBVTtLQUNuQixDQUFDO1NBQ0QsVUFBVSxFQUFFO0lBQ2YsT0FBTyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDckIsTUFBTSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsNkJBQWtCLENBQUM7Q0FDdkMsQ0FBQyxDQUFDIn0=