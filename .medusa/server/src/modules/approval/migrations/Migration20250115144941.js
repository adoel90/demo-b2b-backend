"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250115144941 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250115144941 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table if exists "approval" alter column "handled_by" type text using ("handled_by"::text);');
        this.addSql('alter table if exists "approval" alter column "handled_by" drop not null;');
    }
    async down() {
        this.addSql('alter table if exists "approval" alter column "handled_by" type text using ("handled_by"::text);');
        this.addSql('alter table if exists "approval" alter column "handled_by" set not null;');
    }
}
exports.Migration20250115144941 = Migration20250115144941;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAxMTUxNDQ5NDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hcHByb3ZhbC9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwMTE1MTQ0OTQxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRXBELEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrR0FBa0csQ0FBQyxDQUFDO1FBQ2hILElBQUksQ0FBQyxNQUFNLENBQUMsMkVBQTJFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLGtHQUFrRyxDQUFDLENBQUM7UUFDaEgsSUFBSSxDQUFDLE1BQU0sQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Q0FFRjtBQVpELDBEQVlDIn0=