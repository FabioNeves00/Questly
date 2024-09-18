"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AssignmentsModule", {
    enumerable: true,
    get: function() {
        return AssignmentsModule;
    }
});
const _common = require("@nestjs/common");
const _assignmentsservice = require("./assignments.service");
const _assignmentscontroller = require("./assignments.controller");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AssignmentsModule = class AssignmentsModule {
};
AssignmentsModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _assignmentscontroller.AssignmentsController
        ],
        providers: [
            _assignmentsservice.AssignmentsService
        ]
    })
], AssignmentsModule);

//# sourceMappingURL=assignments.module.js.map