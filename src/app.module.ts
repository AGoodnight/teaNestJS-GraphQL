import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { TeaResolver } from './modules/tea/tea.resolver';
import { TeaModule } from './modules/tea/tea.module';

@Module({
  imports: [
    TeaModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/tea')
  ],
  providers: [AppService],
})
export class AppModule {}
