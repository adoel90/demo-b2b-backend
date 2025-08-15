"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Approval = void 0;
const utils_1 = require("@medusajs/framework/utils");
const approval_1 = require("../../../types/approval");
exports.Approval = utils_1.model.define("approval", {
    id: utils_1.model
        .id({
        prefix: "appr",
    })
        .primaryKey(),
    cart_id: utils_1.model.text(),
    type: utils_1.model.enum(approval_1.ApprovalType),
    status: utils_1.model.enum(approval_1.ApprovalStatusType),
    created_by: utils_1.model.text(),
    handled_by: utils_1.model.text().nullable(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hcHByb3ZhbC9tb2RlbHMvYXBwcm92YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWtEO0FBQ2xELHNEQUEyRTtBQUU5RCxRQUFBLFFBQVEsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtJQUMvQyxFQUFFLEVBQUUsYUFBSztTQUNOLEVBQUUsQ0FBQztRQUNGLE1BQU0sRUFBRSxNQUFNO0tBQ2YsQ0FBQztTQUNELFVBQVUsRUFBRTtJQUNmLE9BQU8sRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQ3JCLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxDQUFDLHVCQUFZLENBQUM7SUFDOUIsTUFBTSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsNkJBQWtCLENBQUM7SUFDdEMsVUFBVSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDeEIsVUFBVSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDcEMsQ0FBQyxDQUFDIn0=