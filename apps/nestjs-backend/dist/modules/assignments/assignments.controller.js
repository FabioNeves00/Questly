"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AssignmentsController", {
    enumerable: true,
    get: function() {
        return AssignmentsController;
    }
});
const _common = require("@nestjs/common");
const _assignmentsservice = require("./assignments.service");
const _createassignmentdto = require("./dto/create-assignment.dto");
const _updateassignmentdto = require("./dto/update-assignment.dto");
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
let AssignmentsController = class AssignmentsController {
    create(createAssignmentDto) {
        return this.assignmentsService.create(createAssignmentDto);
    }
    findAll() {
        return this.assignmentsService.findAll();
    }
    findOne(id) {
        return this.assignmentsService.findOne(+id);
    }
    update(id, updateAssignmentDto) {
        return this.assignmentsService.update(+id, updateAssignmentDto);
    }
    remove(id) {
        return this.assignmentsService.remove(+id);
    }
    constructor(assignmentsService){
        this.assignmentsService = assignmentsService;
    }
};
_ts_decorate([
    (0, _common.Post)(),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createassignmentdto.CreateAssignmentDto === "undefined" ? Object : _createassignmentdto.CreateAssignmentDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AssignmentsController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], AssignmentsController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], AssignmentsController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updateassignmentdto.UpdateAssignmentDto === "undefined" ? Object : _updateassignmentdto.UpdateAssignmentDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AssignmentsController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], AssignmentsController.prototype, "remove", null);
AssignmentsController = _ts_decorate([
    (0, _common.Controller)('assignments'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _assignmentsservice.AssignmentsService === "undefined" ? Object : _assignmentsservice.AssignmentsService
    ])
], AssignmentsController);

//# sourceMappingURL=assignments.controller.js.map