import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppStoreModule } from './store/app-store.module';
import { BASE_URL_TOKEN } from './common/tokens/base-url-token';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppStoreModule,
    HttpClientModule,
    // TODO: must hardcode base url due to a bug
    // https://github.com/angular/angular-cli/issues/8515
    ServiceWorkerModule.register('https://tariknz.github.io/reddit-pwa/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [{ provide: BASE_URL_TOKEN, useValue: 'https://www.reddit.com/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
