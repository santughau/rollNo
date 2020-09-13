import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },

  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "details/:id",
    loadChildren: () =>
      import("./pages/details/details.module").then((m) => m.DetailsPageModule),
  },
  {
    path: "add-student",
    loadChildren: () =>
      import("./pages/add-student/add-student.module").then(
        (m) => m.AddStudentPageModule
      ),
  },
  {
    path: "update-student/:id",
    loadChildren: () =>
      import("./pages/update-student/update-student.module").then(
        (m) => m.UpdateStudentPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
