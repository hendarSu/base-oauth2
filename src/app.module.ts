import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseTimeInterceptor } from './common/interceptors/response-time-interceptor';
import { OrmModule } from './libs/orm/orm.module';

@Module({
  imports: [
    OrmModule,
  ],
  controllers: [AppController],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: ResponseTimeInterceptor
  },
    AppService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
