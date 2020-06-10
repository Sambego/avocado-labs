import { AuthenticationService } from './authentication.service';
import { Controller, Param, Post, Body } from '@nestjs/common';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('meta/:userId')
  async addAttendee(@Param('userId') userId: string, @Body() meta: any) {
    try {
      const response = await this.authenticationService.addMetaDataToUser(
        userId,
        meta,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
