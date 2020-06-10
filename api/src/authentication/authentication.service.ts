import { Injectable } from '@nestjs/common';
import { ManagementClient } from 'auth0';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AuthenticationService {
  private managementClient = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_SECRET,
  });

  public addMetaDataToUser(id: string, meta: any) {
    console.log('---', id, meta);
    return this.managementClient.updateUserMetadata({ id }, meta);
  }
}
