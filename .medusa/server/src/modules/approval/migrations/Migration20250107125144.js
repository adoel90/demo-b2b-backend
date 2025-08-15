"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250107125144 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250107125144 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "approval_settings" ("id" text not null, "requires_admin_approval" boolean not null default false, "requires_sales_manager_approval" boolean not null default false, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "approval_settings_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_approval_settings_deleted_at" ON "approval_settings" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('drop table if exists "approval_settings" cascade;');
    }
}
exports.Migration20250107125144 = Migration20250107125144;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAxMDcxMjUxNDQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hcHByb3ZhbC9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwMTA3MTI1MTQ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRXBELEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQywyWEFBMlgsQ0FBQyxDQUFDO1FBQ3pZLElBQUksQ0FBQyxNQUFNLENBQUMsNkhBQTZILENBQUMsQ0FBQztJQUM3SSxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLG1EQUFtRCxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUVGO0FBWEQsMERBV0MifQ==