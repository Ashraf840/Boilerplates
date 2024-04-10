import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
