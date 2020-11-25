import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewComponent } from './pages/view/view.component';
import { UploadComponent } from './pages/upload/upload.component';

// Pipes
import { NgBytesPipeModule } from 'angular-pipes';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ViewComponent, UploadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule,
    FileUploadModule,
    DialogModule,
    InputTextModule,
    CardModule,
    NgBytesPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
