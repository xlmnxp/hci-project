import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { diskStorage } from 'multer';
import { join } from 'path';
import { v4 } from 'uuid';
import { extname } from 'path';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files[]', null, {
      storage: diskStorage({
        destination(req, file, cb) {
          // choose the location to safe the files
          cb(null, join(__dirname, './public/uploads'));
        },
        filename(req, file, cb) {
          // generate random filename and concat it with origin file extension
          cb(null, v4() + extname(file.originalname));
        },
      }),
    }),
  )
  uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    // store the result in database then fetch it and return it as result
    return this.appService.saveFiles(
      files.map(file => {
        // rewrite the path for files to make it correct
        file.path = `uploads/${file.filename}`;
        file.destination = `uploads`;
        return file;
      }),
    );
  }

  @Get('upload/:id')
  getFile(@Param('id') id: string) {
    return this.appService.getFile(id);
  }
}
