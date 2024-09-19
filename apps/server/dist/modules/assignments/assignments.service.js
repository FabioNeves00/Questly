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
        });
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