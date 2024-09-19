"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SessionGuard", {
    enumerable: true,
    get: function() {
        return SessionGuard;
    }
});
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _authservice = require("../../../modules/auth/auth.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let SessionGuard = class SessionGuard {
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride('isPublic', [
            context.getHandler(),
            context.getClass()
        ]);
        if (isPublic) return true;
        const request = context.switchToHttp().getRequest();
        request.user = await this.authService.getUserFromTokenInRequest(request);
        return !!await this.authService.verifySessionInRequest(request);
    }
    constructor(authService, reflector){
        this.authService = authService;
        this.reflector = reflector;
    }
};
SessionGuard = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService,
        typeof _core.Reflector === "undefined" ? Object : _core.Reflector
    ])
], SessionGuard);

//# sourceMappingURL=session-guard.guard.js.map