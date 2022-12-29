import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-fcontrol',
  templateUrl: './input-fcontrol.component.html',
  styleUrls: ['./input-fcontrol.component.scss']
})
export class InputFcontrolComponent {
  // Props

  // ngModelOptions
  @Input() standalone: boolean = true;

  // label
  @Input() text: string = 'Label here';

  // common
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() placeholder?: string = 'Some placeholder...';

  // number
  @Input() min?: number = null;
  @Input() max?: number = null;
  @Input() step?: number = null;

  // multipart
  @Input() accept?: boolean = null;
  @Input() multiple?: boolean = null;

  // required
  @Input() required?: boolean = false;

  // Data

  value: string = '';

  // Computed

  isNumber(): boolean {
    return this.type === "number";
  }

  isMultipart(): boolean {
    return this.type === "file"
  }

  // Methods

}
