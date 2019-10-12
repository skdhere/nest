import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';

class MemberType {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  member_types: MemberType[];
  member_type: FormControl;
	form: FormGroup;
	submitted: any;
	readonly FILENAME = 'form1-conf.json';

  constructor(
    private _postsService: PostsService,
    private formBuilder: FormBuilder,
    ) {

    this._postsService.getRoomTypes().subscribe((data) => console.log(data) );
    this.member_types = [
      { id: 1, name: 'Owner' },
      { id: 2, name: 'Tenent' },
      { id: 3, name: 'Family Member' }
    ];   

  }

  ngOnInit() {
    this.member_type = this.formBuilder.control(this.member_types[2],
      Validators.required);
    this.form = this.formBuilder.group({
      member_type: this.member_type,    
      name: new FormControl('', Validators.required),
      mobile_number: new FormControl('', Validators.required),
      email_id: new FormControl('', Validators.required),
      room_no: new FormControl('', Validators.required),
    });
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('member_type:', event.value);
  }

  saveData(form) {
    console.log(form);
  }

}
