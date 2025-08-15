"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompaniesWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.updateCompaniesWorkflow = (0, workflows_sdk_1.createWorkflow)("update-companies", function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.updateCompaniesStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWNvbXBhbmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29tcGFueS93b3JrZmxvd3MvdXBkYXRlLWNvbXBhbmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBMkU7QUFFM0Usb0NBQStDO0FBRWxDLFFBQUEsdUJBQXVCLEdBQUcsSUFBQSw4QkFBYyxFQUNuRCxrQkFBa0IsRUFDbEIsVUFBVSxLQUEwQjtJQUNsQyxPQUFPLElBQUksZ0NBQWdCLENBQUMsSUFBQSwyQkFBbUIsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FDRixDQUFDIn0=