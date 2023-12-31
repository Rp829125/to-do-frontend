import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PostTaskComponent } from './post/post-task/post-task.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component'

@NgModule({
  declarations: [
    AppComponent,
    PostTaskComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
