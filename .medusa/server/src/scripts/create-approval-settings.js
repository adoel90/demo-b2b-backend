"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createApprovalSettings;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../workflows/approval/workflows");
/**
 * This script adds approval settings to companies that don't have them yet.
 * It's meant to be run once when you're upgrading the Starter for an existing project.
 * If you're doing a fresh install, you can ignore this script.
 *
 * Execute by running `npx medusa exec src/scripts/create-approval-settings.ts`
 */
async function createApprovalSettings({ container }) {
    const logger = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: companies } = await query.graph({
        entity: "company",
        fields: ["id", "approval_settings.*"],
    });
    const companiesWithoutApprovalSettings = companies.filter((company) => !company.approval_settings);
    logger.info(`Found ${companiesWithoutApprovalSettings.length} companies without approval settings`);
    if (companiesWithoutApprovalSettings.length === 0) {
        logger.error("No companies without approval settings found");
        return;
    }
    logger.info(`Creating approval settings for ${companiesWithoutApprovalSettings.length} companies`);
    const { result } = await workflows_1.createApprovalSettingsWorkflow.run({
        input: companiesWithoutApprovalSettings,
        container,
    });
    logger.info(`Approval settings created for ${result.length} companies`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFwcHJvdmFsLXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NjcmlwdHMvY3JlYXRlLWFwcHJvdmFsLXNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBV0EseUNBZ0NDO0FBMUNELHFEQUFzRTtBQUN0RSwrREFBaUY7QUFFakY7Ozs7OztHQU1HO0FBQ1ksS0FBSyxVQUFVLHNCQUFzQixDQUFDLEVBQUUsU0FBUyxFQUFZO0lBQzFFLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkUsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM1QyxNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLENBQUM7S0FDdEMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxnQ0FBZ0MsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUN2RCxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQ3hDLENBQUM7SUFFRixNQUFNLENBQUMsSUFBSSxDQUNULFNBQVMsZ0NBQWdDLENBQUMsTUFBTSxzQ0FBc0MsQ0FDdkYsQ0FBQztJQUVGLElBQUksZ0NBQWdDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUM3RCxPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQ1Qsa0NBQWtDLGdDQUFnQyxDQUFDLE1BQU0sWUFBWSxDQUN0RixDQUFDO0lBRUYsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sMENBQThCLENBQUMsR0FBRyxDQUFDO1FBQzFELEtBQUssRUFBRSxnQ0FBZ0M7UUFDdkMsU0FBUztLQUNWLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLE1BQU0sQ0FBQyxNQUFNLFlBQVksQ0FBQyxDQUFDO0FBQzFFLENBQUMifQ==