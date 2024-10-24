import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  title: String = "";
  description: String = "";
  isSubmitting: Boolean = false;

  constructor(
    private itemService: ItemService
  ) {}

  createItem() {
    if (
      this.title.trim().length == 0 || 
      this.description.trim().length == 0
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill in required fields',
        showConfirmButton: true
      });
    } else {
      this.isSubmitting = true;
      this.itemService.createItem({
        title: this.title,
        description: this.description
      })
      .then(response => {
        this.isSubmitting = false;
        this.title = "";
        this.description = "";

        Swal.fire({
          icon: 'success',
          title: 'Item created successfully',
          showConfirmButton: false,
          timer: 1000
        });
      })
      .catch(error => {
        this.isSubmitting = false;

        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          showConfirmButton: false,
          timer: 1000
        });

        return error;
      });
    }
  }
}
