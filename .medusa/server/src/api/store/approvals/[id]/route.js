"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const workflows_1 = require("../../../../workflows/approval/workflows");
const POST = async (req, res) => {
    const { customer_id } = req.auth_context.app_metadata;
    const { id: approvalId } = req.params;
    const { status } = req.validatedBody;
    const { result: approval, errors } = await workflows_1.updateApprovalsWorkflow.run({
        input: {
            status,
            handled_by: customer_id,
            id: approvalId,
        },
        container: req.scope,
    });
    if (errors.length > 0) {
        res.status(400).json({
            message: errors[0].error.message,
            code: "INVALID_DATA",
        });
        return;
    }
    res.json({ approval });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2FwcHJvdmFscy9baWRdL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHdFQUFtRjtBQUc1RSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQXdELEVBQ3hELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUV4QyxDQUFDO0lBRUYsTUFBTSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3RDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBRXJDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sbUNBQXVCLENBQUMsR0FBRyxDQUFDO1FBQ3JFLEtBQUssRUFBRTtZQUNMLE1BQU07WUFDTixVQUFVLEVBQUUsV0FBVztZQUN2QixFQUFFLEVBQUUsVUFBVTtTQUNmO1FBQ0QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO0tBQ3JCLENBQUMsQ0FBQztJQUVILElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN0QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ2hDLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUMsQ0FBQztRQUNILE9BQU87SUFDVCxDQUFDO0lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBNUJXLFFBQUEsSUFBSSxRQTRCZiJ9