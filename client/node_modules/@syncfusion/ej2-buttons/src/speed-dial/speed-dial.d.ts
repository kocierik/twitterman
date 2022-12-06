import { BaseEventArgs, EmitType, ChildProperty, Component, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { SpeedDialItemModel, SpeedDialModel, RadialSettingsModel, SpeedDialAnimationSettingsModel } from './speed-dial-model';
import { FabPosition } from './../floating-action-button/index';
import { IconPosition } from './../button/index';
/**
 * Defines the display mode of speed dial action items in SpeedDial
 */
export declare enum SpeedDialMode {
    /**
     * SpeedDial items are displayed in linear order like list.
     */
    Linear = 0,
    /**
     * SpeedDial items are displayed like radial menu in radial direction (circular direction).
     */
    Radial = 1
}
/**
 * Defines the speed dial action items display direction when mode is Linear.
 */
export declare enum LinearDirection {
    /**
    * Speed dial action items are displayed vertically above the button of Speed Dial.
    */
    Up = 0,
    /**
    * Speed dial action items are displayed vertically below the button of Speed Dial.
    */
    Down = 1,
    /**
    * Speed dial action items are displayed horizontally on the button's right side.
    */
    Right = 2,
    /**
    * Speed dial action items are displayed horizontally on the button's left side.
    */
    Left = 3,
    /**
    * Speed dial action items are displayed vertically above or below the button of Speed Dial based on the position.
    * If Position is TopRight, TopLeft, TopCenter, the items are displayed vertically below the button else above the button.
    */
    Auto = 4
}
/**
 * Defines the speed dial action items  order, when mode is Radial.
 */
export declare enum RadialDirection {
    /**
    * SpeedDial items are arranged in clockwise direction.
    */
    Clockwise = 0,
    /**
    * SpeedDial items are shown in anti-clockwise direction.
    */
    AntiClockwise = 1,
    /**
    * SpeedDial items are shown clockwise or anti-clockwise based on the position.
    */
    Auto = 2
}
/**
 * Defines the animation effect applied when open and close the speed dial items.
 */
export declare enum SpeedDialAnimationEffect {
    /**
    * SpeedDial open/close actions occur with the Fade animation effect.
    */
    Fade = 0,
    /**
    * SpeedDial open/close actions occur with the FadeZoom animation effect.
    */
    FadeZoom = 1,
    /**
    * SpeedDial open/close actions occur with the FlipLeftDown animation effect.
    */
    FlipLeftDown = 2,
    /**
    * SpeedDial open/close actions occur with the FlipLeftUp animation effect.
    */
    FlipLeftUp = 3,
    /**
    * SpeedDial open/close actions occur with the FlipRightDown animation effect.
    */
    FlipRightDown = 4,
    /**
    * SpeedDial open/close actions occur with the FlipRightUp animation effect.
    */
    FlipRightUp = 5,
    /**
    * SpeedDial open/close actions occur with the FlipXDown animation effect.
    */
    FlipXDown = 6,
    /**
    * SpeedDial open/close actions occur with the FlipXUp animation effect.
    */
    FlipXUp = 7,
    /**
    * SpeedDial open/close actions occur with the FlipYLeft animation effect.
    */
    FlipYLeft = 8,
    /**
    * SpeedDial open/close actions occur with the FlipYRight animation effect.
    */
    FlipYRight = 9,
    /**
    * SpeedDial open/close actions occur with the SlideBottom animation effect.
    */
    SlideBottom = 10,
    /**
    * SpeedDial open/close actions occur with the SlideLeft animation effect.
    */
    SlideLeft = 11,
    /**
    * SpeedDial open/close actions occur with the SlideRight animation effect.
    */
    SlideRight = 12,
    /**
    * SpeedDial open/close actions occur with the SlideTop animation effect.
    */
    SlideTop = 13,
    /**
    * SpeedDial open/close actions occur with the Zoom animation effect.
    */
    Zoom = 14,
    /**
    * SpeedDial open/close actions occur without any animation effect.
    */
    None = 15
}
/**
 * Provides information about the beforeOpen and beforeClose event callback.
 */
export interface SpeedDialBeforeOpenCloseEventArgs extends BaseEventArgs {
    /**
     * Provides the popup element of the speed dial.
     */
    element: HTMLElement;
    /**
     * Provides the original event which triggered the open/close action of speed dial.
     */
    event: Event;
    /**
     * Defines whether the to cancel the open/close action of speed dial.
     */
    cancel: boolean;
}
/**
 * Provides information about the open  and close event callback.
 */
export interface SpeedDialOpenCloseEventArgs extends BaseEventArgs {
    /**
     * Provides the popup element of the speed dial.
     */
    element: HTMLElement;
}
/**
 * Provides information about the beforeItemRender  and clicked event callback.
 */
export interface SpeedDialItemEventArgs extends BaseEventArgs {
    /**
     * Provides speed dial item element.
     */
    element: HTMLElement;
    /**
     * Provides speed dial item.
     */
    item: SpeedDialItemModel;
    /**
     * Provides the original event.
     */
    event?: Event;
}
/**
 * AProvides options to customize the animation applied while opening and closing the popup of SpeedDial.
 */
export declare class SpeedDialAnimationSettings extends ChildProperty<SpeedDialAnimationSettings> {
    /**
     * Defines  the type of animation effect used for opening and closing of the Speed Dial items.
     *
     * @isenumeration true
     * @default SpeedDialAnimationEffect.Fade
     * @asptype SpeedDialAnimationEffect
     */
    effect: string | SpeedDialAnimationEffect;
    /**
     * Defines the duration in milliseconds that the animation takes to open or close the popup.
     * @default 400
     * @aspType int
     */
    duration: number;
    /**
     * Defines the delay before starting the animation.
     * @default 0
     * @aspType int
     */
    delay: number;
}
/**
 * Provides the options to customize the speed dial action buttons when mode of SpeedDial is Radial.
 */
export declare class RadialSettings extends ChildProperty<RadialSettings> {
    /**
     * Defines speed dial action items placement order.
     * The possible values are
     * * Clockwise
     * * AntiClockwise
     * * Auto
     *
     * @isenumeration true
     * @default RadialDirection.Auto
     * @asptype RadialDirection
     */
    direction: string | RadialDirection;
    /**
     * Defines end angle of speed dial items placement. The accepted value range is 0 to 360.
     * When a value is outside the accepted value range, then the provided value is ignored, and the angle is calculated based on the position.
     *
     * @default -1
     * @aspType int
     */
    endAngle: number;
    /**
     * Defines distance of speed dial items placement from the button of Speed Dial.
     *
     * @default '100px'
     * @aspType string
     */
    offset: string | number;
    /**
     * Defines start angle of speed dial items placement. The accepted value range is 0 to 360.
     * When a value is outside the accepted value range, then the provided value is ignored, and the angle is calculated based on the position.
     *
     * @default -1
     * @aspType int
     */
    startAngle: number;
}
/**
 * Defines the items of Floating Action Button.
 */
export declare class SpeedDialItem extends ChildProperty<SpeedDialItem> {
    /**
     * Defines one or more CSS classes to include an icon or image in speed dial item.
     *
     * @default ''
     */
    iconCss: string;
    /**
     * Defines a unique value for the SpeedDialItem which can be used to identify the item in event args.
     *
     * @default ''
     */
    id: string;
    /**
     * Defines the text content of SpeedDialItem.
     * Text won't be visible when mode is Radial.
     * Also, in Linear mode, text won't be displayed when direction is Left or Right.
     *
     * @default ''
     */
    text: string;
    /**
     * Defines the title of SpeedDialItem to display tooltip.
     *
     * @default ''
     */
    title: string;
    /**
     * Defines whether to enable or disable the SpeedDialItem.
     *
     * @default false
     */
    disabled: boolean;
}
/**
 * The SpeedDial component that appears in front of all the contents of the page and displays list of action buttons on click which is an extended version of FAB.
 * The button of speed dial is positioned in relative to a view port of browser or the .
 * It can display a menu of related actions or a custom content popupTemplate>.
 *
 */
export declare class SpeedDial extends Component<HTMLButtonElement> implements INotifyPropertyChanged {
    /**
     * Provides options to customize the animation applied while opening and closing the popup of speed dial
     *
     * @default { effect: 'Fade', duration: 400, delay: 0 }
     */
    animation: SpeedDialAnimationSettingsModel;
    /**
     * Defines the content for the button of SpeedDial.
     *
     * @default ''
     */
    content: string;
    /**
     * Defines one or more CSS classes to include an icon or image to denote the speed dial is opened and displaying menu items.
     *
     * @default ''
     */
    closeIconCss: string;
    /**
     * Defines one or more CSS classes to customize the appearance of SpeedDial.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * Defines the speed dial item display direction when mode is linear .
     * The possible values are
     * * Up
     * * Down
     * * Left
     * * Right
     * * Auto
     *
     * @isenumeration true
     * @default LinearDirection.Auto
     * @asptype LinearDirection
     */
    direction: string | LinearDirection;
    /**
     * Defines whether to enable or disable the SpeedDial.
     *
     * @default false.
     */
    disabled: boolean;
    /**
     * Defines the position of icon in the button of speed dial.
     * The possible values are:
     * * Left
     * * Right
     *
     * @default "left"
     */
    iconPosition: IconPosition;
    /**
     * Defines the list of SpeedDial items.
     *
     * @default []
     */
    items: SpeedDialItemModel[];
    /**
    * Defines the template content for the speed dial item.
    *
    * @default ''
    */
    itemTemplate: string;
    /**
     * Defines the display mode of speed dial action items.
     * The possible values are:
     * * Linear
     * * Radial
     *
     * @isenumeration true
     * @default SpeedDialMode.Linear
     * @asptype SpeedDialMode
     */
    mode: string | SpeedDialMode;
    /**
     * Defines one or more CSS classes to include an icon or image for the button of SpeedDial when it's closed.
     *
     * @default ''
     */
    openIconCss: string;
    /**
     * Defines whether to open the popup when the button of SpeedDial is hovered.
     * By default, SpeedDial opens popup on click action.
     *
     * @default false
     */
    opensOnHover: boolean;
    /**
     * Defines the position of the button of Speed Dial relative to target.
     * Defines the position of the FAB relative to target.
     * The possible values are:
     * * TopLeft: Positions the FAB at the target's top left corner.
     * * TopCenter: Positions the FAB at the target's top left corner.
     * * TopRight: Positions the FAB at the target's top left corner.
     * * MiddleLeft: Positions the FAB at the target's top left corner.
     * * MiddleCenter: Positions the FAB at the target's top left corner.
     * * MiddleRight: Positions the FAB at the target's top left corner.
     * * BottomLeft: Positions the FAB at the target's top left corner.
     * * BottomCenter: Places the FAB on the bottom-center position of the target.
     * * BottomRight: Positions the FAB at the target's bottom right corner.
     *  To refresh the position of FAB on target resize, use refreshPosition method.
     *  The position will be refreshed automatically when browser resized.
     *
     * @isenumeration true
     * @default FabPosition.BottomRight
     * @asptype FabPosition
     */
    position: string | FabPosition;
    /**
     * Defines whether the speed dial popup can be displayed as modal or modal less.
     * When enabled, the Speed dial creates an overlay that disables interaction with other elements other than speed dial items.
     * If user clicks anywhere other than speed dial items then popup will get closed.
     *
     * @default false.
     */
    modal: boolean;
    /**
     * Defines a template content for popup of SpeedDial.
     *
     * @default ''
     */
    popupTemplate: string;
    /**
     * Provides the options to customize the speed dial action buttons when mode of speed dial is radial
     *
     * @default { startAngle: null, endAngle: null, direction: 'Auto' }
     */
    radialSettings: RadialSettingsModel;
    /**
     * Defines the selector that points to the element in which the button of SpeedDial will be positioned.
     * By default button is positioned based on viewport of browser.
     * The target element must have relative position, else Button will get positioned based on the closest element which has relative position.
     *
     * @default ''
     */
    target: string | HTMLElement;
    /**
     * Defines whether the SpeedDial is visible or hidden.
     *
     * @default true.
     */
    visible: boolean;
    /**
     * Event callback that is raised before the speed dial popup is closed.
     *
     * @event beforeClose
     */
    beforeClose: EmitType<SpeedDialBeforeOpenCloseEventArgs>;
    /**
     * Event callback that is raised before rendering the speed dial item.
     *
     * @event beforeItemRender
     */
    beforeItemRender: EmitType<SpeedDialItemEventArgs>;
    /**
     * Event callback that is raised before the speed dial popup is opened.
     *
     * @event beforeOpen
     */
    beforeOpen: EmitType<SpeedDialBeforeOpenCloseEventArgs>;
    /**
     * Event callback that is raised after rendering the speed dial.
     *
     * @event created
     */
    created: EmitType<Event>;
    /**
     * Event callback that is raised when a speed dial action item is clicked.
     *
     * @event clicked
     */
    clicked: EmitType<SpeedDialItemEventArgs>;
    /**
     * Event callback that is raised when the SpeedDial popup is closed.
     *
     * @event onClose
     */
    onClose: EmitType<SpeedDialOpenCloseEventArgs>;
    /**
     * Event callback that is raised when the SpeedDial popup is opened.
     *
     * @event onOpen
     */
    onOpen: EmitType<SpeedDialOpenCloseEventArgs>;
    private fab;
    private targetEle;
    private isFixed;
    private isMenuOpen;
    private popupEle;
    private overlayEle;
    private actualLinDirection;
    private isClock;
    private isVertical;
    private isControl;
    private focusedIndex;
    private keyboardModule;
    private popupKeyboardModule;
    private removeRippleEffect;
    private keyConfigs;
    /**
    * Constructor for creating the widget
    *
    * @param  {SpeedDialModel} options - Specifies the floating action button model
    * @param  {string|HTMLButtonElement} element - Specifies the target element
    */
    constructor(options?: SpeedDialModel, element?: string | HTMLButtonElement);
    /**
     * Initialize the control rendering
     *
     * @returns {void}
     * @private
     */
    protected render(): void;
    protected preRender(): void;
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist data
     */
    protected getPersistData(): string;
    /**
     * Get component name.
     *
     * @returns {string} - Module name
     * @private
     */
    protected getModuleName(): string;
    private initialize;
    private wireEvents;
    private wirePopupEvents;
    private wireFabClick;
    private wireFabHover;
    createPopup(): void;
    private createOverlay;
    private popupClick;
    private bodyClickHandler;
    private fabClick;
    private setPopupContent;
    private appendTemplate;
    private getTemplateString;
    private updatePopupTemplate;
    private createUl;
    private createItems;
    private setRTL;
    private checkTarget;
    private setVisibility;
    private popupMouseLeaveHandle;
    private mouseOverHandle;
    private mouseLeaveHandle;
    private popupKeyActionHandler;
    private keyActionHandler;
    private focusFirstElement;
    private focusLastElement;
    private focusLinearElement;
    private focusLeftRightElement;
    private focusUpDownElement;
    private focusPrevElement;
    private focusNextElement;
    private setFocus;
    private removeFocus;
    private getPosition;
    private updatePositionProperties;
    private setPositionProps;
    private validateDirection;
    private setMaxSize;
    private setLinearPosition;
    private setLinearHorizontalPosition;
    private setLeft;
    private setRight;
    private setPosition;
    private setHorizontalPosition;
    private setRadialPosition;
    private setRadialCorner;
    private getActualRange;
    private checkAngleRange;
    private checkAngle;
    private clearPosition;
    private clearHorizontalPosition;
    private clearOverflow;
    private hidePopupEle;
    private startHide;
    private endHide;
    private showPopupEle;
    private startShow;
    private endShow;
    private toggleOverlay;
    private removeOverlayEle;
    private updatePopupItems;
    private handleResize;
    private triggerItemClick;
    /**
     * Opens the SpeedDial popup to display to display the speed dial items or the popupTemplate.
     *
     * @private
     */
    show(): void;
    /**
     * Closes the SpeedDial popup.
     *
     */
    hide(): void;
    /**
     * Refreshes the button position of speed dial. You can call this method to re-position button when the target is resized.
     *
     */
    refreshPosition(): void;
    private resizeHandler;
    private clearItems;
    private unwireEvents;
    private unwireFabClick;
    private unwireFabHover;
    private unwirePopupEvents;
    destroy(): void;
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {SpeedDialModel} newProp - Specifies new properties
     * @param  {SpeedDialModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: SpeedDialModel, oldProp?: SpeedDialModel): void;
}
