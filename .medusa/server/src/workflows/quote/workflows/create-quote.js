"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuotesWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const create_quotes_1 = require("../steps/create-quotes");
/*
  A workflow that creates a quote entity that manages the quote lifecycle.
*/
exports.createQuotesWorkflow = (0, workflows_sdk_1.createWorkflow)("create-quotes-workflow", function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, create_quotes_1.createQuotesStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXF1b3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9xdW90ZS93b3JrZmxvd3MvY3JlYXRlLXF1b3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEyRTtBQUUzRSwwREFBMEQ7QUFFMUQ7O0VBRUU7QUFDVyxRQUFBLG9CQUFvQixHQUFHLElBQUEsOEJBQWMsRUFDaEQsd0JBQXdCLEVBQ3hCLFVBQVUsS0FBMEI7SUFDbEMsT0FBTyxJQUFJLGdDQUFnQixDQUFDLElBQUEsZ0NBQWdCLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQ0YsQ0FBQyJ9