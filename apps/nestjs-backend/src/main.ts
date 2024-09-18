import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from '@common/env/env.service';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import compression from '@fastify/compress';
import cookie from '@fastify/cookie';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const logger = new Logger('NestApplication');
  const env = app.get(EnvService);
  const port = env.get<number>('PORT') || 3000

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const document = new DocumentBuilder()
    .setTitle('Questly API')
    .setDescription('The Questly API description')
    .setVersion('1.0')
    .build();
  const documentSwagger = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup('docs', app, documentSwagger);

  await app.register(compression);
  await app.register(cookie);

  // Express-like middleware
  const fastifyInstance = app.getHttpAdapter().getInstance()
  fastifyInstance
    .addHook('onRequest', async (req, res) => {
      req.socket['encrypted'] = env.get('NODE_ENV') === 'production'
    })
    .decorateReply('setHeader', function (name: string, value: unknown) {
      this.header(name, value)
    })
    .decorateReply('end', function () {
      this.send('')
    })

  await app.listen(port, () => logger.debug(`🚀 App listening on http://localhost:${port}/docs`));
}

bootstrap();
