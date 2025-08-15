"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const approval_1 = __importDefault(require("../modules/approval"));
const cart_1 = __importDefault(require("@medusajs/medusa/cart"));
exports.default = (0, utils_1.defineLink)(cart_1.default.linkable.cart, {
    linkable: approval_1.default.linkable.approval,
    deleteCascade: true,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hcHByb3ZhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3MvY2FydC1hcHByb3ZhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBdUQ7QUFDdkQsbUVBQWlEO0FBQ2pELGlFQUErQztBQUUvQyxrQkFBZSxJQUFBLGtCQUFVLEVBQUMsY0FBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7SUFDbEQsUUFBUSxFQUFFLGtCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVE7SUFDMUMsYUFBYSxFQUFFLElBQUk7SUFDbkIsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDLENBQUMifQ==