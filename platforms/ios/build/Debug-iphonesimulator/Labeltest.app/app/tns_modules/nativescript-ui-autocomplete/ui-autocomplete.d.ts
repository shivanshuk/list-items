import * as commonModule from "./ui-autocomplete.common";
export * from "./ui-autocomplete.common";
export declare namespace knownTemplates {
    const suggestionItemTemplate = "suggestionItemTemplate";
}
export declare class SuggestionView extends commonModule.SuggestionView {
    private _ios;
    constructor();
    preparingCell: boolean;
    ios: UIView;
    updateView(): void;
    private updateHeight;
    private updateTemplate;
    protected onSuggestionViewHeightChanged(oldValue: number, newValue: number): void;
    protected onSuggestionItemTemplateChanged(oldValue: string, newValue: string): void;
}
export declare class TokenModel extends commonModule.TokenModel {
    private _ios;
    constructor(text: string, image: any);
    readonly ios: TKAutoCompleteToken;
}
export declare class RadAutoCompleteTextView extends commonModule.RadAutoCompleteTextView {
    private _dataSource;
    private _suggestionViewDataSource;
    private _delegate;
    asyncCall: any;
    _ios: TKAutoCompleteTextView;
    _filteredItems: Array<TokenModel>;
    createNativeView(): TKAutoCompleteTextView;
    disposeNativeView(): void;
    resetAutocomplete(): void;
    readonly filteredItems: Array<TokenModel>;
    addToken(token: TokenModel): void;
    insertTokenAtIndex(token: TokenModel, index: number): void;
    removeToken(token: TokenModel): void;
    removeTokenAtIndex(index: number): void;
    removeAllTokens(): void;
    tokens(): () => NSArray<any>;
    tokenAtIndex(index: number): TKAutoCompleteToken;
    tokenModelWithText(text: string): commonModule.TokenModel;
    private adjustCompletionMode;
    private adjustDisplayMode;
    private adjustSuggestMode;
    private adjustLayoutMode;
}
