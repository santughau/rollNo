import { Component, OnInit } from "@angular/core";
import { MyserviceService } from "src/app/shared/myservice.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.page.html",
  styleUrls: ["./add-student.page.scss"],
})
export class AddStudentPage implements OnInit {
  numbers = [];
  student = {
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
    public alertController: AlertController,
    private service: MyserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.numbers = Array(150)
      .fill(0)
      .map((x, i) => i);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.student.fullName,
      message: "यांचे  नाव नोंदून  घेतले ",
      mode: "ios",
      buttons: ["OK"],
    });

    await alert.present();
  }
  saveStudentData() {
    this.service.createStudent(this.student).subscribe((res) => {
      this.router.navigate(["/home"]);
      this.presentAlert();
    });
  }

  OnclassChange(event) {
    this.service.checkRoll(event.target.value).subscribe(async (res) => {
      if (res.id !== null) {
        this.header = res.fullName;
        this.subheader = "हजेरी क्रमांक  " + res.rollNumber;
        this.message = "या नावाने आपण अगोदर एक विध्यार्थी ऍड केले आहे ";
        const alert = await this.alertController.create({
          header: this.header,
          subHeader: this.subheader,
          message: this.message,
          mode: "ios",
          buttons: ["OK"],
        });

        await alert.present();
      }
    });
  }
}
