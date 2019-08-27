import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}
  
  async accumulate(data: number[]) {
    const pattern = { cmd: 'sum' };
    return this.userClient.send<number>(pattern, data);
  }
}
