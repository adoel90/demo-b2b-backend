"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250107125203 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250107125203 extends migrations_1.Migration {
    async up() {
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_quote_deleted_at" ON "quote" (deleted_at) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_message_deleted_at" ON "message" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('DROP INDEX IF EXISTS "IDX_quote_deleted_at";');
        this.addSql('DROP INDEX IF EXISTS "IDX_message_deleted_at";');
    }
}
exports.Migration20250107125203 = Migration20250107125203;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAxMDcxMjUyMDMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9xdW90ZS9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwMTA3MTI1MjAzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBQ3BELEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FDVCxxR0FBcUcsQ0FDdEcsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQ1QseUdBQXlHLENBQzFHLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRjtBQWRELDBEQWNDIn0=