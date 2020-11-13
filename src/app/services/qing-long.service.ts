import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QingLongService {

  private actionUrl = `${environment.qingLong.protocol}://${environment.qingLong.hostname}:${environment.qingLong.port}${environment.qingLong.path}`;

  constructor(private http: HttpClient) { }

  getIndex<T>(): Observable<T> {
    return this.http.get<T>(`${this.actionUrl}/`);
  }

  getDevices<T>(): Observable<T> {
    return this.http.get<T>(`${this.actionUrl}/device`);
  }

  getDeviceTypes<T>(): Observable<T> {
    return this.http.get<T>(`${this.actionUrl}/device`);
  }

  getMqttComponents<T>(): Observable<T> {
    return this.http.get<T>(`${this.actionUrl}/mqttcomponent`);
  }

  getMqttComponentTypes<T>(): Observable<T> {
    return this.http.get<T>(`${this.actionUrl}/mqttcomponenttype`);
  }

  getMqttComponentValues<T>(): Observable<T> {
    return this.http.get<T>(`${this.actionUrl}/mqttcomponentvalue`);
  }

  getRooms<T>(): Observable<T> {
    return this.http.get<T>(`${this.actionUrl}/room`);
  }

  setRoom(data: {Name: string, Shortname: string}): Observable<any> {
    return this.http.post(`${this.actionUrl}/room`, data);
  }


}

