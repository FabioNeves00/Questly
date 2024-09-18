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
        return this.drizzle.db.insert(_userentity.users).values(createUserDto);
    }
    async findAll() {
        return this.drizzle.db.select().from(_userentity.users);
    }
    async findOne(id) {
        return this.drizzle.db.select().from(_userentity.users).where((0, _drizzleorm.eq)(_userentity.users.id, id));
    }
    async update(id, updateUserDto) {
        return this.drizzle.db.update(_userentity.users).set(updateUserDto).where((0, _drizzleorm.eq)(_userentity.users.id, id));
    }
    async remove(id) {
        return this.drizzle.db.delete(_userentity.users).where((0, _drizzleorm.eq)(_userentity.users.id, id));
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