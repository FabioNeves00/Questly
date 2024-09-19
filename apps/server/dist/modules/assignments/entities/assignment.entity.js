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
    assignmentGroupRelations: function() {
        return assignmentGroupRelations;
    },
    assignmentQuestionRelations: function() {
        return assignmentQuestionRelations;
    },
    assignments: function() {
        return assignments;
    },
    assignmentsGroups: function() {
        return assignmentsGroups;
    },
    assignmentsQuestions: function() {
        return assignmentsQuestions;
    },
    assignmentsRelations: function() {
        return assignmentsRelations;
    }
});
const _groupentity = require("../../groups/entities/group.entity");
const _questionentity = require("../../questions/entities/question.entity");
const _userentity = require("../../users/entities/user.entity");
const _drizzleorm = require("drizzle-orm");
const _pgcore = require("drizzle-orm/pg-core");
const assignments = (0, _pgcore.pgTable)('assignments', {
    id: (0, _pgcore.serial)('id').primaryKey(),
    userId: (0, _pgcore.varchar)('user_id').notNull().references(()=>_userentity.users.id),
    name: (0, _pgcore.varchar)('name').notNull(),
    description: (0, _pgcore.varchar)('description'),
    createdAt: (0, _pgcore.timestamp)('created_at').defaultNow(),
    updatedAt: (0, _pgcore.timestamp)('updated_at').defaultNow()
});
const assignmentsQuestions = (0, _pgcore.pgTable)('assignments_questions', {
    assignmentId: (0, _pgcore.integer)('assignment_id').notNull().references(()=>assignments.id),
    questionId: (0, _pgcore.integer)('question_id').notNull().references(()=>_questionentity.questions.id)
}, (t)=>({
        pk: (0, _pgcore.primaryKey)({
            columns: [
                t.assignmentId,
                t.questionId
            ]
        })
    }));
const assignmentsGroups = (0, _pgcore.pgTable)('assignments_groups', {
    assignmentId: (0, _pgcore.integer)('assignment_id').notNull().references(()=>assignments.id),
    groupId: (0, _pgcore.integer)('group_id').notNull().references(()=>_groupentity.groups.id)
}, (t)=>({
        pk: (0, _pgcore.primaryKey)({
            columns: [
                t.assignmentId,
                t.groupId
            ]
        })
    }));
const assignmentsRelations = (0, _drizzleorm.relations)(assignments, ({ many, one })=>({
        questions: many(assignmentsQuestions, {
            relationName: "assignments_questions"
        }),
        groups: many(assignmentsGroups, {
            relationName: "assignments_groups"
        }),
        users: one(_userentity.users, {
            fields: [
                assignments.userId
            ],
            references: [
                _userentity.users.id
            ],
            relationName: "assignments_users"
        })
    }));
const assignmentGroupRelations = (0, _drizzleorm.relations)(assignmentsGroups, ({ one })=>({
        groups: one(_groupentity.groups, {
            fields: [
                assignmentsGroups.groupId
            ],
            references: [
                _groupentity.groups.id
            ]
        }),
        assignments: one(assignments, {
            fields: [
                assignmentsGroups.assignmentId
            ],
            references: [
                assignments.id
            ]
        })
    }));
const assignmentQuestionRelations = (0, _drizzleorm.relations)(assignmentsQuestions, ({ one })=>({
        questions: one(_questionentity.questions, {
            fields: [
                assignmentsQuestions.questionId
            ],
            references: [
                _questionentity.questions.id
            ]
        }),
        assignments: one(assignments, {
            fields: [
                assignmentsQuestions.assignmentId
            ],
            references: [
                assignments.id
            ]
        })
    }));

//# sourceMappingURL=assignment.entity.js.map