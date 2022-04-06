import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  say(): string {
    return 'Yeah!!';
  }
}
