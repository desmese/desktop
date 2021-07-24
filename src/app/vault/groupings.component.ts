import { Component } from '@angular/core';

import { CollectionService } from 'jslib-common/abstractions/collection.service';
import { FolderService } from 'jslib-common/abstractions/folder.service';
import { StorageService } from 'jslib-common/abstractions/storage.service';
import { UserService } from 'jslib-common/abstractions/user.service';

import { GroupingsComponent as BaseGroupingsComponent } from 'jslib-angular/components/groupings.component';
import { MobileNavigationService } from '../mobile/mobile-navigation.service';

@Component({
    selector: 'app-vault-groupings',
    templateUrl: 'groupings.component.html',
})
export class GroupingsComponent extends BaseGroupingsComponent {
    constructor(collectionService: CollectionService, folderService: FolderService,
                private mobileNavigationService: MobileNavigationService,
        storageService: StorageService, userService: UserService) {
        super(collectionService, folderService, storageService, userService);
    }

    async load() {
        this.mobileNavigationService.makeActive('groupings');
        super.load();
    }
}
