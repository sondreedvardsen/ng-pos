import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

    transform(value: string, limit?: number, tail?: string): string {
        let text: string = value;
        let n = limit ? limit : 10;
        let s = tail ? tail : '...';
        if(value.length > n) {
            text = text.slice(0, n).trim() + s;
        }
        return text;
    }

}
