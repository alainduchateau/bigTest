import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'questionableBoolean' })
export class QuestionableBooleanPipe implements PipeTransform {
    transform(value: boolean): string {
        console.log(value);
        return value == true ? 'Yes' : 'No'
    }; 
}