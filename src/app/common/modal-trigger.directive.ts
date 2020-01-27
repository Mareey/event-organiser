import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './j-query.service';


@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit{
  @Input('appModalTrigger') modalId: string;

  private el: HTMLElement;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e =>{
      this.$(`#${this.modalId}`).modal({});
    });
  }
}

// import { TestBed } from '@angular/core/testing';

// import { ToastrService } from './toastr.service';

// describe('ToastrService', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));

//   it('should be created', () => {
//     const service: ToastrService = TestBed.get(ToastrService);
//     expect(service).toBeTruthy();
//   });
// });

