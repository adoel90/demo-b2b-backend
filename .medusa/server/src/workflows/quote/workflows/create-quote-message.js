"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuoteMessageWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const create_quote_message_1 = require("../steps/create-quote-message");
/*
  A workflow that creates messages within a quote. Messages are used as a communication trail
  between the merchant and the customer. The message can also hold an item_id for either of the
  actors to have a conversation around or negotiate upon.
*/
exports.createQuoteMessageWorkflow = (0, workflows_sdk_1.createWorkflow)("create-quote-message-workflow", function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, create_quote_message_1.createQuoteMessageStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXF1b3RlLW1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3F1b3RlL3dvcmtmbG93cy9jcmVhdGUtcXVvdGUtbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBMkU7QUFFM0Usd0VBQXVFO0FBRXZFOzs7O0VBSUU7QUFDVyxRQUFBLDBCQUEwQixHQUFHLElBQUEsOEJBQWMsRUFDdEQsK0JBQStCLEVBQy9CLFVBQ0UsS0FBK0I7SUFFL0IsT0FBTyxJQUFJLGdDQUFnQixDQUFDLElBQUEsNkNBQXNCLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQ0YsQ0FBQyJ9