"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GroupsService", {
    enumerable: true,
    get: function() {
        return GroupsService;
    }
});
const _common = require("@nestjs/common");
const _databaseservice = require("../../common/database/database.service");
const _groupentity = require("./entities/group.entity");
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
let GroupsService = class GroupsService {
    async create(createGroupDto) {
        return this.drizzle.db.insert(_groupentity.groups).values(createGroupDto).returning();
    }
    async update(id, updateGroupDto) {
        return this.drizzle.db.update(_groupentity.groups).set(updateGroupDto).where((0, _drizzleorm.eq)(_groupentity.groups.id, id)).returning();
    }
    async findAll() {
        return this.drizzle.db.select().from(_groupentity.groups);
    }
    async findOne(id) {
        return this.drizzle.db.select().from(_groupentity.groups).where((0, _drizzleorm.eq)(_groupentity.groups.id, id));
    }
    async delete(id) {
        return this.drizzle.db.delete(_groupentity.groups).where((0, _drizzleorm.eq)(_groupentity.groups.id, id)).returning();
    }
    async addQuestionToGroup(id, questionId) {
        return this.drizzle.db.insert(_groupentity.questionGroups).values({
            groupId: id,
            questionId
        }).returning();
    }
    constructor(drizzle){
        this.drizzle = drizzle;
    }
};
GroupsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _databaseservice.DatabaseService === "undefined" ? Object : _databaseservice.DatabaseService
    ])
], GroupsService);

//# sourceMappingURL=groups.service.js.map