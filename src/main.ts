import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  // Init .env Config
  dotenv.config();
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000, ()=> {
    console.log("Listen on port 3000!");
  });
}
bootstrap();
