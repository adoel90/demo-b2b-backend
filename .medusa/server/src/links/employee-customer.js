"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const customer_1 = __importDefault(require("@medusajs/medusa/customer"));
const company_1 = __importDefault(require("../modules/company"));
exports.default = (0, utils_1.defineLink)(company_1.default.linkable.employee, customer_1.default.linkable.customer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3MvZW1wbG95ZWUtY3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBdUQ7QUFDdkQseUVBQXVEO0FBQ3ZELGlFQUErQztBQUUvQyxrQkFBZSxJQUFBLGtCQUFVLEVBQ3ZCLGlCQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFDL0Isa0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNqQyxDQUFDIn0=