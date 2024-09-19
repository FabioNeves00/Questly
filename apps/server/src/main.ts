import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from '@common/env/env.service';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as  compression from '@fastify/compress';
import * as  cookie from '@fastify/cookie';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const logger = new Logger('NestApplication');
  const env = app.get(EnvService);
  const port = env.get<number>('PORT') || 3000

  // app.enableCors({
  //   origin: '*',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  // });

  await app.register(compression);
  await app.register(cookie, {
    secret: env.get('COOKIE_SECRET'),
  });


  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // Swagger
  const document = new DocumentBuilder()
    .setTitle('Questly API')
    .setDescription('The Questly API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const documentSwagger = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup('docs', app, documentSwagger);

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
