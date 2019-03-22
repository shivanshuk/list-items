"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        //public myItems: ObservableArray<any>;
        this.items$ = new rxjs_1.BehaviorSubject([]);
        this.items = [];
        // { "title": "Javascript" },
        // { "title": "Vue" },
        // { "title": "React" }
        this.ctr = 0;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.toggleCheck = function () {
        this.FirstCheckBox.nativeElement.toggle();
    };
    HomeComponent.prototype.getCheckProp = function () {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    };
    HomeComponent.prototype.addItems = function () {
        this.isList = true;
        this.items.push(this.folderNumber);
        console.log(this.folderNumber);
        // if (this.ctr < 4) {
        this.items$.next(this.items$.getValue().concat([this.items[this.ctr]]));
        this.ctr++;
        // } else return;
        this.folderNumber = "";
    };
    HomeComponent.prototype.printData = function (data) {
        console.log(data);
        var items_updated = this.items$.getValue();
        items_updated.forEach(function (item, index) {
            if (item === data) {
                items_updated.splice(index, 1);
            }
        });
        this.items$.next(items_updated);
    };
    HomeComponent.prototype.test = function () {
        console.log("release all tapped");
    };
    HomeComponent.prototype.releaseAll = function () {
        console.log("release all tapped");
        this.items$.next(null);
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "FirstCheckBox", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSw2QkFBdUM7QUFRdkM7SUFlSTtRQWJBLHVDQUF1QztRQUNoQyxXQUFNLEdBQWdDLElBQUksc0JBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUdyRSxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLDZCQUE2QjtRQUM3QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLFFBQUcsR0FBRyxDQUFDLENBQUM7SUFNUixDQUFDO0lBRUQsZ0NBQVEsR0FBUixjQUFrQixDQUFDO0lBRVosbUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ00sb0NBQVksR0FBbkI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsSUFBUztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsSUFBSSxhQUFhLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsRCxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFDOUIsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQUU7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBekNpQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBZ0IsaUJBQVU7d0RBQUM7SUFibkMsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzs7T0FDVyxhQUFhLENBdUR6QjtJQUFELG9CQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLy9wdWJsaWMgbXlJdGVtczogT2JzZXJ2YWJsZUFycmF5PGFueT47XG4gICAgcHVibGljIGl0ZW1zJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gICAgZXh0ZXJuYWxVc2VySWQ6IHN0cmluZztcbiAgICBmb2xkZXJOdW1iZXI6IHN0cmluZztcbiAgICBpdGVtczogYW55W10gPSBbXTtcbiAgICAvLyB7IFwidGl0bGVcIjogXCJKYXZhc2NyaXB0XCIgfSxcbiAgICAvLyB7IFwidGl0bGVcIjogXCJWdWVcIiB9LFxuICAgIC8vIHsgXCJ0aXRsZVwiOiBcIlJlYWN0XCIgfVxuICAgIGN0ciA9IDA7XG4gICAgaXNMaXN0OiBib29sZWFuO1xuXG4gICAgQFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCkge1xuICAgICAgICB0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC50b2dnbGUoKTtcbiAgICB9XG4gICAgcHVibGljIGdldENoZWNrUHJvcCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrZWQgcHJvcCB2YWx1ZSA9ICcgKyB0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkKTtcbiAgICB9XG4gICAgYWRkSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuaXNMaXN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMuZm9sZGVyTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb2xkZXJOdW1iZXIpO1xuICAgICAgICAvLyBpZiAodGhpcy5jdHIgPCA0KSB7XG4gICAgICAgIHRoaXMuaXRlbXMkLm5leHQoWy4uLnRoaXMuaXRlbXMkLmdldFZhbHVlKCksIHRoaXMuaXRlbXNbdGhpcy5jdHJdXSk7XG4gICAgICAgIHRoaXMuY3RyKys7XG4gICAgICAgIC8vIH0gZWxzZSByZXR1cm47XG4gICAgICAgIHRoaXMuZm9sZGVyTnVtYmVyID0gXCJcIjtcbiAgICB9XG5cbiAgICBwcmludERhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGxldCBpdGVtc191cGRhdGVkOiBhbnlbXSA9IHRoaXMuaXRlbXMkLmdldFZhbHVlKCk7XG4gICAgICAgIGl0ZW1zX3VwZGF0ZWQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBkYXRhKSB7IGl0ZW1zX3VwZGF0ZWQuc3BsaWNlKGluZGV4LCAxKTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pdGVtcyQubmV4dChpdGVtc191cGRhdGVkKTtcbiAgICB9XG5cbiAgICB0ZXN0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVsZWFzZSBhbGwgdGFwcGVkXCIpO1xuICAgIH1cblxuICAgIHJlbGVhc2VBbGwoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVsZWFzZSBhbGwgdGFwcGVkXCIpO1xuICAgICAgICB0aGlzLml0ZW1zJC5uZXh0KG51bGwpO1xuICAgIH1cbn1cbiJdfQ==