"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersService", {
    enumerable: true,
    get: function() {
        return UsersService;
    }
});
const _common = require("@nestjs/common");
const _databaseservice = require("../../common/database/database.service");
const _userentity = require("./entities/user.entity");
const _drizzleorm = require("drizzle-orm");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UsersService = class UsersService {
    async create(createUserDto) {
        return await this.drizzle.db.insert(_userentity.users).values(createUserDto).returning({
            id: _userentity.users.id,
            email: _userentity.users.email,
            avatar: _userentity.users.avatar,
            firstName: _userentity.users.firstName,
            lastName: _userentity.users.lastName
        });
    }
    async findAll() {
        return await this.drizzle.db.select().from(_userentity.users);
    }
    async findOne(id) {
        return await this.drizzle.db.select().from(_userentity.users).where((0, _drizzleorm.eq)(_userentity.users.id, id));
    }
    async findOneByEmail(email) {
        return await this.drizzle.db.select().from(_userentity.users).where((0, _drizzleorm.eq)(_userentity.users.email, email));
    }
    async update(id, updateUserDto) {
        return await this.drizzle.db.update(_userentity.users).set(updateUserDto).where((0, _drizzleorm.eq)(_userentity.users.id, id)).returning();
    }
    async remove(id) {
        return await this.drizzle.db.delete(_userentity.users).where((0, _drizzleorm.eq)(_userentity.users.id, id)).returning();
    }
    constructor(drizzle){
        this.drizzle = drizzle;
    }
};
UsersService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _databaseservice.DatabaseService === "undefined" ? Object : _databaseservice.DatabaseService
    ])
], UsersService);

//# sourceMappingURL=users.service.js.map