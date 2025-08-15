"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuotesStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const quote_1 = require("../../../modules/quote");
/*
  A step to create a quote.
  
  This is being used in the create quote workflow.
  The first function attempts to create the quote, while the second function attempts to delete
  the created quote if the workflow fails.
*/
exports.createQuotesStep = (0, workflows_sdk_1.createStep)("create-quotes", async (input, { container }) => {
    const quoteModule = container.resolve(quote_1.QUOTE_MODULE);
    const quotes = await quoteModule.createQuotes(input);
    return new workflows_sdk_1.StepResponse(quotes, quotes.map((quote) => quote.id));
}, async (quoteIds, { container }) => {
    const quoteModule = container.resolve(quote_1.QUOTE_MODULE);
    await quoteModule.deleteQuotes(quoteIds);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXF1b3Rlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcXVvdGUvc3RlcHMvY3JlYXRlLXF1b3Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkU7QUFDN0Usa0RBQXNEO0FBT3REOzs7Ozs7RUFNRTtBQUNXLFFBQUEsZ0JBQWdCLEdBQUcsSUFBQSwwQkFBVSxFQUN4QyxlQUFlLEVBQ2YsS0FBSyxFQUNILEtBQTBCLEVBQzFCLEVBQUUsU0FBUyxFQUFFLEVBQ21DLEVBQUU7SUFDbEQsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBc0Isb0JBQVksQ0FBQyxDQUFDO0lBRXpFLE1BQU0sTUFBTSxHQUFHLE1BQU0sV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVyRCxPQUFPLElBQUksNEJBQVksQ0FDckIsTUFBTSxFQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FDaEMsQ0FBQztBQUNKLENBQUMsRUFDRCxLQUFLLEVBQUUsUUFBa0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDMUMsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBc0Isb0JBQVksQ0FBQyxDQUFDO0lBRXpFLE1BQU0sV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQ0YsQ0FBQyJ9