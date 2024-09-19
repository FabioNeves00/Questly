"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _envservice = require("./common/env/env.service");
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _platformfastify = require("@nestjs/platform-fastify");
const _compress = /*#__PURE__*/ _interop_require_wildcard(require("@fastify/compress"));
const _cookie = /*#__PURE__*/ _interop_require_wildcard(require("@fastify/cookie"));
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
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule, new _platformfastify.FastifyAdapter());
    const logger = new _common.Logger('NestApplication');
    const env = app.get(_envservice.EnvService);
    const port = env.get('PORT') || 3000;
    // app.enableCors({
    //   origin: '*',
    //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //   preflightContinue: false,
    //   optionsSuccessStatus: 204,
    // });
    await app.register(_compress);
    await app.register(_cookie, {
        secret: env.get('COOKIE_SECRET')
    });
    app.useGlobalPipes(new _common.ValidationPipe({
        transform: true
    }));
    // Swagger
    const document = new _swagger.DocumentBuilder().setTitle('Questly API').setDescription('The Questly API description').setVersion('1.0').addBearerAuth().build();
    const documentSwagger = _swagger.SwaggerModule.createDocument(app, document);
    _swagger.SwaggerModule.setup('docs', app, documentSwagger);
    // Express-like middleware
    const fastifyInstance = app.getHttpAdapter().getInstance();
    fastifyInstance.addHook('onRequest', async (req, res)=>{
        req.socket['encrypted'] = env.get('NODE_ENV') === 'production';
    }).decorateReply('setHeader', function(name, value) {
        this.header(name, value);
    }).decorateReply('end', function() {
        this.send('');
    });
    await app.listen(port, ()=>logger.debug(`🚀 App listening on http://localhost:${port}/docs`));
}
bootstrap();

//# sourceMappingURL=main.js.map