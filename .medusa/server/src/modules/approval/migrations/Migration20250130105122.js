"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250130105122 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250130105122 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "approval_status" ("id" text not null, "cart_id" text not null, "status" text check ("status" in (\'pending\', \'approved\', \'rejected\')) not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "approval_status_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_approval_status_deleted_at" ON "approval_status" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('drop table if exists "approval_status" cascade;');
    }
}
exports.Migration20250130105122 = Migration20250130105122;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAxMzAxMDUxMjIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hcHByb3ZhbC9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwMTMwMTA1MTIyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRXBELEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQywwV0FBMFcsQ0FBQyxDQUFDO1FBQ3hYLElBQUksQ0FBQyxNQUFNLENBQUMseUhBQXlILENBQUMsQ0FBQztJQUN6SSxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUVGO0FBWEQsMERBV0MifQ==