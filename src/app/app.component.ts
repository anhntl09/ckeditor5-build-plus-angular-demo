import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
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
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Font } from '@ckeditor/ckeditor5-font';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';

// Plugins to include in the builtinPlugins.
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
    CKFinder, ExportPdf, CloudServices
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
            'specialCharacters', 'exportPdf'

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
    language: 'en'
};

type formdata = { id: number, name?: string, data: string }

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public Editor = ClassicEditor;
    data: any
    public onChange({ editor }: ChangeEvent) {
        this.data = editor.data.get()
        console.log(this.data);
    }
    options: formdata[] = [{
        id: 1, name: "VNTTS Biên bản bàn giao", data: '<p>&nbsp;</p><p>Hôm nay ngày : 05 tháng 07 năm 2023 Tại:Văn phòng VNTTS HCM</p><p>Chúng tôi gồm có:</p><p><strong>I.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Người bàn giao:</strong></p><p>1.&nbsp;&nbsp; Ông/ Bà: Nguyễn Thanh Hải. Ngày sinh: 03/05/1987</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vị trí công việc:Lập trình viên Phòng: Chuyển đổi số</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ngày vào làm:15/04/2021</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ngày bắt đầu nghỉ việc:01/08/2023</p><p><strong>II.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Đại diện các Phòng / TT có liên quan nhận bàn giao:</strong></p><p>1. Ông/ Bà…………………....chức vụ: ……………Phòng ………………..</p><p>2.&nbsp;&nbsp; Ông/ Bà…………………....chức vụ: ……………Phòng ………………..</p><p>3.&nbsp;&nbsp; Ông/ Bà…………………....chức vụ: ……………Phòng ………………..</p><p>4.&nbsp;&nbsp; Ông/ Bà…………………....chức vụ: ……………Phòng ………………..</p><p>5.&nbsp;&nbsp; Ông/ Bà…………………....chức vụ: ……………Phòng ………………..</p><p>Cùng tiến hành bàn giao các nội dung như sau:</p><p><strong>III.&nbsp;&nbsp;&nbsp; Nội dung bàn giao:</strong></p><p><strong>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Bàn giao với Phòng</u></strong><u> </u><strong><u>BU1: </u></strong>Công việc hiện tại và sắp tới, Hồ sơ tài liệu liên quan:</p><figure class="table"><table><tbody><tr><td>Stt</td><td><p>Công việc được bàn giao</p><p>(theo bản mô tả công việc)</p></td><td>Tình trạng, mức độ hoàn thành/Ghi chú</td><td>Người nhận bàn giao</td></tr><tr><td>A</td><td colspan="3">Bàn giao các công việc đang thực hiện <i>(Nếu thông tin nhiều có thể đính kèm File)</i></td></tr><tr><td>1</td><td><p>Source Git: Becawifi, Becacheckin</p><p>https://git.jwifi.vn/bu1.wifipublic/jwifi.plus</p></td><td>Tốt</td><td>&nbsp;</td></tr><tr><td>2</td><td><p>Source Git: Opencloud</p><p>https://git.jwifi.vn/haint/cmp</p></td><td>Đang phát triển</td><td>&nbsp;</td></tr><tr><td>.....</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><p style="text-align:justify;">SB</p></td><td colspan="3"><p style="text-align:justify;">Bàn giao các hồ sơ, tài liệu liên quan</p><p style="text-align:justify;">&nbsp;</p></td></tr><tr><td>1</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>2</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>....</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>'
    }, { id: 2, name: "VNTTS Đơn xin thôi việc", data: '<figure class="table"><table><tbody><tr><td rowspan="4"><p><span style="color:black;"><strong>&nbsp;</strong></span></p><p><span style="color:black;"><strong>&nbsp;&nbsp;</strong></span></p><p style="text-align:center;"><span style="color:black;"><strong>&nbsp;</strong></span></p></td><td rowspan="4"><p style="text-align:center;"><span style="color:black;"><strong>&nbsp;</strong></span></p><p style="text-align:center;"><span style="color:black;"><strong>ĐƠN XIN THÔI VIỆC</strong></span></p></td><td><span style="color:black;">Số hiệu: HRM-PR03-TE01</span></td></tr><tr><td><span style="color:black;">Ngày hiệu lực: 18/08/2021</span></td></tr><tr><td><span style="color:black;">Lần ban hành: 02</span></td></tr><tr><td><span style="color:black;">Trang: 01</span></td></tr></tbody></table></figure><p>&nbsp;</p><p style="text-align:justify;"><i><strong><u>Kính gửi</u></strong></i><strong><u> :</u></strong></p><p style="text-align:justify;">- Tổng Giám đốc,</p><p style="text-align:justify;">- Trưởng phòng Hành chính<strong> </strong>– Quản trị,</p><p style="text-align:justify;">- Trưởng Phòng/Ban ................................................</p><p style="text-align:justify;">Tôi tên : .............................................................Mã số NV.................................................</p><p>Chức vụ/Chức danh ............................................................................................................</p><p>Thuộc Phòng/ban : .............................................................................................................</p><p>Ngày vào làm: ……/……/……</p><p style="text-align:justify;">Nay tôi làm đơn này, kính trình Ban Tổng Giám đốc chấp thuận cho tôi được nghỉ việc tại Công ty TNHH Giải pháp VNTT &nbsp;kể từ ngày ...... tháng ..... năm …….</p><p style="text-align:justify;">Lý do xin nghỉ việc:</p><p style="text-align:justify;">................................................................................................................................................</p><p style="text-align:justify;">................................................................................................................................................</p><p style="text-align:justify;">................................................................................................................................................</p><p style="text-align:justify;">Tôi sẽ bàn giao công việc cho Ông/bà:……………………………………..Thuộc phòng: ………………………………………..và cam kết hoàn thành mọi trách nhiệm, nghĩa vụ về tài chính, công cụ dụng cụ, tài sản (nếu có) của công ty trước khi nghỉ việc.</p><p style="text-align:justify;">Tôi chân thành cám ơn Tổng Giám đốc, Lãnh đạo các Phòng/ban đã tạo điều kiện giúp đỡ tôi hoàn thành tốt nhiệm vụ công tác trong thời gian qua.</p><p style="text-align:justify;"><i><strong>Trân trọng cảm ơn !</strong></i></p>' },
    ];

    onChangeSetectOption(e) {
        console.log(e.target.value);
        setTimeout(() => {
            this.data = this.options[e.target.value].data
        }, 0)
    }
}