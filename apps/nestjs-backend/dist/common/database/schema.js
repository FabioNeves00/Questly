"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(require("../../modules/users/entities/user.entity"), exports);
_export_star(require("../../modules/questions/entities/question.entity"), exports);
_export_star(require("../../modules/groups/entities/group.entity"), exports);
_export_star(require("../../modules/assignments/entities/assignment.entity"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}

//# sourceMappingURL=schema.js.map