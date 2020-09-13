import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { MyserviceService } from "src/app/shared/myservice.service";
@Component({
  selector: "app-update-student",
  templateUrl: "./update-student.page.html",
  styleUrls: ["./update-student.page.scss"],
})
export class UpdateStudentPage implements OnInit {
  numbers = [];
  student = {
    id: "",
    generalNumber: "",
    rollNumber: "",
    fullName: "",
    motherName: "",
    mobile: "",
    address: "",
    doa: "",
    dob: "",
    cast: "",
    category: "",
    gender: "",
    medium: "",
    secondLanguage: "",
    adharCard: "",
    scholorship: "",
    bankAccNo: "",
    bankName: "",
    ifsc: "",
    studentId: "",
  };
  header: string;
  subheader: string;
  message: string;
  constructor(
    private _route: ActivatedRoute,
    private service: MyserviceService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get("id");

    this.service.getSingleStudent(id).subscribe((res) => {
      this.student = res;
    });

    this.numbers = Array(150)
      .fill(0)
      .map((x, i) => i);
  }

  saveStudentData() {
    this.service.updateStudent(this.student).subscribe((res) => {
      this.router.navigate(["/home"]);
    });
  }
}
