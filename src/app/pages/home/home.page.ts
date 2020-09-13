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
  students: [];
  lod;
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
}
