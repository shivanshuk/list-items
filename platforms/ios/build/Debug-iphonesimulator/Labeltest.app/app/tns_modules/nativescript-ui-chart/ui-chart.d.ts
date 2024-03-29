import * as commonModule from "./ui-chart.common";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import * as axisCommonModule from "./visualization/views/chart-axis.common";
import * as seriesCommonModule from "./visualization/views/chart-series.common";
import * as paletteCommonModule from "./visualization/parts/chart-palette.common";
import * as trackBallCommonModule from "./visualization/parts/chart-track-ball.common";
import * as cartesianChartGridCommonModule from "./visualization/parts/chart-cartesian-chart-grid.common";
export * from "./ui-chart.common";
export * from "./misc/chart-public-enum";
export * from "./misc/chart-event-data.common";
export * from './visualization/views/chart-legend-view';
export * from "./visualization/views/chart-axis";
export * from "./visualization/parts/chart-label-style.common";
export * from "./visualization/views/chart-series";
export * from "./visualization/parts/chart-palette.common";
export * from "./visualization/parts/chart-annotation";
export * from "./visualization/parts/chart-cartesian-chart-grid.common";
export { RadCartesianChartGrid } from "./visualization/parts/chart-cartesian-chart-grid";
export * from "./visualization/parts/chart-track-ball";
export declare class RadPieChart extends commonModule.RadPieChart {
    private _ios;
    chartPalette: TKChartPalette;
    chartSelectionPalette: TKChartPalette;
    private _delegate;
    private _loaded;
    readonly _nativeView: TKChart;
    addSeries(newSeries: TKChartPieSeries): void;
    constructor();
    createNativeView(): TKChart;
    initNativeView(): void;
    updateChart(): void;
    updateLegend(): void;
    onLoaded(): void;
    onUnloaded(): void;
    protected onSeriesChanged(oldValue: ObservableArray<any>, newValue: ObservableArray<any>): void;
    protected onSelectionModeChanged(oldValue: string, newValue: string): void;
    protected onPalettesChanged(oldValue: ObservableArray<paletteCommonModule.Palette>, newValue: ObservableArray<paletteCommonModule.Palette>): void;
    reloadPalettes(): void;
    private loadPalette;
    protected PalettesCollectionChangedInternal(data: any): void;
    private getPalettesForSeries;
    private applyPalettesToSeries;
    private buildNativePaletteForSeries;
    protected onSeriesSelectionModeChanged(oldValue: string, newValue: string): void;
    protected onPointSelectionModeChanged(oldValue: string, newValue: string): void;
    protected onAllowAnimationsChanged(oldValue: boolean, newValue: boolean): void;
}
export declare class RadCartesianChart extends commonModule.RadCartesianChart {
    private _loaded;
    private _delegate;
    private _chartSelectionPalettesMap;
    private _chartNormalPalettesMap;
    private _ios;
    readonly _nativeView: TKChart;
    constructor();
    createNativeView(): TKChart;
    initNativeView(): void;
    onLoaded(): void;
    onUnloaded(): void;
    updateChart(): void;
    updateLegend(): void;
    reloadPalettes(): void;
    protected SeriesCollectionChangedInternal(data: any): void;
    protected onSeriesChanged(oldValue: ObservableArray<any>, newValue: ObservableArray<any>): void;
    addSeries(newSeries: seriesCommonModule.CartesianSeries): void;
    getAxixByID(axisID: string): axisCommonModule.CartesianAxis;
    getAxisByID(axisID: string): axisCommonModule.CartesianAxis;
    protected AnnotationsCollectionChangedInternal(data: any): void;
    protected onAnnotationsChanged(oldValue: ObservableArray<any>, newValue: ObservableArray<any>): void;
    protected onHorizontalAxisChanged(oldValue: axisCommonModule.CartesianAxis, newValue: axisCommonModule.CartesianAxis): void;
    protected onVerticalAxisChanged(oldValue: axisCommonModule.CartesianAxis, newValue: axisCommonModule.CartesianAxis): void;
    private loadChart;
    updateZoom(): void;
    protected onGridChanged(oldValue: cartesianChartGridCommonModule.RadCartesianChartGrid, newValue: cartesianChartGridCommonModule.RadCartesianChartGrid): void;
    protected onPalettesChanged(oldValue: ObservableArray<paletteCommonModule.Palette>, newValue: ObservableArray<paletteCommonModule.Palette>): void;
    protected PalettesCollectionChangedInternal(data: any): void;
    private loadPalette;
    private getPalettesForSeries;
    private applyPalettesToSeries;
    private buildNativePaletteForSeries;
    /** Finds the corresponding palette item for selected series
     * @param index - the index of the palette item that should be used
     * @param seriesIndex - the index of series in {N} chart's series collection
     */
    getPaletteItemWithIndexForStateOfSeries(state: string, index: number, seriesIndex: number): TKChartPaletteItem;
    /**
     * Finds the series' consequent number in group of series with the same seriesName value
     */
    findConsequentIndexOfSeries(groupName: any, nativeIndex: any): number;
    protected onSelectionModeChanged(oldValue: string, newValue: string): void;
    protected onSeriesSelectionModeChanged(oldValue: string, newValue: string): void;
    protected onPointSelectionModeChanged(oldValue: string, newValue: string): void;
    protected onAllowAnimationsChanged(oldValue: boolean, newValue: boolean): void;
    protected onHorizontalZoomChanged(oldValue: number, newValue: number): void;
    protected onVerticalZoomChanged(oldValue: number, newValue: number): void;
    protected onTrackballChanged(oldValue: trackBallCommonModule.Trackball, newValue: trackBallCommonModule.Trackball): void;
}
