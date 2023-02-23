import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.Port
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  // berfungsi seperti console log
  Logger.log(`jalan di localhost:${port}`, 'Running Port')
}
bootstrap();
