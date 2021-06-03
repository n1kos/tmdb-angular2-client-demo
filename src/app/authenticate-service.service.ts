import { Inject, Injectable } from "@angular/core";
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
  private api_key: string;
  private GuestSessionSpec: any;
  constructor(
    private httpClient: HttpClient,
    @Inject("api_key") private param: string
  ) {
    this.api_key = this.param;
  }

  httpHeader = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  private _getGuestSession(apiToken: ApiToken): Observable<GuestSessionResponse> {
    return this.httpClient.get<GuestSessionResponse>(
      `${this.endPoint}api_key=${apiToken.api_key}`
    );
  }

  // use this as a wrapper to abstract the _getGuestSession call so the client of this service
  // does not have to know implentation details, ie what kind of parameters are needed
  createGuestSession() {
    console.log("getting it", this.api_key);
    this.GuestSessionSpec = this._getGuestSession({ api_key: this.api_key }).subscribe(
      (data) => {
        console.log(data);
        return data;
      }
    );
  }

  logKey() {
    return this.GuestSessionSpec;
  }
}
