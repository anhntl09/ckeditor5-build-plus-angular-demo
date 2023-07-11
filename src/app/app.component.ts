import { Component, VERSION } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
            ['Maximize', 'ShowBlocks']
        ]
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


