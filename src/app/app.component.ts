import { Component, Input, OnInit } from "@angular/core";
import { AuthenticateServiceService } from "./shared/services/authenticate-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  title = "tmdb-angular";
  private api_key = "fwfwef";

  private guest_id = "";
  constructor(public authenticateService: AuthenticateServiceService) {}

  ngOnInit() {
    // store the guest session details in a service
    this.authenticateService.createGuestSession();
  }
}
