"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const utils_1 = require("@medusajs/framework/utils");
const employee_1 = require("./employee");
exports.Company = utils_1.model.define("company", {
    id: utils_1.model
        .id({
        prefix: "comp",
    })
        .primaryKey(),
    name: utils_1.model.text(),
    email: utils_1.model.text(),
    phone: utils_1.model.text().nullable(),
    address: utils_1.model.text().nullable(),
    city: utils_1.model.text().nullable(),
    state: utils_1.model.text().nullable(),
    zip: utils_1.model.text().nullable(),
    country: utils_1.model.text().nullable(),
    logo_url: utils_1.model.text().nullable(),
    currency_code: utils_1.model.text().nullable(),
    spending_limit_reset_frequency: utils_1.model
        .enum(["never", "daily", "weekly", "monthly", "yearly"])
        .default("monthly"),
    employees: utils_1.model.hasMany(() => employee_1.Employee),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbXBhbnkvbW9kZWxzL2NvbXBhbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWtEO0FBQ2xELHlDQUFzQztBQUV6QixRQUFBLE9BQU8sR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtJQUM3QyxFQUFFLEVBQUUsYUFBSztTQUNOLEVBQUUsQ0FBQztRQUNGLE1BQU0sRUFBRSxNQUFNO0tBQ2YsQ0FBQztTQUNELFVBQVUsRUFBRTtJQUNmLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQ2xCLEtBQUssRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQ25CLEtBQUssRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzlCLE9BQU8sRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2hDLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzdCLEtBQUssRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzlCLEdBQUcsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzVCLE9BQU8sRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2hDLFFBQVEsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2pDLGFBQWEsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3RDLDhCQUE4QixFQUFFLGFBQUs7U0FDbEMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZELE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDckIsU0FBUyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQVEsQ0FBQztDQUN6QyxDQUFDLENBQUMifQ==