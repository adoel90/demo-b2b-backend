"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20241014114520 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20241014114520 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table if exists "company" alter column "phone" type text using ("phone"::text);');
        this.addSql('alter table if exists "company" alter column "phone" drop not null;');
    }
    async down() {
        this.addSql('alter table if exists "company" alter column "phone" type text using ("phone"::text);');
        this.addSql('alter table if exists "company" alter column "phone" set not null;');
    }
}
exports.Migration20241014114520 = Migration20241014114520;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNDEwMTQxMTQ1MjAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jb21wYW55L21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNDEwMTQxMTQ1MjAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFcEQsS0FBSyxDQUFDLEVBQUU7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLHVGQUF1RixDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsdUZBQXVGLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9FQUFvRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztDQUVGO0FBWkQsMERBWUMifQ==