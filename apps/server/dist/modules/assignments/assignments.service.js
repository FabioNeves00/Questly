"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AssignmentsService", {
    enumerable: true,
    get: function() {
        return AssignmentsService;
    }
});
const _common = require("@nestjs/common");
const _databaseservice = require("../../common/database/database.service");
const _assignmententity = require("./entities/assignment.entity");
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
let AssignmentsService = class AssignmentsService {
    async create(createAssignmentDto, userId) {
        const assignment = await this.drizzle.db.insert(_assignmententity.assignments).values({
            ...createAssignmentDto,
            userId
        }).returning()[0];
        await this.drizzle.db.insert(_assignmententity.assignmentsGroups).values(createAssignmentDto.groups.map((g)=>({
                assignmentId: assignment.id,
                groupId: g.groupId
            })));
        await this.drizzle.db.insert(_assignmententity.assignmentsQuestions).values(createAssignmentDto.questions.map((q)=>({
                assignmentId: assignment.id,
                questionId: q.questionId
            })));
        return assignment;
    }
    async findAll() {
        return this.drizzle.db.select().from(_assignmententity.assignments);
    }
    async findOne(id) {
        return this.drizzle.db.select().from(_assignmententity.assignments).where((0, _drizzleorm.eq)(_assignmententity.assignments.id, id));
    }
    async delete(id) {
        return this.drizzle.db.delete(_assignmententity.assignments).where((0, _drizzleorm.eq)(_assignmententity.assignments.id, id)).returning();
    }
    async update(id, updateAssignmentDto) {
        return this.drizzle.db.update(_assignmententity.assignments).set(updateAssignmentDto).where((0, _drizzleorm.eq)(_assignmententity.assignments.id, id)).returning();
    }
    async addQuestionToAssignment(id, questionId) {
        return this.drizzle.db.insert(_assignmententity.assignmentsQuestions).values({
            assignmentId: id,
            questionId
        }).returning();
    }
    async addGroupToAssignment(id, groupId) {
        return this.drizzle.db.insert(_assignmententity.assignmentsGroups).values({
            assignmentId: id,
            groupId
        }).returning();
    }
    async removeQuestionFromAssignment(id, questionId) {
        return this.drizzle.db.delete(_assignmententity.assignmentsQuestions).where((0, _drizzleorm.and)((0, _drizzleorm.eq)(_assignmententity.assignmentsQuestions.assignmentId, id), (0, _drizzleorm.eq)(_assignmententity.assignmentsQuestions.questionId, questionId))).returning();
    }
    async removeGroupFromAssignment(id, groupId) {
        return this.drizzle.db.delete(_assignmententity.assignmentsGroups).where((0, _drizzleorm.and)((0, _drizzleorm.eq)(_assignmententity.assignmentsGroups.assignmentId, id), (0, _drizzleorm.eq)(_assignmententity.assignmentsGroups.groupId, groupId))).returning();
    }
    constructor(drizzle){
        this.drizzle = drizzle;
    }
};
AssignmentsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _databaseservice.DatabaseService === "undefined" ? Object : _databaseservice.DatabaseService
    ])
], AssignmentsService);

//# sourceMappingURL=assignments.service.js.map