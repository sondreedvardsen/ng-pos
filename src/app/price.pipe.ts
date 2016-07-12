import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

    transform(price: number, tax?: number, decimals?: boolean, dispzero?: boolean): string {
        let t: number = tax ? 1 + (tax / 100) : 1;
        let p: string = decimals ? (price * t).toFixed(2).replace('.', ',') : Math.round(price * t).toString() + ',-';
        let f: string = dispzero && decimals ? p : p.replace(',00', ',-');
        let finalPrice: string = f.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return finalPrice;
    }

}
