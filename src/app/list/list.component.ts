import { Component, Input } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  //@Input() items: Array<any> = [];
  items = [
    { id: 1, name: "Orange", position: "" },
    { id: 2, name: "Apple", position: "" },
    { id: 3, name: "Bannana", position: "" },
    { id: 4, name: "Lemon", position: "" }
  ];

  orderList(item) {
    const { id, action } = item;
    if (action === "up") {
      const index = this.items.indexOf(id);
      let item = this.items[this.items.indexOf(id)];
      item.id += 1;
      this.items.splice(index, 1);
      this.items.push(item);
      this.items.sort((a, b) => {
        return a.id - b.id;
      });
    } else {
    }
  }
}
