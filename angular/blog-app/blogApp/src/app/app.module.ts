import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ProfileComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
