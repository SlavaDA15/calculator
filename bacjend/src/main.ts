import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    maxAge: 1000000,
    credentials: true,
    origin: true,
  });
  await app.listen(3000);
}
bootstrap();
