"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const company_1 = __importDefault(require("../modules/company"));
const customer_1 = __importDefault(require("@medusajs/medusa/customer"));
exports.default = (0, utils_1.defineLink)(company_1.default.linkable.company, customer_1.default.linkable.customerGroup);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1jdXN0b21lci1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5rcy9jb21wYW55LWN1c3RvbWVyLWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXVEO0FBQ3ZELGlFQUErQztBQUMvQyx5RUFBdUQ7QUFFdkQsa0JBQWUsSUFBQSxrQkFBVSxFQUN2QixpQkFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQzlCLGtCQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FDdEMsQ0FBQyJ9