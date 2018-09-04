import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from 'database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  // imports: [
  //   GraphQLModule.forRoot({
  //     typePaths: ['./**/*.graphql'],
  //   }),
  // ],
  imports: [ AuthModule, DatabaseModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}