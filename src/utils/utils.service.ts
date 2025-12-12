import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  getServerDateTime() {
    return {
      serverDateTime: new Date(),
    };
  }
}
