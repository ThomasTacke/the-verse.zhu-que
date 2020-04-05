import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';
import { MqttModule, IMqttServiceOptions } from 'ngx-mqtt';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { SensorCardComponent } from './sensor-card/sensor-card.component';
import { LivingRoomComponent } from './rooms/living-room/living-room.component';
import { BathroomComponent } from './rooms/bathroom/bathroom.component';
import { FloorComponent } from './rooms/floor/floor.component';
import { KitchenComponent } from './rooms/kitchen/kitchen.component';
import { LightsComponent } from './actuators/lights/lights.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { RoomCardComponent } from './room-card/room-card.component';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname:  environment.mqttBroker.hostname,
  port: environment.mqttBroker.port,
  path: environment.mqttBroker.path,
  protocol: 'ws'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SensorCardComponent,
    LivingRoomComponent,
    BathroomComponent,
    FloorComponent,
    KitchenComponent,
    LightsComponent,
    AddDeviceComponent,
    RoomCardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    HttpClientModule,
    MatIconModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
