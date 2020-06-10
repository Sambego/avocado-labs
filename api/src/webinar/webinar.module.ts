import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { WebinarService } from './webinar.service';
import { WebinarController } from './webinar.controller';
import { ZoomModule } from '../zoom/zoom.module';
import { AuthenticationMiddleware } from '../authentication/authentication.middleware';

@Module({
  imports: [ZoomModule],
  providers: [WebinarService],
  controllers: [WebinarController],
})
export class WebinarModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.GET, path: '/webinar/:webinarId' },
      { method: RequestMethod.POST, path: '/webinar/:webinarId' },
      {
        method: RequestMethod.GET,
        path: '/webinar/:webinarId/attending/:email',
      },
    );
  }
}
