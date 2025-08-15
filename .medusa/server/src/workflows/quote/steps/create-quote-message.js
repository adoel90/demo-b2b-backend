"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuoteMessageStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const quote_1 = require("../../../modules/quote");
/*
  A step to create a quote's message.
  
  This is being used in the create quote message workflow.
  The first function attempts to create the message, while the second function attempts to delete
  the created message if the workflow fails.
*/
exports.createQuoteMessageStep = (0, workflows_sdk_1.createStep)("create-quote-message", async (input, { container }) => {
    const quoteModule = container.resolve(quote_1.QUOTE_MODULE);
    const quoteMessage = await quoteModule.createMessages(input);
    return new workflows_sdk_1.StepResponse(quoteMessage, quoteMessage.id);
}, async (id, { container }) => {
    const quoteModule = container.resolve(quote_1.QUOTE_MODULE);
    await quoteModule.deleteMessages([id]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXF1b3RlLW1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3F1b3RlL3N0ZXBzL2NyZWF0ZS1xdW90ZS1tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUM3RSxrREFBc0Q7QUFPdEQ7Ozs7OztFQU1FO0FBQ1csUUFBQSxzQkFBc0IsR0FBRyxJQUFBLDBCQUFVLEVBQzlDLHNCQUFzQixFQUN0QixLQUFLLEVBQ0gsS0FBK0IsRUFDL0IsRUFBRSxTQUFTLEVBQUUsRUFDc0MsRUFBRTtJQUNyRCxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFzQixvQkFBWSxDQUFDLENBQUM7SUFFekUsTUFBTSxZQUFZLEdBQUcsTUFBTSxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTdELE9BQU8sSUFBSSw0QkFBWSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQyxFQUNELEtBQUssRUFBRSxFQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2xDLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQXNCLG9CQUFZLENBQUMsQ0FBQztJQUV6RSxNQUFNLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FDRixDQUFDIn0=