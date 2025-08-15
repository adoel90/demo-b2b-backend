"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreAddLineItemsBulk = exports.GetCartLineItemsBulkParams = void 0;
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const zod_1 = require("zod");
exports.GetCartLineItemsBulkParams = (0, validators_1.createSelectParams)();
exports.StoreAddLineItemsBulk = zod_1.z
    .object({
    line_items: zod_1.z.array(zod_1.z.object({
        variant_id: zod_1.z.string(),
        quantity: zod_1.z.number(),
    })),
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3RvcmUvY2FydHMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzRUFBMkU7QUFDM0UsNkJBQXdCO0FBS1gsUUFBQSwwQkFBMEIsR0FBRyxJQUFBLCtCQUFrQixHQUFFLENBQUM7QUFHbEQsUUFBQSxxQkFBcUIsR0FBRyxPQUFDO0tBQ25DLE1BQU0sQ0FBQztJQUNOLFVBQVUsRUFBRSxPQUFDLENBQUMsS0FBSyxDQUNqQixPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1AsVUFBVSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7UUFDdEIsUUFBUSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7S0FDckIsQ0FBQyxDQUNIO0NBQ0YsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFDIn0=