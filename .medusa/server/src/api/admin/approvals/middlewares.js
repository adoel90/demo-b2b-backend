"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminApprovalsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.adminApprovalsMiddlewares = [
    {
        method: "ALL",
        matcher: "/admin/approvals*",
        middlewares: [(0, framework_1.authenticate)("user", ["session", "bearer"])],
    },
    {
        method: ["GET"],
        matcher: "/admin/approvals",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetApprovals, query_config_1.approvalTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/approvals/:id",
        middlewares: [(0, framework_1.validateAndTransformBody)(validators_1.AdminUpdateApproval)],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2FwcHJvdmFscy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFJNkI7QUFFN0IsaURBQThEO0FBQzlELDZDQUFzRTtBQUV6RCxRQUFBLHlCQUF5QixHQUFzQjtJQUMxRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixXQUFXLEVBQUUsQ0FBQyxJQUFBLHdCQUFZLEVBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDM0Q7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsOEJBQWlCLEVBQ2pCLDJDQUE0QixDQUM3QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFdBQVcsRUFBRSxDQUFDLElBQUEsb0NBQXdCLEVBQUMsZ0NBQW1CLENBQUMsQ0FBQztLQUM3RDtDQUNGLENBQUMifQ==