import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // Init .env Config
  dotenv.config();
  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, ()=> {
    console.log("Listen on port 3000!");
  });
}
bootstrap();
