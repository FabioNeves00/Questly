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
    questions: function() {
        return questions;
    }
});
const _cuid2 = require("@paralleldrive/cuid2");
const _userentity = require("../../users/entities/user.entity");
const _drizzleorm = require("drizzle-orm");
const _pgcore = require("drizzle-orm/pg-core");
const questions = (0, _pgcore.pgTable)("questions", {
    id: (0, _pgcore.varchar)("id").primaryKey().$default(_cuid2.createId),
    userId: (0, _pgcore.varchar)("user_id").notNull().references(()=>_userentity.users.id),
    type: (0, _pgcore.varchar)("type").notNull(),
    correctAnswer: (0, _pgcore.varchar)("correct_answer").notNull(),
    answers: (0, _pgcore.varchar)("answers").notNull(),
    title: (0, _pgcore.varchar)("title").notNull(),
    description: (0, _pgcore.varchar)("description").notNull(),
    createdAt: (0, _pgcore.timestamp)("created_at").defaultNow(),
    updatedAt: (0, _pgcore.timestamp)("updated_at").defaultNow()
});
const questionRelations = (0, _drizzleorm.relations)(questions, ({ one })=>({
        users: one(_userentity.users, {
            fields: [
                questions.userId
            ],
            references: [
                _userentity.users.id
            ],
            relationName: "questions_users"
        })
    }));

//# sourceMappingURL=question.entity.js.map