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
    userRelations: function() {
        return userRelations;
    },
    users: function() {
        return users;
    }
});
const _assignmententity = require("../../assignments/entities/assignment.entity");
const _groupentity = require("../../groups/entities/group.entity");
const _cuid2 = require("@paralleldrive/cuid2");
const _questionentity = require("../../questions/entities/question.entity");
const _drizzleorm = require("drizzle-orm");
const _pgcore = require("drizzle-orm/pg-core");
const users = (0, _pgcore.pgTable)("users", {
    id: (0, _pgcore.varchar)("id").primaryKey().$default(_cuid2.createId),
    email: (0, _pgcore.varchar)("email").notNull(),
    password: (0, _pgcore.varchar)("password"),
    firstName: (0, _pgcore.varchar)("first_name").notNull(),
    lastName: (0, _pgcore.varchar)("last_name").notNull(),
    avatar: (0, _pgcore.varchar)("avatar")
});
const userRelations = (0, _drizzleorm.relations)(users, ({ many })=>({
        questions: many(_questionentity.questions, {
            relationName: "questions_users"
        }),
        assignments: many(_assignmententity.assignments, {
            relationName: "assignments_users"
        }),
        groups: many(_groupentity.groups, {
            relationName: "groups_users"
        })
    }));

//# sourceMappingURL=user.entity.js.map