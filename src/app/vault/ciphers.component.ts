import { Component } from '@angular/core';

import { SearchService } from 'jslib-common/abstractions/search.service';

import { CiphersComponent as BaseCiphersComponent } from 'jslib-angular/components/ciphers.component';
import { MobileNavigationService } from '../mobile/mobile-navigation.service';

@Component({
    selector: 'app-vault-ciphers',
    templateUrl: 'ciphers.component.html',
})
export class CiphersComponent extends BaseCiphersComponent {
    constructor(searchService: SearchService, private mobileNavigationService: MobileNavigationService) {
        super(searchService);
        this.pageSize = 250;
    }

    async load() {
        this.mobileNavigationService.makeActive('ciphers');
        super.load();
    }
}
