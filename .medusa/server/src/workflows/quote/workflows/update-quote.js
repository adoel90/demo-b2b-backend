"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuotesWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const update_quotes_1 = require("../steps/update-quotes");
/*
  A workflow that updates a quote.
*/
exports.updateQuotesWorkflow = (0, workflows_sdk_1.createWorkflow)("update-quotes-workflow", function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, update_quotes_1.updateQuotesStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXF1b3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9xdW90ZS93b3JrZmxvd3MvdXBkYXRlLXF1b3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEyRTtBQUUzRSwwREFBMEQ7QUFFMUQ7O0VBRUU7QUFDVyxRQUFBLG9CQUFvQixHQUFHLElBQUEsOEJBQWMsRUFDaEQsd0JBQXdCLEVBQ3hCLFVBQVUsS0FBMEI7SUFDbEMsT0FBTyxJQUFJLGdDQUFnQixDQUFDLElBQUEsZ0NBQWdCLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQ0YsQ0FBQyJ9