import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uploads } from './entities/uploads.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1',
      database: 'hci-project',
      entities: [Uploads],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Uploads])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
