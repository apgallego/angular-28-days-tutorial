import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  name!: string;
  departments: string[] = [];

  constructor(private readonly fb: FormBuilder, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['departments'];
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name']
      }
    );
    this.contactForm = this.initForm();
    // this.onPatchValue();
    // this.onSetValue();
  }

  onPatchValue(): void{
    //this makes possible to store data on the properties we write.
    this.contactForm.patchValue({ name: 'Alfre' })
  }
  
  onSetValue(): void{
    //this works in the same way but requires all the different properties of the object.
    //(if executed like this, an error will be shown in the console)
    this.contactForm.setValue({ comment: 'Hola mundo' })
  }

  onSubmit(): void{
    console.log('Form -> ');
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]],
    })
  }
}
