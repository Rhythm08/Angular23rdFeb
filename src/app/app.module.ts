import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { TasksComponent } from './tasks/tasks.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


const routes :Routes = [
  // {path: '', redirectTo: '/project', pathMatch: 'full'},
  {path: 'project', component: ProjectComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'milestone', component: MilestoneComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    TasksComponent,
    MilestoneComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
