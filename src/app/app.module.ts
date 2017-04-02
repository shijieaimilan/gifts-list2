import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginComponent } from './login/login.component';

import { AuthService, SpinnerService, httpFactory } from './services';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, LoginComponent],
  providers: [AuthService, SpinnerService,
    {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions, SpinnerService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

