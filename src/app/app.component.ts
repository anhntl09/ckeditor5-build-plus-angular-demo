import { Component } from '@angular/core';

import ClassicEditor from 'ckeditor5-build-classic-plus'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public Editor = ClassicEditor;
    public config = {
        toolbar: {
            items: [
                'undo',
                'redo',
                '|',
                'heading',
                'fontFamily',
                'fontSize',
                '|',
                'bold',
                'italic',
                'underline',
                'fontColor',
                'fontBackgroundColor',
                'highlight',
                '|',
                'link',
                'CKFinder',
                'imageUpload',
                'mediaEmbed',
                '|',
                'alignment',
                'bulletedList',
                'numberedList',
                '|',
                'indent',
                'outdent',
                '|',
                'insertTable',
                'blockQuote',
                'specialCharacters'
            ],
        },
        image: {
            toolbar: [
                'imageStyle:full',
                'imageStyle:side',
                '|',
                'imageTextAlternative'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },

    }
    // public editorsReady(editor) {
    //     editor.ui.getEditableElement().parentElement.insertBefore(
    //         editor.ui.view.toolbar.element,
    //         editor.ui.getEditableElement()
    //     );
    // }
}