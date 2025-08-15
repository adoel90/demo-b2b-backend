"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20241010104109 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20241010104109 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "quote" ("id" text not null, "status" text check ("status" in (\'pending_merchant\', \'pending_customer\', \'accepted\', \'customer_rejected\', \'merchant_rejected\')) not null default \'pending_merchant\', "customer_id" text not null, "draft_order_id" text not null, "order_change_id" text not null, "cart_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "quote_pkey" primary key ("id"));');
        this.addSql('create table if not exists "message" ("id" text not null, "text" text not null, "item_id" text null, "admin_id" text null, "customer_id" text null, "quote_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "message_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_message_quote_id" ON "message" (quote_id) WHERE deleted_at IS NULL;');
        this.addSql('alter table if exists "message" add constraint "message_quote_id_foreign" foreign key ("quote_id") references "quote" ("id") on update cascade;');
    }
    async down() {
        this.addSql('alter table if exists "message" drop constraint if exists "message_quote_id_foreign";');
        this.addSql('drop table if exists "quote" cascade;');
        this.addSql('drop table if exists "message" cascade;');
    }
}
exports.Migration20241010104109 = Migration20241010104109;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNDEwMTAxMDQxMDkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9xdW90ZS9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjQxMDEwMTA0MTA5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBQ3BELEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FDVCxnaEJBQWdoQixDQUNqaEIsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQ1QsK1ZBQStWLENBQ2hXLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUNULHFHQUFxRyxDQUN0RyxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FDVCxpSkFBaUosQ0FDbEosQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQ1QsdUZBQXVGLENBQ3hGLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRjtBQTNCRCwwREEyQkMifQ==