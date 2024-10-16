import { RouteRepository } from '@/framework/features/navigator/repositories/RouteRepository';
import { RouterRepository } from '@/framework/features/navigator/repositories/RouterRepository';

import type { RouteRepositoryInteface } from '../interface-adapters/RouteRepositoryInteface';
import type { RouterRepositoryInteface } from '../interface-adapters/RouterRepositoryInteface';
export class Navigator {
    private static router: RouterRepositoryInteface<any>;
    private static route: RouteRepositoryInteface;

    public static getRouter() {
        if (!this.router) {
            this.router = new RouterRepository();
        }

        return this.router;
    }

    public static navigate<T>(path: string, params?: T | null): void {
        return this.getRouter().navigate(path, params);
    }

    public static getRoute() {
        if (!this.route) {
            this.route = new RouteRepository();
        }

        return this.route;
    }
}
