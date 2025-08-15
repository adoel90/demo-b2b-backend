"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250108113324 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250108113324 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table if exists "approval_settings" add column if not exists "company_id" text not null;');
    }
    async down() {
        this.addSql('alter table if exists "approval_settings" drop column if exists "company_id";');
    }
}
exports.Migration20250108113324 = Migration20250108113324;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAxMDgxMTMzMjQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hcHByb3ZhbC9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwMTA4MTEzMzI0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRXBELEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnR0FBZ0csQ0FBQyxDQUFDO0lBQ2hILENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsK0VBQStFLENBQUMsQ0FBQztJQUMvRixDQUFDO0NBRUY7QUFWRCwwREFVQyJ9