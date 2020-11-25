import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './pages/upload/upload.component';
import { ViewComponent } from './pages/view/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/upload', pathMatch: 'full'},
  { path: 'upload', component: UploadComponent },
  {
    path: 'view/:id',
    component: ViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
