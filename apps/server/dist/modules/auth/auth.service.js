"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: function() {
        return AuthService;
    }
});
const _common = require("@nestjs/common");
const _usersservice = require("../users/users.service");
const _argon2 = require("argon2");
const _jwt = require("@nestjs/jwt");
const _constants = require("../../common/constants");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let AuthService = class AuthService {
    async validateUser(email, password) {
        const user = await this.usersService.findOneByEmail(email);
        if (user.length === 0) throw new _common.NotFoundException('User not found');
        const matchPassword = await (0, _argon2.verify)(user[0].password, password);
        if (!matchPassword) throw new _common.NotFoundException('Invalid credentials');
        return user;
    }
    async signUp(signUpDto) {
        const user = await this.usersService.findOneByEmail(signUpDto.email);
        if (user.length > 0) throw new _common.BadRequestException('Email already been used');
        const hashedPassword = await (0, _argon2.hash)(signUpDto.password);
        const newUser = await this.usersService.create({
            ...signUpDto,
            password: hashedPassword
        });
        const token = this.generateToken({
            email: newUser[0].email,
            sub: newUser[0].id
        });
        return {
            user: newUser,
            token
        };
    }
    async signIn(email, password) {
        const user = await this.validateUser(email, password);
        const token = this.generateToken({
            email: user[0].email,
            sub: user[0].id
        });
        delete user[0].password;
        return {
            user,
            token
        };
    }
    async getUserFromTokenInRequest(request) {
        const isInHeader = request.headers.authorization !== undefined;
        const isInCookie = request.cookies[_constants.DEFAULT_COOKIE_NAME] !== undefined;
        if (!isInHeader && !isInCookie) {
            throw new _common.NotFoundException('No session found');
        }
        const token = isInHeader ? request.headers.authorization.replace("Bearer", "").trim() : request.cookies[_constants.DEFAULT_COOKIE_NAME];
        const replacedToken = token.split(".");
        replacedToken.pop();
        const joinedToken = replacedToken.join(".");
        return this.jwtService.decode(joinedToken);
    }
    async verifySessionInRequest(request) {
        const isInHeader = request.headers.authorization !== undefined;
        const isInCookie = request.cookies[_constants.DEFAULT_COOKIE_NAME] !== undefined;
        if (!isInHeader && !isInCookie) {
            throw new _common.NotFoundException('No session found');
        }
        const token = isInHeader ? request.headers.authorization.replace("Bearer", "").trim() : request.cookies[_constants.DEFAULT_COOKIE_NAME];
        const replacedToken = token.split(".");
        replacedToken.pop();
        const joinedToken = replacedToken.join(".");
        return this.jwtService.verify(joinedToken);
    }
    generateToken(user) {
        return this.jwtService.sign(user);
    }
    constructor(usersService, jwtService){
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
};
AuthService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _usersservice.UsersService === "undefined" ? Object : _usersservice.UsersService,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService
    ])
], AuthService);

//# sourceMappingURL=auth.service.js.map