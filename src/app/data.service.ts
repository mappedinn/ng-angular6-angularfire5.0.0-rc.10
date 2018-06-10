import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

import { Subject } from 'rxjs';

// import {IExercice} from './interfaces';

@Injectable()
export class DataService {

  availableExercices: any[];
  availableExercicesChanged = new Subject<any[]>();

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  fetchAvailableExercices() {
    this.db.collection('availablesExercices')
    .snapshotChanges()
    .pipe(map( docArray => {
      return docArray.map( doc => {
        return(
        //   {
        //   id: doc.payload.doc.id,
        //   name: doc.payload.doc.data().name,
        //   duration: doc.payload.doc.data().duration,
        //   calories: doc.payload.doc.data().calories,
        // }
        doc
      );
      });
    }))
    .subscribe(exercices => {
      this.availableExercices = exercices;
      this.availableExercicesChanged.next([...this.availableExercices]);
    });
  }
}
