import { Component, OnInit } from '@angular/core';
import {Awesome} from '../model/awesome.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AwesomeService} from '../awesome.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-awesome',
  templateUrl: './edit-awesome.component.html',
  styleUrls: ['./edit-awesome.component.css']
})
export class EditAwesomeComponent implements OnInit {

  awesome: Awesome;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private awesomeService: AwesomeService) { }

  ngOnInit() {
    const awesomeId = localStorage.getItem('editAwesomeId');
    if (!awesomeId) {
      alert('Invalid action.');
      this.router.navigate(['list-awesome']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      tag: [],
      url: [],
      descriptions: []
    });
    this.awesomeService.getAwesomeById(awesomeId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.awesomeService.editAwesome(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-awesome']);
        },
        error => {
          alert(error);
        });
  }

}
