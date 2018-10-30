import { CanDeactivate } from '@angular/router';
import { ProductComponent } from '../product/product.component';

export class UnsavedGuard implements CanDeactivate<ProductComponent> {

    canDeactivate(component: ProductComponent) {
        return window.confirm('还未保存，确定离开吗？');
    }

}