import { Gateway } from '../gateway';
export declare class Mock extends Gateway {
    get(): void;
    head(): void;
    post(): void;
    put(): void;
    patch(): void;
    delete(): void;
    callMock(): any;
}
export default Mock;
