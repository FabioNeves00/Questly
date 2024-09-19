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
    CreateAssignmentDto: function() {
        return CreateAssignmentDto;
    },
    CreateAssignmentGroupDto: function() {
        return CreateAssignmentGroupDto;
    },
    CreateAssignmentQuestionDto: function() {
        return CreateAssignmentQuestionDto;
    }
});
const _swagger = require("@nestjs/swagger");
const _classtransformer = require("class-transformer");
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
let CreateAssignmentQuestionDto = class CreateAssignmentQuestionDto {
};
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsNumber)(),
    _ts_metadata("design:type", Number)
], CreateAssignmentQuestionDto.prototype, "questionId", void 0);
let CreateAssignmentGroupDto = class CreateAssignmentGroupDto {
};
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsNumber)(),
    _ts_metadata("design:type", Number)
], CreateAssignmentGroupDto.prototype, "groupId", void 0);
let CreateAssignmentDto = class CreateAssignmentDto {
};
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateAssignmentDto.prototype, "name", void 0);
_ts_decorate([
    (0, _classvalidator.IsArray)(),
    (0, _classvalidator.ValidateNested)({
        each: true
    }),
    (0, _classtransformer.Type)(()=>CreateAssignmentQuestionDto),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Array)
], CreateAssignmentDto.prototype, "questions", void 0);
_ts_decorate([
    (0, _classvalidator.IsArray)(),
    (0, _classvalidator.ValidateNested)({
        each: true
    }),
    (0, _classtransformer.Type)(()=>CreateAssignmentGroupDto),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Array)
], CreateAssignmentDto.prototype, "groups", void 0);

//# sourceMappingURL=create-assignment.dto.js.map