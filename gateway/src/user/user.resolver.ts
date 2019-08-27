import { Resolver, Args, Query } from "@nestjs/graphql";
import { UserService } from "./user.service";


@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query()
  async accumulate(@Args('data') data: number[]) {
    return this.userService.accumulate(data);
  }
}