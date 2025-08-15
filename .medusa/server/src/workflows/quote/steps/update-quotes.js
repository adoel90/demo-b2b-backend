"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuotesStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const quote_1 = require("../../../modules/quote");
/*
  A step to update a quote.
  
  The first function attempts to update the quote, while the second function attempts to revert the update.
  The first function is also in charge of preparing the data to be reverted in the second function.
*/
exports.updateQuotesStep = (0, workflows_sdk_1.createStep)("update-quotes", async (data, { container }) => {
    const quoteModule = container.resolve(quote_1.QUOTE_MODULE);
    const { selects, relations } = (0, utils_1.getSelectsAndRelationsFromObjectArray)(data);
    const dataBeforeUpdate = await quoteModule.listQuotes({ id: data.map((d) => d.id) }, { relations, select: selects });
    const updatedQuotes = await quoteModule.updateQuotes(data);
    return new workflows_sdk_1.StepResponse(updatedQuotes, {
        dataBeforeUpdate,
        selects,
        relations,
    });
}, async (revertInput, { container }) => {
    if (!revertInput) {
        return;
    }
    const quoteModule = container.resolve(quote_1.QUOTE_MODULE);
    const { dataBeforeUpdate, selects, relations } = revertInput;
    await quoteModule.updateQuotes(dataBeforeUpdate.map((data) => (0, utils_1.convertItemResponseToUpdateRequest)(data, selects, relations)));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXF1b3Rlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcXVvdGUvc3RlcHMvdXBkYXRlLXF1b3Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFHbUM7QUFDbkMscUVBQTZFO0FBQzdFLGtEQUFzRDtBQUd0RDs7Ozs7RUFLRTtBQUNXLFFBQUEsZ0JBQWdCLEdBQUcsSUFBQSwwQkFBVSxFQUN4QyxlQUFlLEVBQ2YsS0FBSyxFQUFFLElBQXlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2pELE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQXNCLG9CQUFZLENBQUMsQ0FBQztJQUN6RSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUEsNkNBQXFDLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0UsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQ25ELEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUM3QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQy9CLENBQUM7SUFFRixNQUFNLGFBQWEsR0FBRyxNQUFNLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0QsT0FBTyxJQUFJLDRCQUFZLENBQUMsYUFBYSxFQUFFO1FBQ3JDLGdCQUFnQjtRQUNoQixPQUFPO1FBQ1AsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsRUFDRCxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakIsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFzQixvQkFBWSxDQUFDLENBQUM7SUFDekUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxXQUFXLENBQUM7SUFFN0QsTUFBTSxXQUFXLENBQUMsWUFBWSxDQUM1QixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUM1QixJQUFBLDBDQUFrQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQzdELENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDIn0=