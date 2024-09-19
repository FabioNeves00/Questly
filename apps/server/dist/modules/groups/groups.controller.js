"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GroupsController", {
    enumerable: true,
    get: function() {
        return GroupsController;
    }
});
const _common = require("@nestjs/common");
const _groupsservice = require("./groups.service");
const _creategroupdto = require("./dto/create-group.dto");
const _updategroupdto = require("./dto/update-group.dto");
const _swagger = require("@nestjs/swagger");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let GroupsController = class GroupsController {
    create(createGroupDto) {
        return this.groupsService.create(createGroupDto);
    }
    findAll() {
        return this.groupsService.findAll();
    }
    findOne(id) {
        return this.groupsService.findOne(id);
    }
    update(id, updateGroupDto) {
        return this.groupsService.update(id, updateGroupDto);
    }
    remove(id) {
        return this.groupsService.delete(id);
    }
    addQuestionToGroup(id, questionId) {
        return this.groupsService.addQuestionToGroup(id, questionId);
    }
    constructor(groupsService){
        this.groupsService = groupsService;
    }
};
_ts_decorate([
    (0, _common.Post)(),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _creategroupdto.CreateGroupDto === "undefined" ? Object : _creategroupdto.CreateGroupDto
    ]),
    _ts_metadata("design:returntype", void 0)
], GroupsController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], GroupsController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], GroupsController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updategroupdto.UpdateGroupDto === "undefined" ? Object : _updategroupdto.UpdateGroupDto
    ]),
    _ts_metadata("design:returntype", void 0)
], GroupsController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], GroupsController.prototype, "remove", null);
_ts_decorate([
    (0, _common.Post)('add-question-to-group/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Query)('question')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], GroupsController.prototype, "addQuestionToGroup", null);
GroupsController = _ts_decorate([
    (0, _common.Controller)('groups'),
    (0, _swagger.ApiTags)('groups'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _groupsservice.GroupsService === "undefined" ? Object : _groupsservice.GroupsService
    ])
], GroupsController);

//# sourceMappingURL=groups.controller.js.map