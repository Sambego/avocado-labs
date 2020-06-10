import { Module } from '@nestjs/common';
import { WebinarModule } from './webinar/webinar.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ZoomModule } from './zoom/zoom.module';

@Module({
  imports: [AuthenticationModule, WebinarModule, ZoomModule],
})
export class AppModule {}
