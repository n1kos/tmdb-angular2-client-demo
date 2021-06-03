import { Component, OnInit } from "@angular/core";
import { AuthenticateServiceService } from "./authenticate-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  title = "tmdb-angular";
  private api_key = "85204a8cc33baf447559fb6d51b18313";

  guest_id = "";
  constructor(public authenticateService: AuthenticateServiceService) {}

  fetchGuestSession() {
    return this.authenticateService
      .getGuestSession({ api_key: this.api_key })
      .subscribe((data) => {
        console.log(data);

        this.guest_id = data.guest_session_id;
        console.log(this.guest_id);
      });
  }

  ngOnInit() {
    this.fetchGuestSession();
  }
}
