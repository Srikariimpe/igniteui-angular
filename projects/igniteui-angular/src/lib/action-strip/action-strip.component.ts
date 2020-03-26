import { Component, NgModule, Input, ViewContainerRef, Renderer2, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

let NEXT_ID = 0;

/**
 * Action Strip provides templatable area for one or more actions.
 *
 * @igxModule IgxActionStripModule
 *
 * @igxTheme igx-action-strip-theme
 *
 * @igxKeywords action, strip, actionstrip, pinning, editing
 *
 * @igxGroup Data Entry & Display
 *
 * @remarks
 * The Ignite UI Action Stip is a container, overlaying its parent container,
 * and displaying action buttons with action applicable to the parent component the strip is instantiated or shown for.
 *
 * @example
 * ```html
 * <igx-action-strip #actionstrip>
 *     <igx-icon (click)="doSomeAction()"></igx-icon>
 * </igx-action-strip>
 */
@Component({
    selector: 'igx-action-strip',
    templateUrl: 'action-strip.component.html'
})

export class IgxActionStripComponent {
    constructor(
        private _viewContainer: ViewContainerRef,
        private renderer: Renderer2) {}

    /**
     * An @Input property that set the visibility of the Action Strip.
     * Could be used to set if the Action Strip will be visible initially.
     * ```html
     *  <igx-action-strip [hidden]="false">
     * ```
     */
    @Input() hidden = false;

    /**
     * An @Input property that sets the value of the `id` attribute. If not set it will be automatically generated.
     * ```html
     *  <igx-buttongroup [id]="'igx-action-strip-56'">
     * ```
     */
    @HostBinding('attr.id')
    @Input()
    public id = `igx-action-strip-${NEXT_ID++}`;


    /**
     * Host `class.igx-action-strip` binding.
     *
     * @hidden
     * @internal
     */
    @HostBinding('class.igx-action-strip')
    public cssClass = 'igx-action-strip';

    public context;

    show(context) {
        this.context = context;
        this.hidden = false;
        this.context = context;
        this.renderer.appendChild(context.element.nativeElement, this._viewContainer.element.nativeElement);
    }

    hide() {
        this.hidden = true;
        this.renderer.removeChild(this.context.element.nativeElement, this._viewContainer.element.nativeElement);
    }
}

/**
 * @hidden
 */
@NgModule({
    declarations: [IgxActionStripComponent],
    exports: [IgxActionStripComponent],
    imports: [CommonModule]
})
export class IgxActionStripModule { }