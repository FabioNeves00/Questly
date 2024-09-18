import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { EnvService } from "@env";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("NestFactory");
  const env = app.get(EnvService);
  await app.listen(env.get<number>("PORT"), () => {
    logger.debug(
      `🚀 Server ready at http://localhost:${env.get<number>("PORT")}/graphql`,
    );
  });
}
bootstrap();
