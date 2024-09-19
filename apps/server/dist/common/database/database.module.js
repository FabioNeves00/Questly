"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DatabaseModule", {
    enumerable: true,
    get: function() {
        return DatabaseModule;
    }
});
const _common = require("@nestjs/common");
const _databaseservice = require("./database.service");
const _envservice = require("../env/env.service");
const _postgres = /*#__PURE__*/ _interop_require_default(require("postgres"));
const _postgresjs = require("drizzle-orm/postgres-js");
const _schema = /*#__PURE__*/ _interop_require_wildcard(require("./schema"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = _ts_decorate([
    (0, _common.Module)({
        providers: [
            _databaseservice.DatabaseService,
            {
                provide: 'DATABASE_CONNECTION',
                inject: [
                    _envservice.EnvService
                ],
                useFactory: async (envService)=>{
                    try {
                        console.log("envService", {
                            DATABASE_NAME: envService.get('DATABASE_NAME'),
                            DATABASE_USER: envService.get('DATABASE_USER'),
                            DATABASE_PASSWORD: envService.get('DATABASE_PASSWORD'),
                            DATABASE_HOST: envService.get('DATABASE_HOST'),
                            DATABASE_PORT: envService.get('DATABASE_PORT')
                        });
                        const conn = (0, _postgres.default)({
                            database: envService.get('DATABASE_NAME'),
                            user: envService.get('DATABASE_USER'),
                            password: envService.get('DATABASE_PASSWORD'),
                            host: envService.get('DATABASE_HOST'),
                            port: envService.get('DATABASE_PORT')
                        });
                        console.log("conn", conn);
                        return (0, _postgresjs.drizzle)(conn, {
                            schema: _schema
                        });
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        ],
        exports: [
            _databaseservice.DatabaseService
        ]
    })
], DatabaseModule);

//# sourceMappingURL=database.module.js.map