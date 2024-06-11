import { Component, OnInit, model } from '@angular/core';
import { TabbedPaneComponent } from '../tabbed-pane/tabbed-pane.component';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent implements OnInit {
  title = model<string>('');
  visible = model(true);

  constructor(pane: TabbedPaneComponent) {
    pane.register(this);
  }

  ngOnInit(): void {}
}
