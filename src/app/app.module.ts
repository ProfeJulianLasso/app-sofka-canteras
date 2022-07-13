// Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routers
import { AppRoutingModule } from './app-routing.module';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// Components
import { IndexComponent } from './pages/index/index.component';
import { Canteras2022Module } from './core/templates/canteras-2022/canteras-2022.module';
import { AppComponent } from '@template/canteras-2022/app/app.component';

@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Canteras2022Module,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
