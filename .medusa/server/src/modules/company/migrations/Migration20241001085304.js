"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20241001085304 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20241001085304 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table if exists "employee" drop column if exists "spend_since_reset";');
        this.addSql('alter table if exists "employee" drop column if exists "raw_spend_since_reset";');
    }
    async down() {
        this.addSql('alter table if exists "employee" add column if not exists "spend_since_reset" numeric not null default 0, add column if not exists "raw_spend_since_reset" jsonb not null;');
    }
}
exports.Migration20241001085304 = Migration20241001085304;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNDEwMDEwODUzMDQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jb21wYW55L21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNDEwMDEwODUzMDQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFDcEQsS0FBSyxDQUFDLEVBQUU7UUFDTixJQUFJLENBQUMsTUFBTSxDQUNULDZFQUE2RSxDQUM5RSxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FDVCxpRkFBaUYsQ0FDbEYsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQ1QsNEtBQTRLLENBQzdLLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFmRCwwREFlQyJ9