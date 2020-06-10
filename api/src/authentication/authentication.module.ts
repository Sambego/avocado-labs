import {
  Module,
  HttpModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationMiddleware } from '../authentication/authentication.middleware';

@Module({
  imports: [HttpModule],
  providers: [AuthenticationService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes({
      method: RequestMethod.POST,
      path: '/authentication/meta/:userId',
    });
  }
}
