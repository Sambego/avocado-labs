import { Injectable } from '@nestjs/common';
import { Registrant } from '../registrant';
import { ZoomService } from '../zoom/zoom.service';

@Injectable()
export class WebinarService {
  constructor(private readonly zoomService: ZoomService) {}

  getWebinar(webinar: string) {
    return this.zoomService.getWebinar(webinar);
  }

  addRegistrant(registrant: Registrant, webinar: string) {
    console.log(`Adding attendee to webinar (${webinar}):`, registrant);
    return this.zoomService.addRegistrant(registrant, webinar);
  }

  async isRegistrantAttending(registrantEmail: string, webinar: string) {
    const response: any = await this.zoomService.getRegistrants(webinar);
    const registrants: string[] = response.data.registrants.map(
      registrant => registrant.email,
    );
    const isRegistered: boolean = registrants.includes(registrantEmail);
    console.log(
      `Registrant with email "${registrantEmail}" is registered for webinar ${webinar}:`,
      isRegistered,
    );
    return { isRegistered: isRegistered };
  }
}
