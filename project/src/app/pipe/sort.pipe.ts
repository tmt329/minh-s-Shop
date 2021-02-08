import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortBy: string, sortValue:number ): any {
    
  if(sortBy ==="name")
  {
    products.sort((a ,b )=> 
    {
        if(a['name'].toLowerCase()  > b['name'].toLowerCase())
          return sortValue ;
        else if(a['name'].toLowerCase()  < b['name'].toLowerCase()
        )
        return -sortValue;
        else 
          return 0 ;
    })
  }
    

    return products;
  }

}
