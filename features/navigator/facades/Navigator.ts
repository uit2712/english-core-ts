import { RouterRepository } from '@/framework/features/navigator/repositories/RouterRepository';
import { RouteRepositoryInteface } from '../interface-adapters/RouteRepositoryInteface';
import { RouterRepositoryInteface } from '../interface-adapters/RouterRepositoryInteface';
import { RouteRepository } from '@/framework/features/navigator/repositories/RouteRepository';

export class Navigator {
    private static router: RouterRepositoryInteface<any>;
    private static route: RouteRepositoryInteface<any>;

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
