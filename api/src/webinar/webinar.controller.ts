import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { WebinarService } from './webinar.service';
import { Registrant } from '../registrant';

@Controller('webinar')
export class WebinarController {
  constructor(private readonly webinarService: WebinarService) {}

  @Get(':webinarId/')
  async getWebinar(@Param('webinarId') webinarId: string) {
    try {
      const response = await this.webinarService.getWebinar(webinarId);
      return response.data;
    } catch (error) {
      console.log('----', error);
      return error;
    }
  }

  @Post(':webinarId')
  async addAttendee(
    @Param('webinarId') webinarId: string,
    @Body() registrant: Registrant,
  ) {
    try {
      const response = await this.webinarService.addRegistrant(
        registrant,
        webinarId,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  @Get(':webinarId/attending/:email')
  async isRegistrantAttending(
    @Param('webinarId') webinarId: string,
    @Param('email') email: string,
  ) {
    try {
      return await this.webinarService.isRegistrantAttending(
        decodeURIComponent(email),
        webinarId,
      );
    } catch (error) {
      return error;
    }
  }
}
