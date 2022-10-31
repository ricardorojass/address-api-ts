import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { msj: 'Hello World', error: '' };
  }
}
