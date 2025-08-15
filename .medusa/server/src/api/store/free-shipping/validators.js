"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetFreeShippingPricesParams = void 0;
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const zod_1 = require("zod");
exports.StoreGetFreeShippingPricesParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z
    .object({
    cart_id: zod_1.z.string(),
})
    .strict());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3RvcmUvZnJlZS1zaGlwcGluZy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNFQUF5RTtBQUN6RSw2QkFBd0I7QUFLWCxRQUFBLGdDQUFnQyxHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDL0QsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUMsQ0FBQyxLQUFLLENBQ04sT0FBQztLQUNFLE1BQU0sQ0FBQztJQUNOLE9BQU8sRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0NBQ3BCLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FDWixDQUFDIn0=