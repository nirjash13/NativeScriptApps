import { Component } from "@angular/core";


@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My Apple" class="action-bar"></ActionBar>
    <Image src="~/images/notebook.jpg"></Image>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin; animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class AppComponent {
  constructor(){
    var obj = {
      type: "Notebook",
      purpose: "Sell"
    }
    console.log("Hello World");
    console.dump(obj);
  }
}