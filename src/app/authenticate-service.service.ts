import { Injectable } from "@angular/core";
import { ApiToken } from "./models/model-common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GuestSessionResponse } from "./models/model-response";

@Injectable({
  providedIn: "root",
})
export class AuthenticateServiceService {
  private endPoint =
    "https://api.themoviedb.org/3/authentication/guest_session/new?";

  constructor(apiToken: ApiToken, private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  getGuestSession(apiToken: ApiToken): Observable<GuestSessionResponse> {
    return this.httpClient.get<GuestSessionResponse>(
      `${this.endPoint}api_key=${apiToken.api_key}`
    );
  }
}
