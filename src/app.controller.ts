import { BadRequestException, Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/errors")
  getError(): string {
    throw new BadRequestException("Error ini gess, ini sudah di set di global ya");    
  }
}
