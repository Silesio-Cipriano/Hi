import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: `
    <svg attr.width="{{width}}px" attr.height="{{height}}px" attr.fill="{{fill}}" attr.stroke="{{stroke}}" attr.class="{{class}}">
      <use attr.xlink:href="assets/icons/{{icon}}.svg#{{icon}}"></use>
    </svg>
  `,
})
export class SvgIconComponent implements OnInit {
  @Input() icon!: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() size?: number = 24;
  @Input() fill?: string='black';
  @Input() stroke?: string;
  @Input() class?: string;

  ngOnInit(): void {
    if (!this.width || !this.height) {
      this.width = this.size;
      this.height = this.size;
    }
  }
}