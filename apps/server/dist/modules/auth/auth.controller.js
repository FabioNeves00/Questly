"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _common = require("@nestjs/common");
const _authservice = require("./auth.service");
const _credentialsignindto = require("./dto/credential-sign-in.dto");
const _credentialsignupdto = require("./dto/credential-sign-up.dto");
const _fastifywithcookie = require("../../common/types/fastify-with-cookie");
const _fastify = require("fastify");
const _constants = require("../../common/constants");
const _ispublicdecorator = require("../../common/decorators/is-public/is-public.decorator");
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
let AuthController = class AuthController {
    //sign in
    async signInWithEmail(body, res) {
        const { user, token } = await this.authService.signIn(body.email, body.password);
        res.setCookie(_constants.DEFAULT_COOKIE_NAME, token, {
            httpOnly: true,
            secure: true,
            signed: true,
            domain: 'localhost',
            path: '/'
        });
        return res.send(user);
    }
    async signUpWithEmail(body, res) {
        const { user, token } = await this.authService.signUp(body);
        res.setCookie(_constants.DEFAULT_COOKIE_NAME, token, {
            httpOnly: true,
            secure: true,
            signed: true,
            domain: 'localhost',
            path: '/'
        });
        return res.send(user);
    }
    // @Post('/local/sign-out')
    // async signOut() {
    //   return this.authService.signOut();
    // }
    //
    async getSession(req) {
        return await this.authService.getUserFromTokenInRequest(req);
    }
    constructor(authService){
        this.authService = authService;
    }
};
_ts_decorate([
    (0, _ispublicdecorator.Public)(),
    (0, _common.Post)('/local/sign-in'),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Res)({
        passthrough: true
    })),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _credentialsignindto.SignInDto === "undefined" ? Object : _credentialsignindto.SignInDto,
        typeof _fastify.FastifyReply === "undefined" ? Object : _fastify.FastifyReply
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "signInWithEmail", null);
_ts_decorate([
    (0, _ispublicdecorator.Public)(),
    (0, _common.Post)('/local/sign-up'),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Res)({
        passthrough: true
    })),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _credentialsignupdto.SignUpDto === "undefined" ? Object : _credentialsignupdto.SignUpDto,
        typeof _fastify.FastifyReply === "undefined" ? Object : _fastify.FastifyReply
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "signUpWithEmail", null);
_ts_decorate([
    (0, _common.Get)('/local/session'),
    _ts_param(0, (0, _common.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _fastifywithcookie.FastifyRequestWithCookie === "undefined" ? Object : _fastifywithcookie.FastifyRequestWithCookie
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "getSession", null);
AuthController = _ts_decorate([
    (0, _common.Controller)('auth'),
    (0, _swagger.ApiTags)('auth'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService
    ])
], AuthController);

//# sourceMappingURL=auth.controller.js.map