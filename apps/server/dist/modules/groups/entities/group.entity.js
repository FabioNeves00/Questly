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
    groupRelations: function() {
        return groupRelations;
    },
    groups: function() {
        return groups;
    },
    questionGroupRelations: function() {
        return questionGroupRelations;
    },
    questionGroups: function() {
        return questionGroups;
    }
});
const _assignmententity = require("../../assignments/entities/assignment.entity");
const _questionentity = require("../../questions/entities/question.entity");
const _userentity = require("../../users/entities/user.entity");
const _drizzleorm = require("drizzle-orm");
const _pgcore = require("drizzle-orm/pg-core");
const groups = (0, _pgcore.pgTable)('groups', {
    id: (0, _pgcore.serial)("id").primaryKey(),
    name: (0, _pgcore.varchar)('name').notNull(),
    userId: (0, _pgcore.varchar)('user_id').notNull().references(()=>_userentity.users.id),
    createdAt: (0, _pgcore.timestamp)('created_at').notNull().defaultNow(),
    updatedAt: (0, _pgcore.timestamp)('updated_at').notNull().defaultNow()
});
const questionGroups = (0, _pgcore.pgTable)('question_groups', {
    questionId: (0, _pgcore.integer)('question_id').notNull().references(()=>_questionentity.questions.id),
    groupId: (0, _pgcore.integer)('group_id').notNull().references(()=>groups.id)
}, (t)=>({
        pk: (0, _pgcore.primaryKey)({
            columns: [
                t.questionId,
                t.groupId
            ]
        })
    }));
const groupRelations = (0, _drizzleorm.relations)(groups, ({ many, one })=>({
        questionGroups: many(questionGroups),
        assignmentsGroups: many(_assignmententity.assignmentsGroups),
        user: one(_userentity.users, {
            fields: [
                groups.userId
            ],
            references: [
                _userentity.users.id
            ]
        })
    }));
const questionGroupRelations = (0, _drizzleorm.relations)(questionGroups, ({ one })=>({
        groups: one(groups, {
            fields: [
                questionGroups.groupId
            ],
            references: [
                groups.id
            ]
        }),
        questions: one(_questionentity.questions, {
            fields: [
                questionGroups.questionId
            ],
            references: [
                _questionentity.questions.id
            ]
        })
    }));

//# sourceMappingURL=group.entity.js.map