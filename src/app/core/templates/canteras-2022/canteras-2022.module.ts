// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, MainMenuComponent, FooterComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [HeaderComponent, MainMenuComponent, FooterComponent]
})
export class Canteras2022Module {}
