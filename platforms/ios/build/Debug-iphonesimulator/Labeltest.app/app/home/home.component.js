"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var page_1 = require("ui/page");
var Contract = /** @class */ (function () {
    function Contract() {
        this.isSelcted = false;
    }
    return Contract;
}());
exports.Contract = Contract;
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page) {
        this.page = page;
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
        var contract = new Contract();
        contract.folderNumb = this.folderNumber;
        this.items.push(contract);
        // if (this.ctr < 4) {
        this.items$.next(this.items$.getValue().concat([this.items[this.ctr]]));
        this.ctr++;
        // } else return;
        this.folderNumber = "";
    };
    HomeComponent.prototype.printData = function (data) {
        var items_updated = this.items$.getValue();
        items_updated.forEach(function (item, index) {
            if (item === data) {
                items_updated.splice(index, 1);
            }
        });
        this.items$.next(items_updated);
    };
    HomeComponent.prototype.releaseAll = function () {
        console.log("release all tapped");
        this.items$.next(null);
    };
    HomeComponent.prototype.selectedRow = function (i, item) {
        var selectedLabel = this.page.getViewById("item_" + i);
        if (selectedLabel.visibility && selectedLabel.visibility === "hidden") {
            selectedLabel.visibility = "visible";
            item.isSelcted = true;
        }
        else {
            selectedLabel.visibility = "hidden";
            item.isSelcted = false;
        }
    };
    HomeComponent.prototype.printArr = function () {
        console.log(this.items);
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
        __metadata("design:paramtypes", [page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSw2QkFBdUM7QUFDdkMsZ0NBQStCO0FBRy9CO0lBQUE7UUFFUSxjQUFTLEdBQVksS0FBSyxDQUFBO0lBQ2xDLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSw0QkFBUTtBQVVyQjtJQWdCSSx1QkFBcUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFkL0IsdUNBQXVDO1FBQ2hDLFdBQU0sR0FBcUMsSUFBSSxzQkFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBSTFFLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsNkJBQTZCO1FBQzdCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsUUFBRyxHQUFHLENBQUMsQ0FBQztJQUswQixDQUFDO0lBRW5DLGdDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVaLG1DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUNNLG9DQUFZLEdBQW5CO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDOUIsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsSUFBUztRQUNmLElBQUksYUFBYSxHQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1lBQzlCLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUFFO1FBQzFELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELG1DQUFXLEdBQVgsVUFBWSxDQUFDLEVBQUUsSUFBYztRQUN4QixJQUFJLGFBQWEsR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFRLENBQUcsQ0FBQyxDQUFDO1FBQzlELElBQUcsYUFBYSxDQUFDLFVBQVUsSUFBSSxhQUFhLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNuRSxhQUFhLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0osYUFBYSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDTixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFqRGlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTt3REFBQztJQWRuQyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQWlCNkIsV0FBSTtPQWhCdEIsYUFBYSxDQWdFekI7SUFBRCxvQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsL2xhYmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBDb250cmFjdCB7XG4gICAgICAgIGZvbGRlck51bWI6IHN0cmluZztcbiAgICAgICAgaXNTZWxjdGVkOiBib29sZWFuID0gZmFsc2Vcbn1cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLy9wdWJsaWMgbXlJdGVtczogT2JzZXJ2YWJsZUFycmF5PGFueT47XG4gICAgcHVibGljIGl0ZW1zJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PENvbnRyYWN0Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgICBleHRlcm5hbFVzZXJJZDogc3RyaW5nO1xuICAgIFxuICAgIGZvbGRlck51bWJlcjogc3RyaW5nO1xuICAgIGl0ZW1zOiBhbnlbXSA9IFtdO1xuICAgIC8vIHsgXCJ0aXRsZVwiOiBcIkphdmFzY3JpcHRcIiB9LFxuICAgIC8vIHsgXCJ0aXRsZVwiOiBcIlZ1ZVwiIH0sXG4gICAgLy8geyBcInRpdGxlXCI6IFwiUmVhY3RcIiB9XG4gICAgY3RyID0gMDtcbiAgICBpc0xpc3Q6IGJvb2xlYW47XG5cbiAgICBAVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCkge1xuICAgICAgICB0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC50b2dnbGUoKTtcbiAgICB9XG4gICAgcHVibGljIGdldENoZWNrUHJvcCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrZWQgcHJvcCB2YWx1ZSA9ICcgKyB0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkKTtcbiAgICB9XG4gICAgYWRkSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuaXNMaXN0ID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KCk7XG4gICAgICAgIGNvbnRyYWN0LmZvbGRlck51bWIgPSB0aGlzLmZvbGRlck51bWJlcjtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGNvbnRyYWN0KTtcbiAgICAgICAgLy8gaWYgKHRoaXMuY3RyIDwgNCkge1xuICAgICAgICB0aGlzLml0ZW1zJC5uZXh0KFsuLi50aGlzLml0ZW1zJC5nZXRWYWx1ZSgpLCB0aGlzLml0ZW1zW3RoaXMuY3RyXV0pO1xuICAgICAgICB0aGlzLmN0cisrO1xuICAgICAgICAvLyB9IGVsc2UgcmV0dXJuO1xuICAgICAgICB0aGlzLmZvbGRlck51bWJlciA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpbnREYXRhKGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBsZXQgaXRlbXNfdXBkYXRlZDogYW55W10gPSB0aGlzLml0ZW1zJC5nZXRWYWx1ZSgpO1xuICAgICAgICBpdGVtc191cGRhdGVkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gZGF0YSkgeyBpdGVtc191cGRhdGVkLnNwbGljZShpbmRleCwgMSk7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXRlbXMkLm5leHQoaXRlbXNfdXBkYXRlZCk7XG4gICAgfVxuXG4gICAgcmVsZWFzZUFsbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWxlYXNlIGFsbCB0YXBwZWRcIik7XG4gICAgICAgIHRoaXMuaXRlbXMkLm5leHQobnVsbCk7XG4gICAgfVxuICAgIHNlbGVjdGVkUm93KGksIGl0ZW06IENvbnRyYWN0KXtcbiAgICAgICAgIGxldCBzZWxlY3RlZExhYmVsID0gPExhYmVsPnRoaXMucGFnZS5nZXRWaWV3QnlJZChgaXRlbV8ke2l9YCk7XG4gICAgICAgICBpZihzZWxlY3RlZExhYmVsLnZpc2liaWxpdHkgJiYgc2VsZWN0ZWRMYWJlbC52aXNpYmlsaXR5ID09PSBcImhpZGRlblwiKSB7XG4gICAgICAgICAgICBzZWxlY3RlZExhYmVsLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIGl0ZW0uaXNTZWxjdGVkID0gdHJ1ZTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZExhYmVsLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgaXRlbS5pc1NlbGN0ZWQgPSBmYWxzZTtcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmludEFycigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtcyk7XG4gICAgfVxufVxuIl19