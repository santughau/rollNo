import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MyserviceService {
  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<any> {
    return this.http.get("https://bpegm.co/kamini/student.php");
  }

  getSEMIStudents(): Observable<any> {
    return this.http.get("http://localhost/kamini/semi.php");
  }

  getMarathiStudents(): Observable<any> {
    return this.http.get("http://localhost/kamini/marathi.php");
  }

  getSingleStudent(id): Observable<any> {
    return this.http.post("https://bpegm.co/kamini/studentById.php", {
      id: id,
    });
  }

  createStudent(data): Observable<any> {
    return this.http.post("https://bpegm.co/kamini/createStudent.php", data);
  }

  checkRoll(roll): Observable<any> {
    return this.http.post<any>("https://bpegm.co/kamini/checkRoll.php", {
      roll: roll,
    });
  }

  updateStudent(data): Observable<any> {
    return this.http.post("https://bpegm.co/kamini/update.php", data);
  }

  deleteStudent(id): Observable<any> {
    return this.http.post("https://bpegm.co/kamini/del.php", {
      id: id,
    });
  }
}
