"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../../../workflows/approval/workflows");
const query_config_1 = require("../../query-config");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: approvalSettings, metadata } = await query.graph({
        entity: "approval_settings",
        fields: query_config_1.adminApprovalSettingsFields,
        filters: req.filterableFields,
        pagination: {
            ...req.remoteQueryConfig.pagination,
        },
    });
    res.json({
        approvalSettings,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { result: updatedApprovalSettings } = await workflows_1.updateApprovalSettingsWorkflow.run({
        input: req.validatedBody,
        container: req.scope,
    });
    const { data: approvalSettings } = await query.graph({
        entity: "approval_settings",
        fields: query_config_1.adminApprovalSettingsFields,
        filters: {
            id: updatedApprovalSettings.id,
        },
    }, { throwIfKeyNotFound: true });
    res.json({ approvalSettings });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2NvbXBhbmllcy9baWRdL2FwcHJvdmFsLXNldHRpbmdzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFEQUFzRTtBQUN0RSwyRUFBNkY7QUFDN0YscURBQWlFO0FBRzFELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzdELE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsTUFBTSxFQUFFLDBDQUEyQjtRQUNuQyxPQUFPLEVBQUUsR0FBRyxDQUFDLGdCQUFnQjtRQUM3QixVQUFVLEVBQUU7WUFDVixHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVO1NBQ3BDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLGdCQUFnQjtRQUNoQixLQUFLLEVBQUUsUUFBUyxDQUFDLEtBQUs7UUFDdEIsTUFBTSxFQUFFLFFBQVMsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxRQUFTLENBQUMsSUFBSTtLQUN0QixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFyQlcsUUFBQSxHQUFHLE9BcUJkO0FBRUssTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUFnRSxFQUNoRSxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxHQUN2QyxNQUFNLDBDQUE4QixDQUFDLEdBQUcsQ0FBQztRQUN2QyxLQUFLLEVBQUUsR0FBRyxDQUFDLGFBQWE7UUFDeEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO0tBQ3JCLENBQUMsQ0FBQztJQUVMLE1BQU0sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ2xEO1FBQ0UsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixNQUFNLEVBQUUsMENBQTJCO1FBQ25DLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSx1QkFBdUIsQ0FBQyxFQUFFO1NBQy9CO0tBQ0YsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUF4QlcsUUFBQSxJQUFJLFFBd0JmIn0=