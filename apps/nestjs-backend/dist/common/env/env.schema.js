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
    PORT: _zod.z.number().int().min(0).max(65535),
    DATABASE_NAME: _zod.z.string(),
    DATABASE_USER: _zod.z.string(),
    DATABASE_PASSWORD: _zod.z.string(),
    DATABASE_HOST: _zod.z.string(),
    DATABASE_PORT: _zod.z.number().int().min(0).max(65535)
});

//# sourceMappingURL=env.schema.js.map