import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
