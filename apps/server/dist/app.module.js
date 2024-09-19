"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _usersmodule = require("./modules/users/users.module");
const _questionsmodule = require("./modules/questions/questions.module");
const _groupsmodule = require("./modules/groups/groups.module");
const _assignmentsmodule = require("./modules/assignments/assignments.module");
const _authmodule = require("./modules/auth/auth.module");
const _envmodule = require("./common/env/env.module");
const _core = require("@nestjs/core");
const _sessionguardguard = require("./common/guards/session-guard/session-guard.guard");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _usersmodule.UsersModule,
            _questionsmodule.QuestionsModule,
            _groupsmodule.GroupsModule,
            _assignmentsmodule.AssignmentsModule,
            _authmodule.AuthModule,
            _envmodule.EnvModule
        ],
        providers: [
            {
                provide: _core.APP_GUARD,
                useClass: _sessionguardguard.SessionGuard
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map