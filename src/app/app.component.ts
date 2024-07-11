import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DynamicHooksService } from 'ngx-dynamic-hooks';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('textElement') private textElement: ElementRef|null = null;

  constructor(private dynamicHooksService: DynamicHooksService) {
  }

  ngAfterViewInit() {
    const content = 'Load a component here: <app-example></app-example>';
    this.dynamicHooksService.parse(content).subscribe(result => {
      // As an example, could manually insert the parsed content where you need it
      this.textElement?.nativeElement.appendChild(result.element);
    })
  }
}