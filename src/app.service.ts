import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Este es mi nuvo proyecto en nestJS :D lorem !';
  }
  nombre(): string{
    return "Joux";
  }
  numero(): number{
    return 10;
  }
  
}
