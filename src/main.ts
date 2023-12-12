import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilters } from './common/filters/http-exception.filters';
import { InterceptorTimeOut } from './common/interceptor/interceptor.timeout';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionFilters());
  app.useGlobalInterceptors(new InterceptorTimeOut());
  await app.listen(3000);
}
bootstrap();
