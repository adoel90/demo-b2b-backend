"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeShippingOptionTargets = void 0;
const computeShippingOptionTargets = (cart, price) => {
    const priceRule = (price.price_rules || []).find((pr) => pr.attribute === "item_total");
    const currentAmount = cart.item_total;
    const targetAmount = parseFloat(priceRule.value);
    if (priceRule.operator === "gt") {
        return {
            current_amount: currentAmount,
            target_amount: targetAmount,
            target_reached: currentAmount > targetAmount,
            target_remaining: currentAmount > targetAmount ? 0 : targetAmount + 1 - currentAmount,
            remaining_percentage: (currentAmount / targetAmount) * 100,
        };
    }
    else if (priceRule.operator === "gte") {
        return {
            current_amount: currentAmount,
            target_amount: targetAmount,
            target_reached: currentAmount > targetAmount,
            target_remaining: currentAmount > targetAmount ? 0 : targetAmount - currentAmount,
            remaining_percentage: (currentAmount / targetAmount) * 100,
        };
    }
    else if (priceRule.operator === "lt") {
        return {
            current_amount: currentAmount,
            target_amount: targetAmount,
            target_reached: targetAmount > currentAmount,
            target_remaining: targetAmount > currentAmount ? 0 : currentAmount + 1 - targetAmount,
            remaining_percentage: (currentAmount / targetAmount) * 100,
        };
    }
    else if (priceRule.operator === "lte") {
        return {
            current_amount: currentAmount,
            target_amount: targetAmount,
            target_reached: targetAmount > currentAmount,
            target_remaining: targetAmount > currentAmount ? 0 : currentAmount - targetAmount,
            remaining_percentage: (currentAmount / targetAmount) * 100,
        };
    }
    else {
        return {
            current_amount: currentAmount,
            target_amount: targetAmount,
            target_reached: currentAmount === targetAmount,
            target_remaining: targetAmount > currentAmount ? 0 : targetAmount - currentAmount,
            remaining_percentage: (currentAmount / targetAmount) * 100,
        };
    }
};
exports.computeShippingOptionTargets = computeShippingOptionTargets;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2ZyZWUtc2hpcHBpbmcvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSw0QkFBNEIsR0FBRyxDQUMxQyxJQUF5QixFQUN6QixLQUEyQixFQUMzQixFQUFFO0lBQ0YsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDOUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEtBQUssWUFBWSxDQUNyQyxDQUFDO0lBRUgsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN0QyxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpELElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxPQUFPO1lBQ0wsY0FBYyxFQUFFLGFBQWE7WUFDN0IsYUFBYSxFQUFFLFlBQVk7WUFDM0IsY0FBYyxFQUFFLGFBQWEsR0FBRyxZQUFZO1lBQzVDLGdCQUFnQixFQUNkLGFBQWEsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxhQUFhO1lBQ3JFLG9CQUFvQixFQUFFLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxHQUFHLEdBQUc7U0FDM0QsQ0FBQztJQUNKLENBQUM7U0FBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFLENBQUM7UUFDeEMsT0FBTztZQUNMLGNBQWMsRUFBRSxhQUFhO1lBQzdCLGFBQWEsRUFBRSxZQUFZO1lBQzNCLGNBQWMsRUFBRSxhQUFhLEdBQUcsWUFBWTtZQUM1QyxnQkFBZ0IsRUFDZCxhQUFhLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxhQUFhO1lBQ2pFLG9CQUFvQixFQUFFLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxHQUFHLEdBQUc7U0FDM0QsQ0FBQztJQUNKLENBQUM7U0FBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdkMsT0FBTztZQUNMLGNBQWMsRUFBRSxhQUFhO1lBQzdCLGFBQWEsRUFBRSxZQUFZO1lBQzNCLGNBQWMsRUFBRSxZQUFZLEdBQUcsYUFBYTtZQUM1QyxnQkFBZ0IsRUFDZCxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsWUFBWTtZQUNyRSxvQkFBb0IsRUFBRSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsR0FBRyxHQUFHO1NBQzNELENBQUM7SUFDSixDQUFDO1NBQU0sSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRSxDQUFDO1FBQ3hDLE9BQU87WUFDTCxjQUFjLEVBQUUsYUFBYTtZQUM3QixhQUFhLEVBQUUsWUFBWTtZQUMzQixjQUFjLEVBQUUsWUFBWSxHQUFHLGFBQWE7WUFDNUMsZ0JBQWdCLEVBQ2QsWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsWUFBWTtZQUNqRSxvQkFBb0IsRUFBRSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsR0FBRyxHQUFHO1NBQzNELENBQUM7SUFDSixDQUFDO1NBQU0sQ0FBQztRQUNOLE9BQU87WUFDTCxjQUFjLEVBQUUsYUFBYTtZQUM3QixhQUFhLEVBQUUsWUFBWTtZQUMzQixjQUFjLEVBQUUsYUFBYSxLQUFLLFlBQVk7WUFDOUMsZ0JBQWdCLEVBQ2QsWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsYUFBYTtZQUNqRSxvQkFBb0IsRUFBRSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsR0FBRyxHQUFHO1NBQzNELENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBekRXLFFBQUEsNEJBQTRCLGdDQXlEdkMifQ==