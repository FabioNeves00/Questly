"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateQuestionDto", {
    enumerable: true,
    get: function() {
        return CreateQuestionDto;
    }
});
const _iscuid2decorator = require("../../../common/decorators/is-cuid2/is-cuid2.decorator");
const _swagger = require("@nestjs/swagger");
const _questionentity = require("../entities/question.entity");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateQuestionDto = class CreateQuestionDto {
};
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _iscuid2decorator.IsCuid2)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateQuestionDto.prototype, "userId", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsIn)(_questionentity.questionTypes),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Object)
], CreateQuestionDto.prototype, "questionType", void 0);
_ts_decorate([
    (0, _classvalidator.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 0
    }),
    (0, _classvalidator.Min)(0),
    (0, _classvalidator.IsOptional)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], CreateQuestionDto.prototype, "correctAnswerIndex", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)({
        each: true
    }),
    (0, _classvalidator.IsArray)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Array)
], CreateQuestionDto.prototype, "answers", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateQuestionDto.prototype, "title", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateQuestionDto.prototype, "description", void 0);

//# sourceMappingURL=create-question.dto.js.map