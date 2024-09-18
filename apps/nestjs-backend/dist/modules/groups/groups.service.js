"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GroupsService", {
    enumerable: true,
    get: function() {
        return GroupsService;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let GroupsService = class GroupsService {
    create(createGroupDto) {
        return 'This action adds a new group';
    }
    findAll() {
        return `This action returns all groups`;
    }
    findOne(id) {
        return `This action returns a #${id} group`;
    }
    update(id, updateGroupDto) {
        return `This action updates a #${id} group`;
    }
    remove(id) {
        return `This action removes a #${id} group`;
    }
};
GroupsService = _ts_decorate([
    (0, _common.Injectable)()
], GroupsService);

//# sourceMappingURL=groups.service.js.map