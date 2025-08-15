"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../utils");
const GET = async (req, res) => {
    const { cart_id } = req.filterableFields;
    const listShippingOptionsWorkflow = (0, core_flows_1.listShippingOptionsForCartWorkflow)(req.scope);
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [cart], } = await query.graph({
        entity: "cart",
        fields: ["currency_code", "item_total"],
        filters: { id: cart_id },
    }, { throwIfKeyNotFound: true });
    const { result: shippingOptions } = await listShippingOptionsWorkflow.run({
        input: { cart_id, is_return: false },
    });
    // Return any valid free shipping prices that can be found for the cart
    const freeShippingPrices = shippingOptions
        .map((shippingOption) => {
        const calculatedPrice = shippingOption.calculated_price;
        if (!calculatedPrice) {
            return;
        }
        // Get all prices that are:
        // 1. Currency code is same as the cart's
        // 2. Have a rule that is set on item_total
        const validCurrencyPrices = shippingOption.prices.filter((price) => price.currency_code === cart.currency_code &&
            (price.price_rules || []).some((priceRule) => priceRule.attribute === "item_total") &&
            price.amount === 0);
        return validCurrencyPrices.map((price) => {
            return {
                ...price,
                shipping_option_id: shippingOption.id,
                ...(0, utils_2.computeShippingOptionTargets)(cart, price),
            };
        });
    })
        .flat(1)
        .filter(Boolean);
    res.json({ prices: freeShippingPrices });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2ZyZWUtc2hpcHBpbmcvcHJpY2VzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUEwRTtBQUcxRSxxREFBc0U7QUFFdEUsb0NBQXdEO0FBR2pELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBNEQsRUFDNUQsR0FFRSxFQUNGLEVBQUU7SUFDRixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBQ3pDLE1BQU0sMkJBQTJCLEdBQUcsSUFBQSwrQ0FBa0MsRUFDcEUsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFDO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQzdCLGlDQUF5QixDQUFDLEtBQUssQ0FDaEMsQ0FBQztJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FDYixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUM7UUFDdkMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRTtLQUN6QixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUM7SUFFRixNQUFNLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLE1BQU0sMkJBQTJCLENBQUMsR0FBRyxDQUFDO1FBQ3hFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0tBQ3JDLENBQUMsQ0FBQztJQUVILHVFQUF1RTtJQUN2RSxNQUFNLGtCQUFrQixHQUFHLGVBQWU7U0FDdkMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUU7UUFDdEIsTUFBTSxlQUFlLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1FBRXhELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNyQixPQUFPO1FBQ1QsQ0FBQztRQUVELDJCQUEyQjtRQUMzQix5Q0FBeUM7UUFDekMsMkNBQTJDO1FBQzNDLE1BQU0sbUJBQW1CLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ3RELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDUixLQUFLLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxhQUFhO1lBQzFDLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVCLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxLQUFLLFlBQVksQ0FDcEQ7WUFDRCxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FDckIsQ0FBQztRQUVGLE9BQU8sbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdkMsT0FBTztnQkFDTCxHQUFHLEtBQUs7Z0JBQ1Isa0JBQWtCLEVBQUUsY0FBYyxDQUFDLEVBQUU7Z0JBQ3JDLEdBQUcsSUFBQSxvQ0FBNEIsRUFBQyxJQUFXLEVBQUUsS0FBSyxDQUFDO2FBQ3BELENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLENBQUM7U0FDUCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDO0FBOURXLFFBQUEsR0FBRyxPQThEZCJ9