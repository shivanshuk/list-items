import { Directive, ElementRef, OnInit } from '@angular/core';
import { LayoutBase, ViewBase } from 'tns-core-modules/ui/layouts/layout-base';
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";

class ScreenInfo {
    constructor(
        public heightDIPs: number,
        public heightPixels: number,
        public scale: number,
        public widthDIPs: number,
        public widthPixels: number
    ) { }
}

@Directive({
    selector: 'GridLayout[styleChanger]',
})

export class StyleChanger implements OnInit {

    public screenInformation: ScreenInfo;

    public get nativeViewGrid(): LayoutBase {
        return this.el.nativeElement;
    }

    constructor(private el: ElementRef) {
        this.screenInformation = new ScreenInfo(
            screen.mainScreen.heightDIPs,
            screen.mainScreen.heightPixels,
            screen.mainScreen.scale,
            screen.mainScreen.widthDIPs,
            screen.mainScreen.widthPixels);
    }

    public ngOnInit() {
        const nativeViewGrid = this.nativeViewGrid;

        console.log("Device Width", this.screenInformation.widthDIPs);
        console.log("Device Height", this.screenInformation.heightDIPs);
        if (this.screenInformation.widthDIPs > 500 && this.screenInformation.heightDIPs > 800) {
            nativeViewGrid.eachChild((child: ViewBase) => {
                if (child.getViewById('prflLbls')) {
                    child.className = 'bigPrflLblsCls';
                }
                return true;
            });
        } else if (this.screenInformation.widthDIPs < 350 && this.screenInformation.heightDIPs < 600) {
            nativeViewGrid.eachChild((child: ViewBase) => {
                if (child.getViewById('prflLbls')) {
                    child.className = 'smlPrflLblsClass';
                }
                return true;
            });
        }

    }

}