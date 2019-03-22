import { RadChartBase } from "../../ui-chart.common";
import { ViewBase, Property } from "tns-core-modules/ui/core/view";
export declare class CartesianChartAnnotation extends ViewBase {
    protected _owner: RadChartBase;
    axisId: string;
    zPosition: string;
    hidden: boolean;
    strokeWidth: number;
    strokeColor: string;
    strokeDashPattern: string;
    static axisIdProperty: Property<CartesianChartAnnotation, string>;
    static zPositionProperty: Property<CartesianChartAnnotation, string>;
    static hiddenProperty: Property<CartesianChartAnnotation, boolean>;
    static strokeWidthProperty: Property<CartesianChartAnnotation, number>;
    static strokeColorProperty: Property<CartesianChartAnnotation, string>;
    static strokeDashPatternProperty: Property<CartesianChartAnnotation, string>;
    private onAxisIdPropertyChanged;
    private onZPositionPropertyChanged;
    private onHiddenPropertyChanged;
    private onStrokeWidthPropertyChanged;
    private onStrokeColorPropertyChanged;
    private onStrokeDashPatternPropertyChanged;
    protected onAxisIdChanged(oldValue: string, newValue: string): void;
    protected onZPositionChanged(oldValue: string, newValue: string): void;
    protected onHiddenChanged(oldValue: boolean, newValue: boolean): void;
    protected onStrokeWidthChanged(oldValue: number, newValue: number): void;
    protected onStrokeColorChanged(oldValue: string, newValue: string): void;
    protected onStrokeDashPatternChanged(oldValue: string, newValue: string): void;
    protected onOwnerChanged(): void;
    owner: RadChartBase;
}
export declare class ChartGridLineAnnotation extends CartesianChartAnnotation {
    value: any;
    static valueProperty: Property<ChartGridLineAnnotation, any>;
    private onValuePropertyChanged;
    protected onValueChanged(oldValue: any, newValue: any): void;
}
export declare class ChartPlotBandAnnotation extends CartesianChartAnnotation {
    minValue: any;
    maxValue: any;
    fillColor: string;
    static minValueProperty: Property<ChartPlotBandAnnotation, any>;
    static maxValueProperty: Property<ChartPlotBandAnnotation, any>;
    static fillColorProperty: Property<ChartPlotBandAnnotation, string>;
    private onMinValuePropertyChanged;
    private onMaxValuePropertyChanged;
    private onFillColorPropertyChanged;
    protected onMinValueChanged(oldValue: any, newValue: any): void;
    protected onMaxValueChanged(oldValue: any, newValue: any): void;
    protected onFillColorChanged(oldValue: string, newValue: string): void;
}