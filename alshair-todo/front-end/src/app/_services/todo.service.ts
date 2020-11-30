import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../_models/food.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/foods`);
  }

  create( newFood ): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/food`, {food: newFood});
  }

  destroy( food ): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/food/${food._id}`);
  }

  removeFood( arrayFoods, foodToRemove ): any{
    for (let i = 0; i <= arrayFoods.length; i++) {
      if (arrayFoods[i]._id === foodToRemove._id) {
        arrayFoods.splice(i, 1);
        return arrayFoods;
      }
    }
  }

}
