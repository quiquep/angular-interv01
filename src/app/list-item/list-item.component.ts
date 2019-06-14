import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})
export class ListItem {
  @Input() item = {};
  @Output() onClickItem: EventEmitter = new EventEmitter();

  up(id) {
    this.onClickItem.emit({ action: "up", id });
  }

  down(id) {
    this.onClickItem.emit({ action: "down", id });
  }
}
