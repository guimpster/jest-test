import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { AccumulateDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@Body() body: AccumulateDTO) {
    return this.userService.accumulate(body.data);
  }
}
