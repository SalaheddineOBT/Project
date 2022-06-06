import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolBarComponent } from './tool-bar.component';
import { ApiService } from 'src/app/services/api.service';



@NgModule({
    declarations: [
        ToolBarComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [ApiService],
    exports: [ToolBarComponent]
})
export class ToolBarModule { }