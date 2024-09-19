"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "QuestionsService", {
    enumerable: true,
    get: function() {
        return QuestionsService;
    }
});
const _common = require("@nestjs/common");
const _databaseservice = require("../../common/database/database.service");
const _questionentity = require("./entities/question.entity");
const _drizzleorm = require("drizzle-orm");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let QuestionsService = class QuestionsService {
    async create(createQuestionDto) {
        return await this.drizzle.db.insert(_questionentity.questions).values(createQuestionDto).returning();
    }
    async update(id, updateQuestionDto) {
        return await this.drizzle.db.update(_questionentity.questions).set(updateQuestionDto).where((0, _drizzleorm.eq)(_questionentity.questions.id, id)).returning();
    }
    async findAll() {
        return await this.drizzle.db.select().from(_questionentity.questions);
    }
    async findOne(id) {
        return await this.drizzle.db.select().from(_questionentity.questions).where((0, _drizzleorm.eq)(_questionentity.questions.id, id));
    }
    async delete(id) {
        return await this.drizzle.db.delete(_questionentity.questions).where((0, _drizzleorm.eq)(_questionentity.questions.id, id)).returning();
    }
    constructor(drizzle){
        this.drizzle = drizzle;
    }
};
QuestionsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _databaseservice.DatabaseService === "undefined" ? Object : _databaseservice.DatabaseService
    ])
], QuestionsService);

//# sourceMappingURL=questions.service.js.map