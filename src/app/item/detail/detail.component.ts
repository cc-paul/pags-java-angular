import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
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
}
