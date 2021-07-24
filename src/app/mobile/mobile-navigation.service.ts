/**
 * create stack
 * add method to add items to stack
 * make sure that if the added items is already the last on the stack, it doesn get added again
 */


/**
 * make back functionality
 * add method to remove item from stack
 * sent out notification
 */

import { EventEmitter, Injectable, Output } from '@angular/core';
/**
 * create event to which consumers can listen
 * notify them about updates to the stack.
 */


@Injectable({
    providedIn: 'root',
})
export class MobileNavigationService{
    _views: string[] = [];
    @Output() activeView = new EventEmitter<string>();

    // todo how to handle it when switching between mobile and desktop?
    // todo how to handle initial loading of the application? Multiple views will become active

    makeActive(activeView: string) {
        const topView = this.peek();

        if (topView !== activeView) {
            // notify listeners the active view has changed
            this._views.push(activeView);
            this.activeView.emit(activeView);
            console.log('Mobile: added view named ' + activeView + ' to stack');
        }
    }

    goBack() {
        this._views.pop();
        const topView = this.peek();
        console.log('Mobile: removed view named ' + topView + ' from stack');

        // notify listeners the active view has changed
        this.activeView.emit(topView);
        console.log('Mobile: navigated back');

    }

    private peek(): string {
        let topView;
        if (this._views.length > 0) {
            topView = this._views[this._views.length - 1];
        }
        return topView;
    }




}
