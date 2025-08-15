"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminApprovalSettingsQueryConfig = exports.adminApprovalSettingsFields = exports.adminEmployeeQueryConfig = exports.adminEmployeeFields = exports.adminCompanyQueryConfig = exports.adminCompanyFields = void 0;
/* Company Query Config */
exports.adminCompanyFields = [
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
];
exports.adminCompanyQueryConfig = {
    list: {
        defaults: exports.adminCompanyFields,
        isList: true,
    },
    retrieve: {
        defaults: exports.adminCompanyFields,
        isList: false,
    },
};
/* Employee Query Config */
exports.adminEmployeeFields = [
    "id",
    "spending_limit",
    "is_admin",
    "customer_id",
    "*customer",
    "company_id",
    "*company",
];
exports.adminEmployeeQueryConfig = {
    list: {
        defaults: exports.adminEmployeeFields,
        isList: true,
    },
    retrieve: {
        defaults: exports.adminEmployeeFields,
        isList: false,
    },
};
/* Approval Settings Query Config */
exports.adminApprovalSettingsFields = [
    "id",
    "company_id",
    "requires_admin_approval",
    "requires_sales_manager_approval",
    "*company",
];
exports.adminApprovalSettingsQueryConfig = {
    list: {
        defaults: exports.adminApprovalSettingsFields,
        isList: true,
    },
    retrieve: {
        defaults: exports.adminApprovalSettingsFields,
        isList: false,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9hZG1pbi9jb21wYW5pZXMvcXVlcnktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUNiLFFBQUEsa0JBQWtCLEdBQUc7SUFDaEMsSUFBSTtJQUNKLE1BQU07SUFDTixVQUFVO0lBQ1YsT0FBTztJQUNQLE9BQU87SUFDUCxTQUFTO0lBQ1QsTUFBTTtJQUNOLE9BQU87SUFDUCxLQUFLO0lBQ0wsU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0NBQ2IsQ0FBQztBQUVXLFFBQUEsdUJBQXVCLEdBQUc7SUFDckMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLDBCQUFrQjtRQUM1QixNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLDBCQUFrQjtRQUM1QixNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQztBQUVGLDJCQUEyQjtBQUNkLFFBQUEsbUJBQW1CLEdBQUc7SUFDakMsSUFBSTtJQUNKLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtDQUNYLENBQUM7QUFFVyxRQUFBLHdCQUF3QixHQUFHO0lBQ3RDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSwyQkFBbUI7UUFDN0IsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSwyQkFBbUI7UUFDN0IsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUM7QUFFRixvQ0FBb0M7QUFDdkIsUUFBQSwyQkFBMkIsR0FBRztJQUN6QyxJQUFJO0lBQ0osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsVUFBVTtDQUNYLENBQUM7QUFFVyxRQUFBLGdDQUFnQyxHQUFHO0lBQzlDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxtQ0FBMkI7UUFDckMsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxtQ0FBMkI7UUFDckMsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUMifQ==