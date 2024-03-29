import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { isValidationOptions } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      transform: true,
      stopAtFirstError: true
    })
  );
  await app.listen(3000);
}
bootstrap();
