"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeApprovalSettingsQueryConfig = exports.storeApprovalSettingsFields = exports.storeEmployeeQueryConfig = exports.storeEmployeeFields = exports.storeCompanyQueryConfig = exports.storeCompanyFields = void 0;
/* Store Company Query Config */
exports.storeCompanyFields = [
    "id",
    "name",
    "logo_url",
    "email",
    "phone",
    "address",
    "city",
    "state",
    "zip",
    "country",
    "currency_code",
    "*employees",
    "*approval_settings",
];
exports.storeCompanyQueryConfig = {
    list: {
        defaults: exports.storeCompanyFields,
        isList: true,
    },
    retrieve: {
        defaults: exports.storeCompanyFields,
        isList: false,
    },
};
/* Store Employee Query Config */
exports.storeEmployeeFields = [
    "id",
    "spending_limit",
    "is_admin",
    "customer_id",
    "*customer",
    "company_id",
    "*company",
];
exports.storeEmployeeQueryConfig = {
    list: {
        defaults: exports.storeEmployeeFields,
        isList: true,
    },
    retrieve: {
        defaults: exports.storeEmployeeFields,
        isList: false,
    },
};
exports.storeApprovalSettingsFields = [
    "id",
    "company_id",
    "requires_admin_approval",
    "requires_sales_manager_approval",
    "created_at",
    "updated_at",
    "deleted_at",
];
exports.storeApprovalSettingsQueryConfig = {
    retrieve: {
        defaults: exports.storeApprovalSettingsFields,
        isList: false,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9zdG9yZS9jb21wYW5pZXMvcXVlcnktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdDQUFnQztBQUNuQixRQUFBLGtCQUFrQixHQUFHO0lBQ2hDLElBQUk7SUFDSixNQUFNO0lBQ04sVUFBVTtJQUNWLE9BQU87SUFDUCxPQUFPO0lBQ1AsU0FBUztJQUNULE1BQU07SUFDTixPQUFPO0lBQ1AsS0FBSztJQUNMLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLG9CQUFvQjtDQUNyQixDQUFDO0FBRVcsUUFBQSx1QkFBdUIsR0FBRztJQUNyQyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsMEJBQWtCO1FBQzVCLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsMEJBQWtCO1FBQzVCLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFDO0FBRUYsaUNBQWlDO0FBQ3BCLFFBQUEsbUJBQW1CLEdBQUc7SUFDakMsSUFBSTtJQUNKLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtDQUNYLENBQUM7QUFFVyxRQUFBLHdCQUF3QixHQUFHO0lBQ3RDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSwyQkFBbUI7UUFDN0IsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSwyQkFBbUI7UUFDN0IsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUM7QUFZVyxRQUFBLDJCQUEyQixHQUE0QjtJQUNsRSxJQUFJO0lBQ0osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQztBQUVXLFFBQUEsZ0NBQWdDLEdBQUc7SUFDOUMsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLG1DQUEyQjtRQUNyQyxNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQyJ9