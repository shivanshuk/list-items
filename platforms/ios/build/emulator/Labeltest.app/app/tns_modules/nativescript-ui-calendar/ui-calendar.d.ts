import * as commonModule from "./ui-calendar.common";
import { Color } from "tns-core-modules/color";
export * from "./ui-calendar.common";
export declare class CalendarEvent extends commonModule.CalendarEvent {
    private _ios;
    readonly ios: TKCalendarEvent;
    protected _setIsAllDay(value: boolean): void;
    protected _getIsAllDay(): boolean;
    protected _setEndDate(date: Date): void;
    protected _getEndDate(): Date;
    protected _setStartDate(date: Date): void;
    protected _getStartDate(): Date;
    protected _setTitle(value: string): void;
    protected _getTitle(): string;
    protected _setEventColor(value: Color): void;
    protected _getEventColor(): Color;
}
export declare class CellStyleInitializer {
    onCellBorderWidthChanged(oldValue: number, newValue: number, style: CellStyle | commonModule.CellStyle): void;
    onCellBorderColorChanged(oldValue: string, newValue: string, style: CellStyle | commonModule.CellStyle): void;
    onCellBackgroundColorChanged(oldValue: string, newValue: string, style: CellStyle | commonModule.CellStyle): void;
    onCellAlignmentChanged(oldValue: any, newValue: any, style: any): void;
    onCellPaddingHorizontalChanged(oldValue: number, newValue: number, style: any): void;
    onCellPaddingVerticalChanged(oldValue: number, newValue: number, style: any): void;
    onCellTextColorChanged(oldValue: string, newValue: string, style: CellStyle | commonModule.CellStyle): void;
    onCellTextFontNameChanged(oldValue: string, newValue: string, style: CellStyle | commonModule.CellStyle): void;
    onCellTextFontStyleChanged(oldValue: string, newValue: string, style: CellStyle | commonModule.CellStyle): void;
    onCellTextSizeChanged(oldValue: number, newValue: number, style: CellStyle | commonModule.CellStyle): void;
}
export declare class CellStyle extends commonModule.CellStyle {
    private _initializer;
    readonly initializer: CellStyleInitializer;
    private _ios;
    readonly ios: TKCalendarCellStyle;
    constructor();
    protected onCellBorderWidthChanged(oldValue: number, newValue: number): void;
    protected onCellBorderColorChanged(oldValue: string, newValue: string): void;
    protected onCellBackgroundColorChanged(oldValue: string, newValue: string): void;
    protected onCellTextColorChanged(oldValue: string, newValue: string): void;
    protected onCellTextFontNameChanged(oldValue: string, newValue: string): void;
    protected onCellTextFontStyleChanged(oldValue: string, newValue: string): void;
    protected onCellTextSizeChanged(oldValue: number, newValue: number): void;
    protected onCellPaddingHorizontalChanged(oldValue: number, newValue: number): void;
    protected onCellPaddingVerticalChanged(oldValue: number, newValue: number): void;
    protected onCellAlignmentChanged(oldValue: any, newValue: any): void;
}
export declare class DayEventsViewStyle extends commonModule.DayEventsViewStyle {
    private _owner;
    owner: RadCalendar;
    updateNativePresenter(): void;
    protected onBackgroundColorChanged(oldValue: string, newValue: string): void;
    protected onTimeLabelTextColorChanged(oldValue: string, newValue: string): void;
    protected onTimeLabelTextSizeChanged(oldValue: number, newValue: number): void;
    protected onTimeLabelFormatChanged(oldValue: string, newValue: string): void;
}
export declare class AllDayEventsViewStyle extends commonModule.AllDayEventsViewStyle {
    private _owner;
    owner: RadCalendar;
    updateNativePresenter(): void;
    protected onBackgroundColorChanged(oldValue: string, newValue: string): void;
    protected onAllDayTextChanged(oldValue: string, newValue: string): void;
    protected onAllDayTextIsVisibleChanged(oldValue: boolean, newValue: boolean): void;
}
export declare class DayCellStyle extends commonModule.DayCellStyle {
    private _initializer;
    readonly initializer: CellStyleInitializer;
    private _ios;
    readonly ios: TKCalendarDayCellStyle;
    constructor();
    protected onCellBorderWidthChanged(oldValue: number, newValue: number): void;
    protected onCellBorderColorChanged(oldValue: string, newValue: string): void;
    protected onCellBackgroundColorChanged(oldValue: string, newValue: string): void;
    protected onCellTextColorChanged(oldValue: string, newValue: string): void;
    protected onCellTextFontNameChanged(oldValue: string, newValue: string): void;
    protected onCellTextFontStyleChanged(oldValue: string, newValue: string): void;
    protected onCellTextSizeChanged(oldValue: number, newValue: number): void;
    protected onCellPaddingHorizontalChanged(oldValue: number, newValue: number): void;
    protected onCellPaddingVerticalChanged(oldValue: number, newValue: number): void;
    protected onCellAlignmentChanged(oldValue: any, newValue: any): void;
    protected onShowEventsTextChanged(oldValue: boolean, newValue: boolean): void;
    protected onEventTextColorChanged(oldValue: string, newValue: string): void;
    protected onEventFontNameChanged(oldValue: string, newValue: string): void;
    protected onEventFontStyleChanged(oldValue: string, newValue: string): void;
    protected onEventTextSizeChanged(oldValue: number, newValue: number): void;
}
/**
 * Cell style class for months in year view mode
 */
export declare class MonthCellStyle extends commonModule.MonthCellStyle {
    protected _owner: RadCalendar;
    owner: RadCalendar;
    updateNativePresenter(): void;
    protected onWeekendTextColorChanged(oldValue: string, newValue: string): void;
    protected onTodayTextColorChanged(oldValue: string, newValue: string): void;
    protected onDayTextColorChanged(oldValue: string, newValue: string): void;
    protected onDayFontNameChanged(oldValue: string, newValue: string): void;
    protected onDayFontStyleChanged(oldValue: string, newValue: string): void;
    protected onDayTextSizeChanged(oldValue: number, newValue: number): void;
    protected onDayNameTextColorChanged(oldValue: string, newValue: string): void;
    protected onDayNameFontNameChanged(oldValue: string, newValue: string): void;
    protected onDayNameFontStyleChanged(oldValue: string, newValue: string): void;
    protected onDayNameTextSizeChanged(oldValue: number, newValue: number): void;
    protected onMonthNameTextColorChanged(oldValue: string, newValue: string): void;
    protected onMonthNameFontNameChanged(oldValue: string, newValue: string): void;
    protected onMonthNameFontStyleChanged(oldValue: string, newValue: string): void;
    protected onMonthNameTextSizeChanged(oldValue: number, newValue: number): void;
}
/**
 * Cell style class for inline events cells in month view
 * property values are used by TKCalendarMonthPresenterDelegateImplementation delegate that's why we don't need extra actions for update
 */
export declare class InlineEventCellStyle extends commonModule.InlineEventCellStyle {
    protected onCellBackgroundColorChanged(oldValue: string, newValue: string): void;
    protected onEventTextColorChanged(oldValue: string, newValue: string): void;
    protected onEventFontNameChanged(oldValue: string, newValue: string): void;
    protected onEventFontStyleChanged(oldValue: string, newValue: string): void;
    protected onEventTextSizeChanged(oldValue: number, newValue: number): void;
    protected onTimeTextColorChanged(oldValue: string, newValue: string): void;
    protected onTimeFontNameChanged(oldValue: string, newValue: string): void;
    protected onTimeFontStyleChanged(oldValue: string, newValue: string): void;
    protected onTimeTextSizeChanged(oldValue: number, newValue: number): void;
}
/**
 * Class for month view style
 */
export declare class CalendarMonthViewStyle extends commonModule.CalendarMonthViewStyle {
    protected _owner: RadCalendar;
    owner: RadCalendar;
    updateViewStyles(forceUpdate?: boolean): void;
    protected updateNativeOwner(): void;
    protected updateOwner(): void;
    protected onSelectionShapeChanged(oldValue: string, newValue: string): void;
    protected onSelectionShapeSizeChanged(oldValue: number, newValue: number): void;
    protected onSelectionShapeColorChanged(oldValue: string, newValue: string): void;
    protected onShowWeekNumbersChanged(oldValue: boolean, newValue: boolean): void;
    protected onShowTitleChanged(oldValue: boolean, newValue: boolean): void;
    protected onShowDayNamesChanged(oldValue: boolean, newValue: boolean): void;
    protected onBackgroundColorChanged(oldValue: string, newValue: string): void;
    protected onDayCellStyleChanged(oldValue: DayCellStyle, newValue: DayCellStyle): void;
    protected onSelectedDayCellStyleChanged(oldValue: DayCellStyle, newValue: DayCellStyle): void;
    protected onTodayCellStyleChanged(oldValue: DayCellStyle, newValue: DayCellStyle): void;
    protected onWeekNumberCellStyleChanged(oldValue: CellStyle, newValue: CellStyle): void;
    protected onWeekendCellStyleChanged(oldValue: CellStyle, newValue: CellStyle): void;
    protected onDayNameCellStyleChanged(oldValue: CellStyle, newValue: CellStyle): void;
    protected onTitleCellStyleChanged(oldValue: CellStyle, newValue: CellStyle): void;
    protected onInlineEventCellStyleChanged(oldValue: InlineEventCellStyle, newValue: InlineEventCellStyle): void;
}
/**
 * The style class for week mode.
 * NOTE: we should consider if we need an explicit class that is the same as the base one
 */
export declare class CalendarWeekViewStyle extends CalendarMonthViewStyle {
    protected updateNativeOwner(): void;
}
/**
 * The style class for day mode.
 */
export declare class CalendarDayViewStyle extends commonModule.CalendarDayViewStyle {
    protected _owner: RadCalendar;
    owner: RadCalendar;
    protected updateNativeOwner(): void;
    updateViewStyles(forceUpdate?: boolean): void;
    protected updateOwner(): void;
    protected onShowWeekNumbersChanged(oldValue: boolean, newValue: boolean): void;
    protected onShowTitleChanged(oldValue: boolean, newValue: boolean): void;
    protected onShowDayNamesChanged(oldValue: boolean, newValue: boolean): void;
    protected onBackgroundColorChanged(oldValue: string, newValue: string): void;
    protected onTitleCellStyleChanged(oldValue: CellStyle, newValue: CellStyle): void;
    protected onDayEventsViewStyleChanged(oldValue: DayEventsViewStyle, newValue: DayEventsViewStyle): void;
    protected onAllDayEventsViewStyleChanged(oldValue: AllDayEventsViewStyle, newValue: AllDayEventsViewStyle): void;
    protected onShowWeekChanged(oldValue: boolean, newValue: boolean): void;
    private changeShowWeek;
}
/**
 * The style class for month name view mode.
 * NOTE: we should consider if we need an explicit class that is the same as the base one
 */
export declare class CalendarMonthNamesViewStyle extends commonModule.CalendarMonthNamesViewStyle {
    constructor();
    protected _owner: RadCalendar;
    owner: RadCalendar;
    updateViewStyles(forceUpdate?: boolean): void;
    protected updateOwner(): void;
    protected onTitleCellStyleChanged(oldValue: CellStyle, newValue: CellStyle): void;
    protected onMonthNameCellStyleChanged(oldValue: CellStyle, newValue: CellStyle): void;
}
/**
 * The year mode style class
 */
export declare class CalendarYearViewStyle extends commonModule.CalendarYearViewStyle {
    constructor();
    protected _owner: RadCalendar;
    owner: RadCalendar;
    updateViewStyles(forceUpdate?: boolean): void;
    protected updateOwner(): void;
    protected onTitleCellStyleChanged(oldValue: CellStyle, newValue: CellStyle): void;
    protected onMonthCellStyleChanged(oldValue: MonthCellStyle, newValue: MonthCellStyle): void;
}
export declare class RadCalendar extends commonModule.RadCalendar {
    private _ios;
    private _dayViewDelegate;
    private _nativeDelegate;
    private _nativePresenterDelegate;
    private _dataSource;
    _forbidDateSelection: boolean;
    private _calendarLoaded;
    private _currentCalendar;
    private _dateComponents;
    readonly _nativeView: TKCalendar;
    constructor();
    createNativeView(): TKCalendar;
    onLoaded(): void;
    onUnloaded(): void;
    updateCalendar(): void;
    protected onLocalePropertyChanged(oldValue: string, newValue: string): void;
    private setNativeLocale;
    protected onDisplayedDateChanged(oldValue: Date, newValue: Date): void;
    protected getDisplayedDate(): Date;
    protected onSelectionModeChanged(oldValue: string, newValue: string): void;
    protected onTransitionModeChanged(oldValue: string, newValue: string): void;
    protected onViewModeChanged(oldValue: string, newValue: string): void;
    protected onEventsViewModeChanged(oldValue: string, newValue: string): void;
    protected onSelectedDateRangeChanged(oldValue: commonModule.DateRange, newValue: commonModule.DateRange): void;
    protected onSelectedDatesChanged(oldValue: any, newValue: any): void;
    protected onSelectedDateChanged(oldValue: any, newValue: any): void;
    protected onMaxDateChanged(oldValue: any, newValue: any): void;
    protected onMinDateChanged(oldValue: any, newValue: any): void;
    updateEventSource(): void;
    protected onHorizontalTransitionChanged(oldValue: boolean, newValue: boolean): void;
    protected onMonthViewStyleChanged(oldValue: commonModule.CalendarMonthViewStyle, newValue: commonModule.CalendarMonthViewStyle): void;
    protected onMonthNamesViewStyleChanged(oldValue: commonModule.CalendarMonthNamesViewStyle, newValue: commonModule.CalendarMonthNamesViewStyle): void;
    protected onWeekViewStyleChanged(oldValue: commonModule.CalendarWeekViewStyle, newValue: commonModule.CalendarWeekViewStyle): void;
    protected onDayViewStyleChanged(oldValue: commonModule.CalendarDayViewStyle, newValue: commonModule.CalendarDayViewStyle): void;
    protected onYearViewStyleChanged(oldValue: CalendarYearViewStyle, newValue: CalendarYearViewStyle): void;
    private loadNativeDisplayedDate;
    dateWithoutHours(originalDate: Date): Date;
    reload(): void;
    navigateForward(): void;
    navigateBack(): void;
    goToDate(date: Date): void;
    getEventsForDate(date: Date): Array<CalendarEvent>;
}
export declare class CalendarNativeDataSourceImplementation extends NSObject implements TKCalendarDataSource {
    static ObjCProtocols: {
        prototype: TKCalendarDataSource;
    }[];
    private _owner;
    private _itemsSource;
    static new(): CalendarNativeDataSourceImplementation;
    initWithSourceAndOwner(source: Array<CalendarEvent>, owner: RadCalendar): CalendarNativeDataSourceImplementation;
    initWithOwner(owner: RadCalendar): CalendarNativeDataSourceImplementation;
    itemsSource: any;
    calendarEventsForDate(calendar: TKCalendar, date: Date): NSArray<any>;
    calendarEventsFromDateToDateWithCallback(calendar: TKCalendar, fromDate: Date, toDate: Date, callback: (NSArray: any) => void): NSArray<any>;
}
export declare class TKCalendarMonthPresenterDelegateImplementation extends NSObject implements TKCalendarMonthPresenterDelegate {
    static ObjCProtocols: {
        prototype: TKCalendarMonthPresenterDelegate;
    }[];
    private _owner;
    static initWithOwner(owner: WeakRef<RadCalendar>): TKCalendarMonthPresenterDelegateImplementation;
    monthPresenterInlineEventSelected(presenter: TKCalendarMonthPresenter, event: TKCalendarEvent): void;
    monthPresenterUpdateVisualsForInlineEventCell(presenter: TKCalendarMonthPresenter, cell: TKCalendarInlineViewTableViewCell): void;
}
export declare class TKCalendarDayViewDelegateImplementation extends NSObject implements TKCalendarDayViewDelegate {
    static ObjCProtocols: {
        prototype: TKCalendarDayViewDelegate;
    }[];
    private _owner;
    static initWithOwner(owner: WeakRef<RadCalendar>): TKCalendarDayViewDelegateImplementation;
    dayViewDidSelectEvent(dayView: TKCalendarDayView, event: TKCalendarEventProtocol): void;
}
export declare class TKCalendarNativeDelegateImplementation extends NSObject implements TKCalendarDelegate {
    static ObjCProtocols: {
        prototype: TKCalendarDelegate;
    }[];
    private _owner;
    static initWithOwner(owner: WeakRef<RadCalendar>): TKCalendarNativeDelegateImplementation;
    calendarDidChangedViewModeFromTo(calendar: TKCalendar, previousViewMode: TKCalendarViewMode, viewMode: TKCalendarViewMode): void;
    calendarDidDeselectedDate(calendar: TKCalendar, date: Date): void;
    calendarDidTapCell(calendar: TKCalendar, cell: TKCalendarDayCell): void;
    calendarShouldSelectDate(calendar: TKCalendar, date: Date): boolean;
    calendarDidSelectDate(calendar: TKCalendar, date: Date): void;
    calendarDidNavigateToDate(calendar: TKCalendar, date: Date): void;
    calendarWillNavigateToDate(calendar: TKCalendar, date: Date): void;
    calendarUpdateVisualsForCell(calendar: TKCalendar, cell: TKCalendarCell): void;
    private applyWeekViewCellStyles;
    private applyDayViewCellStyles;
    private applyYearViewCellStyles;
    private applyMonthNamesViewCellStyles;
    private applyMonthViewCellStyles;
    /**
     * Generic method that applies regular day style to cell of given view mode
     */
    private applyDayCellStyleToCell;
    private applyTitleCellStyleToCell;
    private applyDayNameCellStyleToCell;
    private applyMonthNameCellStyleToCell;
    private applyWeekNumberCellStyleToCell;
    private applyCommonCellStyleProperties;
    private getViewModeFromTKCalendarViewMode;
}
