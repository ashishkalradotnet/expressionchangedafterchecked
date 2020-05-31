import { Component, NgZone } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  text = "Original text in parent component";
  _time: Date;

  get time() {
    return this._time;
  }

  constructor(zone: NgZone) {
    this._time = new Date(Date.now());
    zone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = new Date(Date.now());
      }, 1);
    });
  }
}
