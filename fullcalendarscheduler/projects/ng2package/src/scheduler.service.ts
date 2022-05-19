import { Injectable} from '@angular/core';

@Injectable()
export class schedulerService {
    private _text: string;

    constructor() {
    }

    get text(): string {
        return this._text;
    }

    set text(text: string) {
        this._text = text;
    }

    helloworld(text : string) {
       console.log(text);
    }

} 