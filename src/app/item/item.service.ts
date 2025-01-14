import { Injectable } from '@angular/core';
import axios from 'axios';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAllItems() : Promise<any> {
    return axios.get(`/api/items`);
  }

  getItemDetail(id: Number) : Promise<any> {
    return axios.get(`api/items/${id}`);
  }

  createItem(request: any) : Promise<any> {
    let reqData = {
      title: request.title,
      description : request.description
    }

    return axios.post(`/api/items`,reqData);
  }

  updateItem(request: any) : Promise<any> {
    let reqData = {
      title: request.title,
      description : request.description
    }

    return axios.put(`/api/items/${request.id}`,reqData);
  }

  deleteItem(id: Number) : Promise<any> {
    return axios.delete(`/api/items/${id}`);
  }
}
