"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IsCuid2", {
    enumerable: true,
    get: function() {
        return IsCuid2;
    }
});
const _cuid2 = require("@paralleldrive/cuid2");
const _classvalidator = require("class-validator");
function IsCuid2() {
    return function(object, propertyName) {
        (0, _classvalidator.registerDecorator)({
            name: "isCuid2",
            target: object.constructor,
            propertyName,
            options: {
                message: "Invalid cuid"
            },
            validator: {
                validate (value) {
                    return (0, _cuid2.isCuid)(value);
                }
            }
        });
    };
}

//# sourceMappingURL=is-cuid2.decorator.js.map