import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-bg-white',
  templateUrl: './section-bg-white.component.html',
  styleUrls: ['./section-bg-white.component.scss']
})
export class SectionBgWhiteComponent {

  @Input() urlImg:{nombre:string,alt:string}[] = [];

}
