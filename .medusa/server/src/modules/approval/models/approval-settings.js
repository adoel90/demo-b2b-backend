"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalSettings = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.ApprovalSettings = utils_1.model.define("approval_settings", {
    id: utils_1.model
        .id({
        prefix: "apprset",
    })
        .primaryKey(),
    company_id: utils_1.model.text(),
    requires_admin_approval: utils_1.model.boolean().default(false),
    requires_sales_manager_approval: utils_1.model.boolean().default(false),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtc2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hcHByb3ZhbC9tb2RlbHMvYXBwcm92YWwtc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWtEO0FBRXJDLFFBQUEsZ0JBQWdCLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtJQUNoRSxFQUFFLEVBQUUsYUFBSztTQUNOLEVBQUUsQ0FBQztRQUNGLE1BQU0sRUFBRSxTQUFTO0tBQ2xCLENBQUM7U0FDRCxVQUFVLEVBQUU7SUFDZixVQUFVLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUN4Qix1QkFBdUIsRUFBRSxhQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUN2RCwrQkFBK0IsRUFBRSxhQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztDQUNoRSxDQUFDLENBQUMifQ==