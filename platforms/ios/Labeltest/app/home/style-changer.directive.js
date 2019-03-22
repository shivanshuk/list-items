"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var ScreenInfo = /** @class */ (function () {
    function ScreenInfo(heightDIPs, heightPixels, scale, widthDIPs, widthPixels) {
        this.heightDIPs = heightDIPs;
        this.heightPixels = heightPixels;
        this.scale = scale;
        this.widthDIPs = widthDIPs;
        this.widthPixels = widthPixels;
    }
    return ScreenInfo;
}());
var StyleChanger = /** @class */ (function () {
    function StyleChanger(el) {
        this.el = el;
        this.screenInformation = new ScreenInfo(platform_1.screen.mainScreen.heightDIPs, platform_1.screen.mainScreen.heightPixels, platform_1.screen.mainScreen.scale, platform_1.screen.mainScreen.widthDIPs, platform_1.screen.mainScreen.widthPixels);
    }
    Object.defineProperty(StyleChanger.prototype, "nativeViewGrid", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    StyleChanger.prototype.ngOnInit = function () {
        var nativeViewGrid = this.nativeViewGrid;
        console.log("Device Width", this.screenInformation.widthDIPs);
        console.log("Device Height", this.screenInformation.heightDIPs);
        if (this.screenInformation.widthDIPs > 500 && this.screenInformation.heightDIPs > 800) {
            nativeViewGrid.eachChild(function (child) {
                if (child.getViewById('prflLbls')) {
                    child.className = 'bigPrflLblsCls';
                }
                return true;
            });
        }
        else if (this.screenInformation.widthDIPs < 350 && this.screenInformation.heightDIPs < 600) {
            nativeViewGrid.eachChild(function (child) {
                if (child.getViewById('prflLbls')) {
                    child.className = 'smlPrflLblsClass';
                }
                return true;
            });
        }
    };
    StyleChanger = __decorate([
        core_1.Directive({
            selector: 'GridLayout[styleChanger]',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], StyleChanger);
    return StyleChanger;
}());
exports.StyleChanger = StyleChanger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtY2hhbmdlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHlsZS1jaGFuZ2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RDtBQUU5RCxzREFBNkU7QUFFN0U7SUFDSSxvQkFDVyxVQUFrQixFQUNsQixZQUFvQixFQUNwQixLQUFhLEVBQ2IsU0FBaUIsRUFDakIsV0FBbUI7UUFKbkIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUMxQixDQUFDO0lBQ1QsaUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQU1EO0lBUUksc0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLFVBQVUsQ0FDbkMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUM1QixpQkFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQzlCLGlCQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFDdkIsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUMzQixpQkFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBWEQsc0JBQVcsd0NBQWM7YUFBekI7WUFDSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBV00sK0JBQVEsR0FBZjtRQUNJLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFO1lBQ25GLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFlO2dCQUNyQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQy9CLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7aUJBQ3RDO2dCQUNELE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFO1lBQzFGLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFlO2dCQUNyQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQy9CLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7aUJBQ3hDO2dCQUNELE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFFTCxDQUFDO0lBdENRLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwwQkFBMEI7U0FDdkMsQ0FBQzt5Q0FVMEIsaUJBQVU7T0FSekIsWUFBWSxDQXdDeEI7SUFBRCxtQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dEJhc2UsIFZpZXdCYXNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2xheW91dC1iYXNlJztcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuY2xhc3MgU2NyZWVuSW5mbyB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBoZWlnaHRESVBzOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBoZWlnaHRQaXhlbHM6IG51bWJlcixcbiAgICAgICAgcHVibGljIHNjYWxlOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyB3aWR0aERJUHM6IG51bWJlcixcbiAgICAgICAgcHVibGljIHdpZHRoUGl4ZWxzOiBudW1iZXJcbiAgICApIHsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ0dyaWRMYXlvdXRbc3R5bGVDaGFuZ2VyXScsXG59KVxuXG5leHBvcnQgY2xhc3MgU3R5bGVDaGFuZ2VyIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBzY3JlZW5JbmZvcm1hdGlvbjogU2NyZWVuSW5mbztcblxuICAgIHB1YmxpYyBnZXQgbmF0aXZlVmlld0dyaWQoKTogTGF5b3V0QmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnNjcmVlbkluZm9ybWF0aW9uID0gbmV3IFNjcmVlbkluZm8oXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzLFxuICAgICAgICAgICAgc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzLFxuICAgICAgICAgICAgc2NyZWVuLm1haW5TY3JlZW4uc2NhbGUsXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMsXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBuYXRpdmVWaWV3R3JpZCA9IHRoaXMubmF0aXZlVmlld0dyaWQ7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJEZXZpY2UgV2lkdGhcIiwgdGhpcy5zY3JlZW5JbmZvcm1hdGlvbi53aWR0aERJUHMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRldmljZSBIZWlnaHRcIiwgdGhpcy5zY3JlZW5JbmZvcm1hdGlvbi5oZWlnaHRESVBzKTtcbiAgICAgICAgaWYgKHRoaXMuc2NyZWVuSW5mb3JtYXRpb24ud2lkdGhESVBzID4gNTAwICYmIHRoaXMuc2NyZWVuSW5mb3JtYXRpb24uaGVpZ2h0RElQcyA+IDgwMCkge1xuICAgICAgICAgICAgbmF0aXZlVmlld0dyaWQuZWFjaENoaWxkKChjaGlsZDogVmlld0Jhc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZ2V0Vmlld0J5SWQoJ3ByZmxMYmxzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NOYW1lID0gJ2JpZ1ByZmxMYmxzQ2xzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcmVlbkluZm9ybWF0aW9uLndpZHRoRElQcyA8IDM1MCAmJiB0aGlzLnNjcmVlbkluZm9ybWF0aW9uLmhlaWdodERJUHMgPCA2MDApIHtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXdHcmlkLmVhY2hDaGlsZCgoY2hpbGQ6IFZpZXdCYXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmdldFZpZXdCeUlkKCdwcmZsTGJscycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTmFtZSA9ICdzbWxQcmZsTGJsc0NsYXNzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59Il19