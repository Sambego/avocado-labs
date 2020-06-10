import { Module, HttpModule } from '@nestjs/common';
import { ZoomService } from './zoom.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({ secret: process.env.ZOOM_SECRET }),
    HttpModule,
  ],
  providers: [ZoomService],
  exports: [ZoomService],
})
export class ZoomModule {}
