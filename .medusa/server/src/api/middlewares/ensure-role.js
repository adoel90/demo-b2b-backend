"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureRole = void 0;
const utils_1 = require("@medusajs/framework/utils");
const ensureRole = (role) => {
    return async (req, res, next) => {
        const { auth_identity_id } = req.auth_context;
        const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
        const { data: [company], } = await query.graph({
            entity: "companies",
            fields: ["id", "employees.id"],
            filters: { id: req.params.id },
        });
        if (company?.employees?.length === 0) {
            return next();
        }
        const { data: [providerIdentity], } = await query.graph({
            entity: "provider_identity",
            fields: ["id", "user_metadata"],
            filters: { auth_identity_id },
        });
        if (providerIdentity.user_metadata?.role === role) {
            return next();
        }
        return res.status(403).json({ message: "Forbidden" });
    };
};
exports.ensureRole = ensureRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlLXJvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzL2Vuc3VyZS1yb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLHFEQUFzRTtBQUUvRCxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQ3pDLE9BQU8sS0FBSyxFQUNWLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLElBQXdCLEVBQ3hCLEVBQUU7UUFDRixNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQzlDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FDaEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDcEIsTUFBTSxFQUFFLFdBQVc7WUFDbkIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7U0FDL0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNyQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FDekIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDcEIsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxFQUFFLGdCQUFnQixFQUFTO1NBQ3JDLENBQUMsQ0FBQztRQUVILElBQUksZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNsRCxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBbkNXLFFBQUEsVUFBVSxjQW1DckIifQ==