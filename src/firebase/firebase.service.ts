import { Inject, Injectable } from '@nestjs/common';
import { app, storage } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  #db: FirebaseFirestore.Firestore;
  #collection: FirebaseFirestore.CollectionReference;
  #bucket: storage.Bucket;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
    this.#db = firebaseApp.firestore();
    this.#collection = this.#db.collection('<collection_name>');
    this.#bucket = storage().bucket();
  }
}
