"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "envSchema", {
    enumerable: true,
    get: function() {
        return envSchema;
    }
});
const _zod = require("zod");
const envSchema = _zod.z.object({
    NODE_ENV: _zod.z.enum([
        'development',
        'production',
        'test'
    ]),
    PORT: _zod.z.string().transform((v)=>parseInt(v)),
    DATABASE_NAME: _zod.z.string(),
    DATABASE_USER: _zod.z.string(),
    DATABASE_PASSWORD: _zod.z.string(),
    DATABASE_HOST: _zod.z.string(),
    DATABASE_PORT: _zod.z.string().transform((v)=>parseInt(v)),
    COOKIE_SECRET: _zod.z.string(),
    JWT_SECRET: _zod.z.string()
});

//# sourceMappingURL=env.schema.js.map