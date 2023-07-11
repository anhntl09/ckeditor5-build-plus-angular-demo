import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from 'ckeditor4-angular';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, CKEditorModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
