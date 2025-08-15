"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpendWindow = getSpendWindow;
exports.getOrderTotalInSpendWindow = getOrderTotalInSpendWindow;
exports.checkSpendingLimit = checkSpendingLimit;
const types_1 = require("../types");
function getSpendWindow(company) {
    if (!company) {
        return { start: new Date(0), end: new Date() };
    }
    const now = new Date();
    const resetFrequency = company.spending_limit_reset_frequency;
    switch (resetFrequency) {
        case types_1.ModuleCompanySpendingLimitResetFrequency.NEVER:
            return { start: new Date(0), end: now }; // Never resets
        case types_1.ModuleCompanySpendingLimitResetFrequency.DAILY:
            return { start: new Date(now.setHours(0, 0, 0, 0)), end: now }; // Window is the current day up to now
        case types_1.ModuleCompanySpendingLimitResetFrequency.WEEKLY:
            const startOfWeek = new Date(now);
            startOfWeek.setDate(now.getDate() - now.getDay());
            startOfWeek.setHours(0, 0, 0, 0);
            return { start: startOfWeek, end: now }; // Window is the current week up to now, starting on Sunday
        case types_1.ModuleCompanySpendingLimitResetFrequency.MONTHLY:
            return {
                start: new Date(now.getFullYear(), now.getMonth(), 1),
                end: now,
            }; // Window is the current month up to now
        case types_1.ModuleCompanySpendingLimitResetFrequency.YEARLY:
            return { start: new Date(now.getFullYear(), 0, 1), end: now }; // Window is the current year up to now
        default:
            return { start: new Date(0), end: now }; // Default to never resetting
    }
}
function getOrderTotalInSpendWindow(orders, spendWindow) {
    return (orders.reduce((acc, order) => {
        const orderDate = new Date(order.created_at);
        if (orderDate >= spendWindow.start && orderDate <= spendWindow.end) {
            return acc + order.total;
        }
        return acc;
    }, 0) || 0);
}
function checkSpendingLimit(cart, customer) {
    if (!cart || !customer || !customer.employee) {
        return false;
    }
    if (!customer?.employee?.spending_limit ||
        customer?.employee?.spending_limit === 0) {
        return false;
    }
    const spendingLimit = customer.employee.spending_limit;
    const spendWindow = getSpendWindow(customer.employee.company);
    const spent = getOrderTotalInSpendWindow(customer.orders || [], spendWindow);
    return spent + cart.total > spendingLimit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stc3BlbmRpbmctbGltaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvY2hlY2stc3BlbmRpbmctbGltaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSx3Q0ErQkM7QUFFRCxnRUFhQztBQUVELGdEQXlCQztBQS9FRCxvQ0FJa0I7QUFFbEIsU0FBZ0IsY0FBYyxDQUFDLE9BQXFCO0lBSWxELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNiLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN2QixNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUM7SUFFOUQsUUFBUSxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLGdEQUF3QyxDQUFDLEtBQUs7WUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxlQUFlO1FBQzFELEtBQUssZ0RBQXdDLENBQUMsS0FBSztZQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxzQ0FBc0M7UUFDeEcsS0FBSyxnREFBd0MsQ0FBQyxNQUFNO1lBQ2xELE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxN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