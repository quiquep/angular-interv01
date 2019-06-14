import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { ListItem } from "./list-item/list-item.component";

@NgModule({
  declarations: [AppComponent, ListComponent, ListItem],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
