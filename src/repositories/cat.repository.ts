import { Injectable } from '@nestjs/common';
import { Cat } from 'src/models/cat.model';

@Injectable()
export class CatRepository {
  private readonly cats: Cat[] = [];

  getAll(): Cat[] {
    return this.cats;
  }

  add(cat: Cat): void {
    this.cats.push(cat);
  }
}
