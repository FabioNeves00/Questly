"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AssignmentsService", {
    enumerable: true,
    get: function() {
        return AssignmentsService;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AssignmentsService = class AssignmentsService {
    create(createAssignmentDto) {
        return 'This action adds a new assignment';
    }
    findAll() {
        return `This action returns all assignments`;
    }
    findOne(id) {
        return `This action returns a #${id} assignment`;
    }
    update(id, updateAssignmentDto) {
        return `This action updates a #${id} assignment`;
    }
    remove(id) {
        return `This action removes a #${id} assignment`;
    }
};
AssignmentsService = _ts_decorate([
    (0, _common.Injectable)()
], AssignmentsService);

//# sourceMappingURL=assignments.service.js.map