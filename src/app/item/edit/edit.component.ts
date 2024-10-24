import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  item: Item = {};
  isSubmitting: boolean = false;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {
    this.item = {
      id : this.route.snapshot.params['id'],
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {
    this.itemService.getItemDetail(this.item.id!!)
    .then((response) => {
      this.item = response.data;
    })
    .catch((error) => {
      return error;
    })
  }

  updateItem() {
    if (
      this.item.title!!.trim().length == 0 || 
      this.item.description!!.trim().length == 0
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill in required fields',
        showConfirmButton: true
      });
    } else {
      this.isSubmitting = true;
      this.itemService.updateItem(this.item)
      .then(response => {
        this.isSubmitting = false;

        Swal.fire({
          icon: 'success',
          title: 'Item updated successfully',
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
