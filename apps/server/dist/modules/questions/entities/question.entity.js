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
    questionRelations: function() {
        return questionRelations;
    },
    questionTypes: function() {
        return questionTypes;
    },
    questionTypesEnum: function() {
        return questionTypesEnum;
    },
    questions: function() {
        return questions;
    }
});
const _assignmententity = require("../../assignments/entities/assignment.entity");
const _groupentity = require("../../groups/entities/group.entity");
const _userentity = require("../../users/entities/user.entity");
const _drizzleorm = require("drizzle-orm");
const _pgcore = require("drizzle-orm/pg-core");
const questionTypes = [
    "multiple_choice",
    "discursive",
    "true_or_false"
];
const questionTypesEnum = (0, _pgcore.pgEnum)("question_types", questionTypes);
const questions = (0, _pgcore.pgTable)("questions", {
    id: (0, _pgcore.serial)("id").primaryKey(),
    userId: (0, _pgcore.varchar)("user_id").notNull().references(()=>_userentity.users.id),
    questionType: questionTypesEnum("question_type").notNull(),
    correctAnswerIndex: (0, _pgcore.integer)("correct_answer_index"),
    answers: (0, _pgcore.varchar)("answers").array().notNull(),
    title: (0, _pgcore.varchar)("title").notNull(),
    description: (0, _pgcore.varchar)("description").notNull(),
    createdAt: (0, _pgcore.timestamp)("created_at").defaultNow(),
    updatedAt: (0, _pgcore.timestamp)("updated_at").defaultNow()
});
const questionRelations = (0, _drizzleorm.relations)(questions, ({ one, many })=>({
        users: one(_userentity.users, {
            fields: [
                questions.userId
            ],
            references: [
                _userentity.users.id
            ],
            relationName: "questions_users"
        }),
        questionGroups: many(_groupentity.questionGroups),
        assignmentsQuestions: many(_assignmententity.assignmentsQuestions)
    }));

//# sourceMappingURL=question.entity.js.map