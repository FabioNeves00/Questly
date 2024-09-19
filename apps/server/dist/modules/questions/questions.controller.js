"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "QuestionsController", {
    enumerable: true,
    get: function() {
        return QuestionsController;
    }
});
const _common = require("@nestjs/common");
const _questionsservice = require("./questions.service");
const _createquestiondto = require("./dto/create-question.dto");
const _updatequestiondto = require("./dto/update-question.dto");
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
let QuestionsController = class QuestionsController {
    create(createQuestionDto) {
        return this.questionsService.create(createQuestionDto);
    }
    findAll() {
        return this.questionsService.findAll();
    }
    findOne(id) {
        return this.questionsService.findOne(id);
    }
    update(id, updateQuestionDto) {
        return this.questionsService.update(id, updateQuestionDto);
    }
    remove(id) {
        return this.questionsService.delete(id);
    }
    constructor(questionsService){
        this.questionsService = questionsService;
    }
};
_ts_decorate([
    (0, _common.Post)(),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createquestiondto.CreateQuestionDto === "undefined" ? Object : _createquestiondto.CreateQuestionDto
    ]),
    _ts_metadata("design:returntype", void 0)
], QuestionsController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], QuestionsController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], QuestionsController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updatequestiondto.UpdateQuestionDto === "undefined" ? Object : _updatequestiondto.UpdateQuestionDto
    ]),
    _ts_metadata("design:returntype", void 0)
], QuestionsController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], QuestionsController.prototype, "remove", null);
QuestionsController = _ts_decorate([
    (0, _common.Controller)('questions'),
    (0, _swagger.ApiTags)('questions'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _questionsservice.QuestionsService === "undefined" ? Object : _questionsservice.QuestionsService
    ])
], QuestionsController);

//# sourceMappingURL=questions.controller.js.map