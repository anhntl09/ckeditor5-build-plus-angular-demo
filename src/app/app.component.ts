import { Component } from '@angular/core';

import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { Bold, Code, Italic, Strikethrough, Underline, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public Editor = ClassicEditorBase;

    public isDisabled = false;
    public editorData =
        `<p><a href="https://yandex.ru/">https://yandex.ru/</a></p>`;

    public componentEvents: string[] = [];
    public config = {
        plugins: [Bold, Italic, Underline, Strikethrough, Code, Subscript, Superscript, Undo],
        toolbar: {
            items: ['undo', 'redo', 'bold', 'italic', 'underline', 'strikethrough', 'code', 'subscript', 'superscript']
        }
    }

}