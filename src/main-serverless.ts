import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Handler } from 'aws-lambda';
import serverlessExpress from '@codegenie/serverless-express';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler = async (event: any, context: any, callback: any) => {
  server = server ?? (await bootstrap());
  const result = await server(event, context, callback);
  return result;
};
