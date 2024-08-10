import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cat } from 'src/models/cat.model';
import { CatService } from 'src/services/cat.service';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get('/')
  async getAll() {
    return this.catService.getAll();
  }

  @Post('/')
  async add(@Body() cat: Cat) {
    return this.catService.add(cat);
  }
}
