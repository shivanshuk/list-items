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
        this.items = new Array();
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
        this.items$.next(this.items$.getValue().concat([this.items[this.ctr]]));
        this.ctr++;
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
        if (selectedLabel && selectedLabel.visibility && selectedLabel.visibility === "hidden") {
            selectedLabel.visibility = "visible";
            item.isSelcted = true;
        }
        else {
            selectedLabel.visibility = "hidden";
            item.isSelcted = false;
        }
    };
    HomeComponent.prototype.selectAllItems = function () {
        for (var i = 0; i < this.items.length; i++) {
            var selectedLabel = this.page.getViewById("item_" + i);
            if (selectedLabel && selectedLabel.visibility) {
                selectedLabel.visibility = "visible";
            }
            this.items[i].isSelcted = true;
        }
    };
    HomeComponent.prototype.deSelectAllItems = function () {
        for (var i = 0; i < this.items.length; i++) {
            var selectedLabel = this.page.getViewById("item_" + i);
            if (selectedLabel && selectedLabel.visibility) {
                selectedLabel.visibility = "hidden";
            }
            this.items[i].isSelcted = false;
        }
    };
    HomeComponent.prototype.printArr = function () {
        var _this = this;
        // console.log(this.items);
        for (var i = 0; i < this.items.length; i++) {
            var selectedLabel = this.page.getViewById("item_" + i);
            if (selectedLabel && selectedLabel.visibility) {
                selectedLabel.visibility = "hidden";
            }
            // this.items[i].isSelcted = false;
        }
        var new_item = new Array();
        this.items.forEach(function (item, index) {
            if (!_this.items[index].isSelcted) {
                var selectedLabel = _this.page.getViewById("item_" + index);
                if (selectedLabel && selectedLabel.visibility) {
                    selectedLabel.visibility = "hidden";
                }
                new_item.push(item);
            }
        });
        //this.items$.unsubscribe();
        this.items$.next(new_item);
        this.items$.subscribe(function (x) {
            console.log(x);
        });
        //console.log("Final Item:",this.items$.getValue())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSw2QkFBdUM7QUFDdkMsZ0NBQStCO0FBRy9CO0lBQUE7UUFFSSxjQUFTLEdBQVksS0FBSyxDQUFBO0lBQzlCLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSw0QkFBUTtBQVVyQjtJQWFJLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVg5Qix1Q0FBdUM7UUFDaEMsV0FBTSxHQUFxQyxJQUFJLHNCQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFJMUUsVUFBSyxHQUFvQixJQUFJLEtBQUssRUFBWSxDQUFDO1FBQy9DLFFBQUcsR0FBRyxDQUFDLENBQUM7SUFLMEIsQ0FBQztJQUVuQyxnQ0FBUSxHQUFSLGNBQW1CLENBQUM7SUFFYixtQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFDTSxvQ0FBWSxHQUFuQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFFLElB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R0M7QUFyR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwvbGFiZWxcIjtcblxuZXhwb3J0IGNsYXNzIENvbnRyYWN0IHtcbiAgICBmb2xkZXJOdW1iOiBzdHJpbmc7XG4gICAgaXNTZWxjdGVkOiBib29sZWFuID0gZmFsc2Vcbn1cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLy9wdWJsaWMgbXlJdGVtczogT2JzZXJ2YWJsZUFycmF5PGFueT47XG4gICAgcHVibGljIGl0ZW1zJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PENvbnRyYWN0Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgICBleHRlcm5hbFVzZXJJZDogc3RyaW5nO1xuXG4gICAgZm9sZGVyTnVtYmVyOiBzdHJpbmc7XG4gICAgaXRlbXM6IEFycmF5PENvbnRyYWN0PiA9IG5ldyBBcnJheTxDb250cmFjdD4oKTtcbiAgICBjdHIgPSAwO1xuICAgIGlzTGlzdDogYm9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoXCJDQjFcIikgRmlyc3RDaGVja0JveDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCkge1xuICAgICAgICB0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC50b2dnbGUoKTtcbiAgICB9XG4gICAgcHVibGljIGdldENoZWNrUHJvcCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrZWQgcHJvcCB2YWx1ZSA9ICcgKyB0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkKTtcbiAgICB9XG4gICAgYWRkSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuaXNMaXN0ID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KCk7XG4gICAgICAgIGNvbnRyYWN0LmZvbGRlck51bWIgPSB0aGlzLmZvbGRlck51bWJlcjtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGNvbnRyYWN0KTtcbiAgICAgICAgdGhpcy5pdGVtcyQubmV4dChbLi4udGhpcy5pdGVtcyQuZ2V0VmFsdWUoKSwgdGhpcy5pdGVtc1t0aGlzLmN0cl1dKTtcbiAgICAgICAgdGhpcy5jdHIrKztcbiAgICAgICAgdGhpcy5mb2xkZXJOdW1iZXIgPSBcIlwiO1xuICAgIH1cblxuICAgIHByaW50RGF0YShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgbGV0IGl0ZW1zX3VwZGF0ZWQ6IGFueVtdID0gdGhpcy5pdGVtcyQuZ2V0VmFsdWUoKTtcbiAgICAgICAgaXRlbXNfdXBkYXRlZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IGRhdGEpIHsgaXRlbXNfdXBkYXRlZC5zcGxpY2UoaW5kZXgsIDEpOyB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLml0ZW1zJC5uZXh0KGl0ZW1zX3VwZGF0ZWQpO1xuICAgIH1cbiAgICByZWxlYXNlQWxsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbGVhc2UgYWxsIHRhcHBlZFwiKTtcbiAgICAgICAgdGhpcy5pdGVtcyQubmV4dChudWxsKTtcbiAgICB9XG4gICAgc2VsZWN0ZWRSb3coaSwgaXRlbTogQ29udHJhY3QpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkTGFiZWwgPSA8TGFiZWw+dGhpcy5wYWdlLmdldFZpZXdCeUlkKGBpdGVtXyR7aX1gKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkTGFiZWwgJiYgc2VsZWN0ZWRMYWJlbC52aXNpYmlsaXR5ICYmIHNlbGVjdGVkTGFiZWwudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuICAgICAgICAgICAgc2VsZWN0ZWRMYWJlbC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICBpdGVtLmlzU2VsY3RlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZExhYmVsLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgaXRlbS5pc1NlbGN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdEFsbEl0ZW1zKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZExhYmVsID0gPExhYmVsPnRoaXMucGFnZS5nZXRWaWV3QnlJZChgaXRlbV8ke2l9YCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRMYWJlbCAmJiBzZWxlY3RlZExhYmVsLnZpc2liaWxpdHkpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExhYmVsLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uaXNTZWxjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZVNlbGVjdEFsbEl0ZW1zKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZExhYmVsID0gPExhYmVsPnRoaXMucGFnZS5nZXRWaWV3QnlJZChgaXRlbV8ke2l9YCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRMYWJlbCAmJiBzZWxlY3RlZExhYmVsLnZpc2liaWxpdHkpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExhYmVsLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5pc1NlbGN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaW50QXJyKCkge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXRlbXMpO1xuICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2VsZWN0ZWRMYWJlbCA9IDxMYWJlbD50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoYGl0ZW1fJHtpfWApO1xuICAgICAgICBpZiAoc2VsZWN0ZWRMYWJlbCAmJiBzZWxlY3RlZExhYmVsLnZpc2liaWxpdHkpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTGFiZWwudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH1cbiAgICAgICAvLyB0aGlzLml0ZW1zW2ldLmlzU2VsY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAgICAgbGV0IG5ld19pdGVtID0gbmV3IEFycmF5PENvbnRyYWN0PigpO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaW5kZXhdLmlzU2VsY3RlZCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZExhYmVsID0gPExhYmVsPnRoaXMucGFnZS5nZXRWaWV3QnlJZChgaXRlbV8ke2luZGV4fWApO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZExhYmVsICYmIHNlbGVjdGVkTGFiZWwudmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExhYmVsLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdfaXRlbS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy90aGlzLml0ZW1zJC51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLml0ZW1zJC5uZXh0KG5ld19pdGVtKTtcbiAgICAgICAgdGhpcy5pdGVtcyQuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAgIH0pXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJGaW5hbCBJdGVtOlwiLHRoaXMuaXRlbXMkLmdldFZhbHVlKCkpXG4gICAgfVxuXG59XG4iXX0=