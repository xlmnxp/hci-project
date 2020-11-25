import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Uploads } from './entities/uploads.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Uploads)
    private uploadsRepository: Repository<Uploads>,
  ) {}


  async saveFiles(files: Express.Multer.File[]): Promise<Express.Multer.File[]> {
    return this.uploadsRepository.save(files);
  }

  async getFile(id: string): Promise<Uploads> {
    return this.uploadsRepository.findOne(id);
  }
}
