import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent {
  @Input() headline: string = '';
  @Input() subtext: string = '';
  @Input() buttonText: string = '';

  // CallToActionComponent: Displays a reusable CTA block. Used on Home and About pages.
}
