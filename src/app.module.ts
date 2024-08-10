import { Module } from '@nestjs/common';
import { CatController } from './controllers/cat.controller';
import { CatService } from './services/cat.service';
import { CatRepository } from './repositories/cat.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './models/cat.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 3306,
      username: 'root',
      password: 'Password0.',
      database: 'my-db',
      synchronize: true,
      entities: [Cat],
    }),
    TypeOrmModule.forFeature([Cat]),
  ],
  controllers: [CatController],
  providers: [CatService, CatRepository],
})
export class AppModule {}
