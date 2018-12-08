import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-add-awesome',
  templateUrl: './add-awesome.component.html',
  styleUrls: ['./add-awesome.component.css']
})
export class AddAwesomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private awesomeService: AwesomeService) {
  }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      tag: [],
      url: [],
      descriptions: []
    });
  }

  onSubmit() {
    this.awesomeService.addAwesome(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-awesome']).then(function () {
            return alert('Add success !');
          }
        );
      });
  }
}
