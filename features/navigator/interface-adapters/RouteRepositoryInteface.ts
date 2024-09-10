export interface RouteRepositoryInteface {
    setRouteData(data?: any): void;
    setRouteQueryData(data?: any): void;
    getPathParamAsString(name: string, defaultValue?: string): string;
    getPathParamAsNumber(name: string, defaultValue?: number): number;
    getQueryParamAsString(name: string, defaultValue?: string): string;
    getQueryParamAsNumber(name: string, defaultValue?: number): number;
    getRouteDataAsString(name: string, defaultValue?: string): string;
    getRouteDataAsNumber(name: string, defaultValue?: number): number;
}
