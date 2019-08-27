import { Module, Inject } from '@nestjs/common';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  controllers: [UserController],
  providers: [UserService, UserResolver],
  imports: [ClientsModule.register([
    { name: 'USER_SERVICE', transport: Transport.TCP, options: {
      host: 'user',
      port: 3000
    }},
  ])]
})
export class UserModule {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  async onModuleInit() {
    await this.userClient.connect();
  }
}
