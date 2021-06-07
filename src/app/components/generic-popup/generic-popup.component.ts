import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-generic-popup",
  templateUrl: "./generic-popup.component.html",
  styleUrls: ["./generic-popup.component.sass"],
})
export class GenericPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GenericPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
