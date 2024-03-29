import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
export interface NativeChatConfig {
    botId: string;
    channelId: string;
    channelToken: string;
    gtmId?: string;
    session?: Session;
    user?: User;
}
export interface User {
    id?: string;
    name?: string;
}
export interface Session {
    clear?: boolean;
    context?: object;
    userMessage?: string;
}
export declare class NativeChat extends GridLayout {
    private _webView;
    private _config;
    private webChatConfig;
    config: NativeChatConfig;
    constructor();
    private webViewLoaded(args);
    private configPropertyChange(data);
    private updateUrl();
}
