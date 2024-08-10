import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/models/cat.model';
import { CatRepository } from 'src/repositories/cat.repository';
import { Repository } from 'typeorm';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}

  public async getAll() {
    return await this.catRepository.find();
  }

  public async add(cat: Cat) {
    await this.catRepository.insert(cat);
  }
}
