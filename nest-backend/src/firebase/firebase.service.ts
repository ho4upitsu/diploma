import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseService {
  private app: admin.app.App;

  constructor(private configService: ConfigService) {
    const firebaseConfig = this.configService.get<string>(
      'FIREBASE_CREDENTIALS',
    );

    if (!firebaseConfig) {
      throw new Error('FIREBASE_CREDENTIALS is not defined');
    }

    let serviceAccount;
    try {
      serviceAccount = JSON.parse(firebaseConfig);
    } catch (error) {
      throw new Error('Failed to parse FIREBASE_CREDENTIALS');
    }

    this.app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  async verifyToken(token: string): Promise<admin.auth.DecodedIdToken> {
    return admin.auth().verifyIdToken(token);
  }

  async createUser(email: string, password: string, username: string) {
    return admin.auth().createUser({
      email,
      password,
      displayName: username,
    });
  }
}
