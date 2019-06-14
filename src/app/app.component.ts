import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items = [
    { id: 1, name: "Orange", position: "" },
    { id: 2, name: "Apple", position: "" },
    { id: 3, name: "Bannana", position: "" },
    { id: 4, name: "Lemon", position: "" }
  ];
}
