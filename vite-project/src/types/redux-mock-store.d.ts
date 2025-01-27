declare module 'redux-mock-store' {
    import { Middleware, AnyAction } from 'redux';

    export interface MockStoreCreator<T = any> {
        (state?: T): MockStore<T>;
    }

    export interface MockStore<T = any> {
        getState(): T;
        dispatch(action: AnyAction): AnyAction;
        clearActions(): void;
        getActions(): AnyAction[];
        subscribe(listener: () => void): () => void;
    }

    export default function configureMockStore<T = any>(
        middlewares?: Middleware[]
    ): MockStoreCreator<T>;
}