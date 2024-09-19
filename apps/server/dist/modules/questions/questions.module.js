"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "QuestionsModule", {
    enumerable: true,
    get: function() {
        return QuestionsModule;
    }
});
const _common = require("@nestjs/common");
const _questionsservice = require("./questions.service");
const _questionscontroller = require("./questions.controller");
const _databasemodule = require("../../common/database/database.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let QuestionsModule = class QuestionsModule {
};
QuestionsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _databasemodule.DatabaseModule
        ],
        controllers: [
            _questionscontroller.QuestionsController
        ],
        providers: [
            _questionsservice.QuestionsService
        ]
    })
], QuestionsModule);

//# sourceMappingURL=questions.module.js.map