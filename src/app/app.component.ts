import { Component, VERSION } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CKEditor4, } from 'ckeditor4-angular/ckeditor';
import { CKEditorModule } from 'ckeditor4-angular';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name = 'Angular ' + VERSION.major;
    mainMatForm!: FormGroup;
    availablePlugins: any[] = [];
    get ckeditorTextFormElement() { return this.mainMatForm.get('ckeditor_text'); }
    ckEditorConfig: any = {
        toolbar: [
            ['Source', 'Templates', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'],
            ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'],
            ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'],
            ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'],
            ['Link', 'Unlink', 'Anchor'],
            ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'],
            ['Styles', 'Format', 'Font', 'FontSize'],
            ['TextColor', 'BGColor'],
            ['Maximize', 'ShowBlocks',]
        ],
        plugins: "exportpdf",
        // exportPdf_options: {
        //     header_html: '<div class="styled">Header content</div>',
        //     footer_html: '<div class="styled-counter"><span class="pageNumber"></span></div>',
        //     header_and_footer_css: '.styled { font-weight: bold; padding: 10px; } .styled-counter { font-size: 1em; color: hsl(0, 0%, 60%); }',
        //     margin_top: '2cm',
        //     margin_bottom: '2cm'
        // }
    };

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.setupMainMatForm();
    }

    setupMainMatForm(): boolean {
        const result = false;
        this.mainMatForm = this.createMainMatForm();
        return result;
    }
    createMainMatForm(): FormGroup {
        let result = null;
        const formBuilderItem: any = {};

        formBuilderItem['ckeditor_text'] = ['<p>Normal</p> <h1>Heading 1</h1> <h2>Heading 2</h2> <h3>Heading 3</h3> <h4>Heading 4</h4> <h5>Heading 5</h5> <h6>Heading 6</h6> <pre> Formatted</pre> <address>Address</address> <div>Normal div</div>'];

        result = this.formBuilder.group(formBuilderItem);
        return result;
    }

    onMainMatFormNgSubmit($event: any): boolean {
        const result = true;

        return result;
    }
    public onNamespaceLoaded(editor: any) {
        // Add external `placeholder` plugin which will be available for each
        // editor instance on the page.
        // console.log("??/");

        // editor.plugins.addExternal('exportpdf', './node_modules/ckeditor4-plugin-exportpdf/', 'plugin.js');
        // console.log('editor', editor);
        //     editor.replace('ckeditor_text', {
        //         extraPlugins: 'pbckcode',
        //         toolbar: [
        //           ['clipboard', 'undo', '-', 'Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo'],
        //           ['TextColor', 'Bold', 'Italic'],
        //           ['Format', 'Font', 'FontSize'],
        //           ['pbckcode']
        //         ]
        //       });
    }


    onCkEditorReady(editor: any): boolean {
        const result = true;
        // editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        //   return new UploadAdapter (loader, {}, currentComponent.httpClient);
        // };


        // console.log('editor');
        // console.log(editor);

        return result;
    }

}


