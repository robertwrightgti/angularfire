import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: Observable<any[]>;

  constructor(private af: AngularFirestore) {
    this.items = this.af.collection('connected').valueChanges();
    // this.af.collection(`connected`).valueChanges()
    //   .subscribe(val => { console.log(val) })
  }
}
