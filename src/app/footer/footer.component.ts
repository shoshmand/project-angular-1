import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
membershipForm:FormGroup | any;
  constructor(private formbuilder:FormBuilder) { }
  ngOnInit(): void {
    this.membershipForm=this.formbuilder.group(
      {
        'membership':['',Validators.required]
      }
    )
  }

  addEmail(){
    console.log(this.membershipForm)
  }

}
