// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxTippyModule } from 'ngx-tippy-wrapper';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

// Pipes
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    NgxTippyModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  exports: [HeaderComponent, MainMenuComponent, FooterComponent]
})
export class Canteras2022Module {}
