import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MyserviceService } from "src/app/shared/myservice.service";
import { LoadingController } from "@ionic/angular";
@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  students: any[];
  lod;
  seg: string = "1";
  semi;
  marathi;
  scholorship;
  savitri;
  minor;
  sc;
  st;
  nt;
  sbc;
  obc;
  open;

  constructor(
    public loadingController: LoadingController,
    private router: Router,
    private service: MyserviceService
  ) {
    this.presentLoading();
  }
  async presentLoading() {
    this.lod = await this.loadingController.create({
      message: "कृपया  थोडा वेळ वाट  पहा ",
    });

    await this.lod.present().then(
      this.service.getAllStudents().subscribe((res) => {
        this.students = res;
        this.loadingController.dismiss();
      })
    );
  }

  ngOnInit() {}

  goToAddStudent() {
    this.router.navigate(["/add-student"]);
  }

  goToDetailsPage(id) {
    this.router.navigate(["/details", id]);
  }

  doRefresh(event) {
    this.presentLoading();
    event.target.complete();
  }
  segmentChanged(event) {
    this.seg = event.target.value;
    if (event.target.value == "1") {
      this.presentLoading();
    }
    if (event.target.value == "2") {
      this.semi = this.students.filter((item) => item.medium == "SEMI");
    }
    if (event.target.value == "3") {
      this.marathi = this.students.filter((item) => item.medium == "MARATHI");
    }
    if (event.target.value == "4") {
      this.scholorship = this.students.filter(
        (item) => item.scholorship !== ""
      );
    }
    if (event.target.value == "5") {
      this.savitri = this.students.filter(
        (item) => item.scholorship == "SAVITRI"
      );
    }

    if (event.target.value == "6") {
      this.minor = this.students.filter(
        (item) => item.scholorship == "MINORITY"
      );
    }

    if (event.target.value == "7") {
      this.sc = this.students.filter((item) => item.category == "SC");
    }

    if (event.target.value == "8") {
      this.st = this.students.filter((item) => item.category == "ST");
    }

    if (event.target.value == "9") {
      this.nt = this.students.filter((item) => item.category == "NT");
    }

    if (event.target.value == "10") {
      this.sbc = this.students.filter((item) => item.category == "SBC");
    }

    if (event.target.value == "11") {
      this.obc = this.students.filter((item) => item.category == "OBC");
    }

    if (event.target.value == "12") {
      this.open = this.students.filter((item) => item.category == "OPEN");
    }
  }
}
