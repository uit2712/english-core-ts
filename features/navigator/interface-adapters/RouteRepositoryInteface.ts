export interface RouteRepositoryInteface<T> {
    setRoute(route: T): void;
    getPathParamAsString(name: string, defaultValue?: string): string;
    getPathParamAsNumber(name: string, defaultValue?: number): number;
    getQueryParamAsString(name: string, defaultValue?: string): string;
    getQueryParamAsNumber(name: string, defaultValue?: number): number;
}
