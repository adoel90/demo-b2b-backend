"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const cart_1 = __importDefault(require("@medusajs/medusa/cart"));
const company_1 = __importDefault(require("../modules/company"));
exports.default = (0, utils_1.defineLink)(company_1.default.linkable.company, {
    linkable: cart_1.default.linkable.cart,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1jYXJ0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5rcy9jb21wYW55LWNhcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXVEO0FBQ3ZELGlFQUErQztBQUMvQyxpRUFBK0M7QUFFL0Msa0JBQWUsSUFBQSxrQkFBVSxFQUFDLGlCQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtJQUN4RCxRQUFRLEVBQUUsY0FBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJO0lBQ2xDLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FBQyxDQUFDIn0=