import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MyserviceService } from "src/app/shared/myservice.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
  student;
  constructor(
    private _route: ActivatedRoute,
    private service: MyserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get("id");

    this.service.getSingleStudent(id).subscribe((res) => {
      this.student = res;
    });
  }

  onEdit(id) {
    this.router.navigate(["/update-student", id]);
  }
  onDelete(id) {
    this.service.deleteStudent(id).subscribe((res) => {
      this.router.navigate(["/home"]);
    });
  }
}
