"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250107125154 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250107125154 extends migrations_1.Migration {
    async up() {
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_company_deleted_at" ON "company" (deleted_at) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_employee_deleted_at" ON "employee" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('DROP INDEX IF EXISTS "IDX_company_deleted_at";');
        this.addSql('DROP INDEX IF EXISTS "IDX_employee_deleted_at";');
    }
}
exports.Migration20250107125154 = Migration20250107125154;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAxMDcxMjUxNTQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jb21wYW55L21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTAxMDcxMjUxNTQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFDcEQsS0FBSyxDQUFDLEVBQUU7UUFDTixJQUFJLENBQUMsTUFBTSxDQUNULHlHQUF5RyxDQUMxRyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FDVCwyR0FBMkcsQ0FDNUcsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGO0FBZEQsMERBY0MifQ==