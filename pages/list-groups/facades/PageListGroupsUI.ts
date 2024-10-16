import {
    GetListGroupsPageListGroupsUseCase
} from '../use-cases/GetListGroupsPageListGroupsUseCase';
import { SelectGroupPageListGroupsUseCase } from '../use-cases/SelectGroupPageListGroupsUseCase';

export class PageListGroupsUI {
    private static selectGroupPageListGroupsUseCase: SelectGroupPageListGroupsUseCase;
    private static getListGroupsPageListGroupsUseCase: GetListGroupsPageListGroupsUseCase;

    public static selectGroup(id: number) {
        if (!this.selectGroupPageListGroupsUseCase) {
            this.selectGroupPageListGroupsUseCase = new SelectGroupPageListGroupsUseCase();
        }

        return this.selectGroupPageListGroupsUseCase.invoke(id);
    }

    public static getList() {
        if (!this.getListGroupsPageListGroupsUseCase) {
            this.getListGroupsPageListGroupsUseCase = new GetListGroupsPageListGroupsUseCase();
        }

        return this.getListGroupsPageListGroupsUseCase.invoke();
    }
}
