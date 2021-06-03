import { Inject, Injectable } from "@angular/core";
import { ApiToken, RequestTokens } from "../models/model-common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GuestSessionResponse } from "../models/model-response";

@Injectable({
  providedIn: "root",
})
export class AuthenticateServiceService {
  private endPoint =
    "https://api.themoviedb.org/3/authentication/guest_session/new?";
  //private api_key: string;
  private GuestSessionSpec: RequestTokens;
  constructor(
    private httpClient: HttpClient,
    @Inject("api_key") private param: string
  ) {
    //this.api_key = ;
    this.GuestSessionSpec = {
      api_key: param,
      expires_at: new Date("1-1-1"),
      guest_session_id: "",
      success: false,
    };
  }

  httpHeader = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  private _getGuestSession(): Observable<GuestSessionResponse> {
    return this.httpClient.get<GuestSessionResponse>(
      `${this.endPoint}api_key=${this.GuestSessionSpec.api_key}`
    );
  }

  // use this as a wrapper to abstract the _getGuestSession call so the client of this service
  // does not have to know implentation details, ie what kind of parameters are needed
  createGuestSession() {
    console.log("getting it", this.GuestSessionSpec.api_key);
    this._getGuestSession().subscribe((data) => {
      console.log(data);
      (this.GuestSessionSpec.expires_at = data.expires_at),
        (this.GuestSessionSpec.guest_session_id = data.guest_session_id);
      this.GuestSessionSpec.success = data.success;
    });
  }

  logKey() {
    return this.GuestSessionSpec;
  }
}
