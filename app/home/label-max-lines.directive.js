"use strict";
// Usage: <Label maxLines="3" .. />
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var label_1 = require("tns-core-modules/ui/label");
var LabelMaxLinesDirective = /** @class */ (function () {
    function LabelMaxLinesDirective(el) {
        this.el = el;
    }
    Object.defineProperty(LabelMaxLinesDirective.prototype, "nativeView", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    LabelMaxLinesDirective.prototype.ngOnInit = function () {
        var _this = this;
        var nativeView = this.nativeView;
        if (nativeView instanceof label_1.Label) {
            console.log('@@@@@@@@@@@@@', this.maxLines);
            nativeView.on(label_1.Label.loadedEvent, function () {
                _this.applyMaxLines();
            });
        }
    };
    LabelMaxLinesDirective.prototype.ngOnChanges = function (changes) {
        if (changes.maxLines) {
            this.applyMaxLines();
        }
    };
    LabelMaxLinesDirective.prototype.applyMaxLines = function () {
        var _this = this;
        var nativeView = this.nativeView;
        var maxLines = Math.max(Number(this.maxLines) || 0, 1);
        if (nativeView.android) {
            nativeView.android.setMaxLines(maxLines);
            nativeView.android.setEllipsize(android.text.TextUtils.TruncateAt.END);
        }
        else if (nativeView.ios) {
            setTimeout(function () {
                console.log('*****', _this.maxLines);
                nativeView.ios.numberOfLines = maxLines;
                nativeView.ios.adjustsFontSizeToFitWidth = false;
                nativeView.ios.lineBreakMode = NSLineBreakMode.ByTruncatingTail;
            }, 0);
        }
    };
    __decorate([
        core_1.Input('maxLines'),
        __metadata("design:type", Object)
    ], LabelMaxLinesDirective.prototype, "maxLines", void 0);
    LabelMaxLinesDirective = __decorate([
        core_1.Directive({
            selector: 'Label[maxLines]',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], LabelMaxLinesDirective);
    return LabelMaxLinesDirective;
}());
exports.LabelMaxLinesDirective = LabelMaxLinesDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwtbWF4LWxpbmVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhYmVsLW1heC1saW5lcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1DQUFtQzs7QUFFbkMsc0NBQWdGO0FBQ2hGLG1EQUFrRDtBQU9sRDtJQU9JLGdDQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7SUFKdkMsc0JBQVcsOENBQVU7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBSU0seUNBQVEsR0FBZjtRQUFBLGlCQVNDO1FBUkcsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVuQyxJQUFJLFVBQVUsWUFBWSxhQUFLLEVBQUU7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLFVBQVUsQ0FBQyxFQUFFLENBQUMsYUFBSyxDQUFDLFdBQVcsRUFBRTtnQkFDN0IsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRU0sNENBQVcsR0FBbEIsVUFBbUIsT0FBWTtRQUMzQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVPLDhDQUFhLEdBQXJCO1FBQUEsaUJBZ0JDO1FBZkcsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVuQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpELElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUNwQixVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUU7YUFBTSxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO2dCQUN4QyxVQUFVLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztnQkFDakQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDO1lBQ3BFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNUO0lBQ0wsQ0FBQztJQXpDa0I7UUFBbEIsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7NERBQWlCO0lBRDFCLHNCQUFzQjtRQUhsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtTQUM5QixDQUFDO3lDQVEwQixpQkFBVTtPQVB6QixzQkFBc0IsQ0EyQ2xDO0lBQUQsNkJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBVc2FnZTogPExhYmVsIG1heExpbmVzPVwiM1wiIC4uIC8+XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQsIE5TTGluZUJyZWFrTW9kZTogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ0xhYmVsW21heExpbmVzXScsXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsTWF4TGluZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCdtYXhMaW5lcycpIHB1YmxpYyBtYXhMaW5lcztcblxuICAgIHB1YmxpYyBnZXQgbmF0aXZlVmlldygpOiBMYWJlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZVZpZXcgPSB0aGlzLm5hdGl2ZVZpZXc7XG5cbiAgICAgICAgaWYgKG5hdGl2ZVZpZXcgaW5zdGFuY2VvZiBMYWJlbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0BAQEBAQEBAQEBAQEAnLCB0aGlzLm1heExpbmVzKTtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcub24oTGFiZWwubG9hZGVkRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5TWF4TGluZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xuICAgICAgICBpZiAoY2hhbmdlcy5tYXhMaW5lcykge1xuICAgICAgICAgICAgdGhpcy5hcHBseU1heExpbmVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGx5TWF4TGluZXMoKSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZVZpZXcgPSB0aGlzLm5hdGl2ZVZpZXc7XG5cbiAgICAgICAgY29uc3QgbWF4TGluZXMgPSBNYXRoLm1heChOdW1iZXIodGhpcy5tYXhMaW5lcykgfHwgMCwgMSk7XG5cbiAgICAgICAgaWYgKG5hdGl2ZVZpZXcuYW5kcm9pZCkge1xuICAgICAgICAgICAgbmF0aXZlVmlldy5hbmRyb2lkLnNldE1heExpbmVzKG1heExpbmVzKTtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcuYW5kcm9pZC5zZXRFbGxpcHNpemUoYW5kcm9pZC50ZXh0LlRleHRVdGlscy5UcnVuY2F0ZUF0LkVORCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmF0aXZlVmlldy5pb3MpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKicsIHRoaXMubWF4TGluZXMpO1xuICAgICAgICAgICAgICAgIG5hdGl2ZVZpZXcuaW9zLm51bWJlck9mTGluZXMgPSBtYXhMaW5lcztcbiAgICAgICAgICAgICAgICBuYXRpdmVWaWV3Lmlvcy5hZGp1c3RzRm9udFNpemVUb0ZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbmF0aXZlVmlldy5pb3MubGluZUJyZWFrTW9kZSA9IE5TTGluZUJyZWFrTW9kZS5CeVRydW5jYXRpbmdUYWlsO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19