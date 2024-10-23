import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 

import { ItemRoutingModule } from './item-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    OverviewComponent,
    CreateComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItemModule { }
