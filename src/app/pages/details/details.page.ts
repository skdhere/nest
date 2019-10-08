import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  ports: Port[];
  port: Port;
	form: FormGroup;
	submitted: any;
	readonly FILENAME = 'form1-conf.json';

  constructor() {
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
    ];

    this.form = new FormGroup({});
  }

  ngOnInit() {
    

  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('port:', event.value);
  }

  saveData() {
    console.log('Clicked');
  }

}
