import { NgClass } from '@angular/common';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  standalone: true,
  imports: [TabComponent, NgClass],
  templateUrl: './tabbed-pane.component.html',
  styleUrl: './tabbed-pane.component.scss'
})
export class TabbedPaneComponent implements OnInit, AfterContentInit {
  tabs: Array<TabComponent> = [];
  activeTab: TabComponent | undefined;

  constructor() {}

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      // activate first tab
      this.activate(this.tabs[0]);
    }
  }

  ngOnInit(): void {}

  register(tab: TabComponent): void {
    this.tabs.push(tab);
  }

  activate(active: TabComponent): void {
    for (const tab of this.tabs) {
      tab.visible.set(tab === active);
    }
    this.activeTab = active;
  }
}
