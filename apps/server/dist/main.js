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
const _cookieparser = /*#__PURE__*/ _interop_require_default(require("cookie-parser"));
const _compress = /*#__PURE__*/ _interop_require_default(require("@fastify/compress"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule, new _platformfastify.FastifyAdapter());
    const logger = new _common.Logger('NestApplication');
    const env = app.get(_envservice.EnvService);
    const port = env.get('PORT') || 3000;
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204
    });
    app.use((0, _cookieparser.default)());
    app.useGlobalPipes(new _common.ValidationPipe());
    // Swagger
    const document = new _swagger.DocumentBuilder().setTitle('Questly API').setDescription('The Questly API description').setVersion('1.0').build();
    const documentSwagger = _swagger.SwaggerModule.createDocument(app, document);
    _swagger.SwaggerModule.setup('docs', app, documentSwagger);
    await app.register(_compress.default);
    await app.listen(port, ()=>logger.debug(`🚀 App listening on http://localhost:${port}/docs`));
}
bootstrap();

//# sourceMappingURL=main.js.map