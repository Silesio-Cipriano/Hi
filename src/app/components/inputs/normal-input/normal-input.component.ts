import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-normal-input',
  templateUrl: './normal-input.component.html',
  styleUrls: ['./normal-input.component.css']
})
export class NormalInputComponent {
    @Input() title: string | undefined;
    @Input() type: string  | undefined;
    @Input() placeholder: string  | undefined;
}
