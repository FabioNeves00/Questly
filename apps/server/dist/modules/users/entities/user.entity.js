"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    accountTypes: function() {
        return accountTypes;
    },
    userRelations: function() {
        return userRelations;
    },
    users: function() {
        return users;
    }
});
const _cuid2 = require("@paralleldrive/cuid2");
const _questionentity = require("../../questions/entities/question.entity");
const _drizzleorm = require("drizzle-orm");
const _pgcore = require("drizzle-orm/pg-core");
const accountTypes = (0, _pgcore.pgEnum)("account_types", [
    "github",
    "google",
    "native"
]);
const users = (0, _pgcore.pgTable)("users", {
    id: (0, _pgcore.varchar)("id").primaryKey().$default(_cuid2.createId),
    email: (0, _pgcore.varchar)("email").notNull(),
    password: (0, _pgcore.varchar)("password"),
    firstName: (0, _pgcore.varchar)("first_name").notNull(),
    lastName: (0, _pgcore.varchar)("last_name").notNull(),
    avatar: (0, _pgcore.varchar)("avatar"),
    accountType: accountTypes("account_type").default('native').notNull()
});
const userRelations = (0, _drizzleorm.relations)(users, ({ many })=>({
        questions: many(_questionentity.questions, {
            relationName: "questions_users"
        })
    }));

//# sourceMappingURL=user.entity.js.map