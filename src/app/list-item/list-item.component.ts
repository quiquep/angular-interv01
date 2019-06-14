import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})
export class ListItem {
  @Input() item = {};
  @Output() click: EventEmitter = new EventEmitter();

  up() {
    this.click.emit("up");
  }

  down() {
    this.click.emit("down");
  }
}
