import { Component } from '@angular/core';

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Bold, Code, Italic, Strikethrough, Underline, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';

import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { Alignment } from '@ckeditor/ckeditor5-alignment'; // <--- ADDED
import { Font } from '@ckeditor/ckeditor5-font';
// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
    Essentials,
    UploadAdapter,
    Autoformat,
    BlockQuote,
    Bold, Italic, Code, Strikethrough, Underline, Subscript, Superscript,
    Font,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Link,
    List,
    Paragraph,
    Alignment,
    Table,
    TableToolbar,
    SpecialCharacters, SpecialCharactersEssentials,
    CKFinder
];

// Editor configuration.
ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            'undo', 'redo',
            '|',
            'heading',
            '|',
            'alignment', 'bold', 'italic', 'underline',
            '|',
            'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
            '|',
            'bulletedList', 'numberedList',
            'link', 'uploadImage',
            'blockQuote',
            'insertTable',
            'specialCharacters',
        ]
    },
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
    },
    image: {
        toolbar: [
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative'
        ]
    },
    ckfinder: {
        // Upload the images to the server using the CKFinder QuickUpload command.
        uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public Editor = ClassicEditor;


}