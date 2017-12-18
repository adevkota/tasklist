import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {

	transform(value: any, searchText?: string): any {
		if (!value || !searchText) {
			return value;
		}

		return value.filter((item) => {
			return item.includes(searchText);
		});
	}

}
