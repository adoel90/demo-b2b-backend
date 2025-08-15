"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const update_approval_settings_1 = require("../../../../../workflows/approval/workflows/update-approval-settings");
const query_config_1 = require("../../query-config");
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = req.params;
    const { data: [approval_settings], } = await query.graph({
        entity: "approval_settings",
        fields: query_config_1.storeApprovalSettingsFields,
        filters: { company_id: id },
    });
    const { requires_admin_approval } = req.validatedBody;
    await update_approval_settings_1.updateApprovalSettingsWorkflow.run({
        input: {
            id: approval_settings.id,
            requires_admin_approval,
        },
    });
    res.status(201).send();
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NvbXBhbmllcy9baWRdL2FwcHJvdmFsLXNldHRpbmdzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFzRTtBQUN0RSxtSEFBc0g7QUFDdEgscURBQWlFO0FBRzFELE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBbUQsRUFDbkQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRTFCLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUMxQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLE1BQU0sRUFBRSwwQ0FBMkI7UUFDbkMsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRTtLQUM1QixDQUFDLENBQUM7SUFFSCxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBRXRELE1BQU0seURBQThCLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3hCLHVCQUF1QjtTQUN4QjtLQUNGLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBMUJXLFFBQUEsSUFBSSxRQTBCZiJ9