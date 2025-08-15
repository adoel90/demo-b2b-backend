"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250113133737 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250113133737 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "approval" ("id" text not null, "cart_id" text not null, "type" text check ("type" in (\'admin\', \'sales_manager\')) not null, "status" text check ("status" in (\'pending\', \'approved\', \'rejected\')) not null, "created_by" text not null, "handled_by" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "approval_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_approval_deleted_at" ON "approval" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('drop table if exists "approval" cascade;');
    }
}
exports.Migration20250113133737 = Migration20250113133737;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAxMTMxMzM3MzcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hcHByb3ZhbC9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwMTEzMTMzNzM3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRXBELEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQywyZEFBMmQsQ0FBQyxDQUFDO1FBQ3plLElBQUksQ0FBQyxNQUFNLENBQUMsMkdBQTJHLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUVGO0FBWEQsMERBV0MifQ==