import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { DataService } from './data.service';
import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
  ],
  providers: [
    DataService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
