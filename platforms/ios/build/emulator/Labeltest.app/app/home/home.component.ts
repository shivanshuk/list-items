import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    //public myItems: ObservableArray<any>;
    public items$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
    externalUserId: string;
    folderNumber: string;
    items: any[] = [];
    // { "title": "Javascript" },
    // { "title": "Vue" },
    // { "title": "React" }
    ctr = 0;
    isList: boolean;

    @ViewChild("CB1") FirstCheckBox: ElementRef;

    constructor() {
    }

    ngOnInit(): void {}

    public toggleCheck() {
        this.FirstCheckBox.nativeElement.toggle();
    }
    public getCheckProp() {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    }
    addItems() {
        this.isList = true;
        this.items.push(this.folderNumber);
        console.log(this.folderNumber);
        // if (this.ctr < 4) {
        this.items$.next([...this.items$.getValue(), this.items[this.ctr]]);
        this.ctr++;
        // } else return;
        this.folderNumber = "";
    }

    printData(data: any): void {
        console.log(data);

        let items_updated: any[] = this.items$.getValue();
        items_updated.forEach((item, index) => {
            if (item === data) { items_updated.splice(index, 1); }
        });
        this.items$.next(items_updated);
    }

    test(){
        console.log("release all tapped");
    }

    releaseAll() {
        console.log("release all tapped");
        this.items$.next(null);
    }
}
