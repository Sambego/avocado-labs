import { Injectable, HttpService } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class ZoomService {
  constructor(
    private readonly jwtService: JwtService,
    private httpService: HttpService,
  ) {}

  private _accessToken: string;
  private generateAccessToken(): string {
    return this.jwtService.sign(
      {},
      {
        expiresIn: 90 * 60,
        issuer: process.env.ZOOM_ISSUER,
      },
    );
  }

  public get accessToken() {
    if (!this._accessToken) {
      this._accessToken = this.generateAccessToken();
      return this._accessToken;
    }

    try {
      this.jwtService.verify(this._accessToken);
      return this._accessToken;
    } catch (error) {
      if ((error.name = 'TokenExpiredError')) {
        this._accessToken = this.generateAccessToken();
        return this._accessToken;
      }

      console.error(
        'Error: Something went wrong fetching the latest zoom access token.\n',
        error.message,
      );
    }
  }

  public addRegistrant(registrant, webinar) {
    const url = `https://api.zoom.us/v2/webinars/${webinar}/registrants`;
    const headers = {
      'content-type': 'application/json',
      authorization: `Bearer ${this.accessToken}`,
    };
    return this.httpService
      .post(url, JSON.stringify(registrant), {
        headers,
      })
      .toPromise();
  }

  public getRegistrants(webinar) {
    const url = `https://api.zoom.us/v2/webinars/${webinar}/registrants`;
    const headers = {
      'content-type': 'application/json',
      authorization: `Bearer ${this.accessToken}`,
    };

    return this.httpService
      .get(url, {
        headers,
        params: {
          page_size: 100,
        },
      })
      .toPromise();
  }

  public getWebinar(webinar) {
    const url = `https://api.zoom.us/v2/webinars/${webinar}`;
    const headers = {
      'content-type': 'application/json',
      authorization: `Bearer ${this.accessToken}`,
    };

    return this.httpService
      .get(url, {
        headers,
      })
      .toPromise();
  }
}
