import { ObservableState, ObservableStateOptions } from 'rxjs-observable-state';
import { Injectable } from '@angular/core';

@Injectable()
export class ObservableStateService<T, IdType> extends ObservableState<T, IdType> {
    constructor(options: ObservableStateOptions<T, IdType>) {
        super(options);
    }
}
