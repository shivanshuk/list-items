import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { BehaviorSubject } from 'rxjs';
import { Page } from "ui/page";
import { Label } from "tns-core-modules/ui/label/label";

export class Contract {
        folderNumb: string;
        isSelcted: boolean = false
}
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    //public myItems: ObservableArray<any>;
    public items$: BehaviorSubject<Array<Contract>> = new BehaviorSubject([]);
    externalUserId: string;
    
    folderNumber: string;
    items: any[] = [];
    // { "title": "Javascript" },
    // { "title": "Vue" },
    // { "title": "React" }
    ctr = 0;
    isList: boolean;

    @ViewChild("CB1") FirstCheckBox: ElementRef;

    constructor( private page: Page) {}

    ngOnInit(): void {}

    public toggleCheck() {
        this.FirstCheckBox.nativeElement.toggle();
    }
    public getCheckProp() {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    }
    addItems() {
        this.isList = true;
        let contract = new Contract();
        contract.folderNumb = this.folderNumber;
        this.items.push(contract);
        // if (this.ctr < 4) {
        this.items$.next([...this.items$.getValue(), this.items[this.ctr]]);
        this.ctr++;
        // } else return;
        this.folderNumber = "";
    }

    printData(data: any): void {
        let items_updated: any[] = this.items$.getValue();
        items_updated.forEach((item, index) => {
            if (item === data) { items_updated.splice(index, 1); }
        });
        this.items$.next(items_updated);
    }

    releaseAll() {
        console.log("release all tapped");
        this.items$.next(null);
    }
    selectedRow(i, item: Contract){
         let selectedLabel = <Label>this.page.getViewById(`item_${i}`);
         if(selectedLabel.visibility && selectedLabel.visibility === "hidden") {
            selectedLabel.visibility = "visible";
            item.isSelcted = true;
         } else {
            selectedLabel.visibility = "hidden";
            item.isSelcted = false;
         }
    }

    printArr() {
        console.log(this.items);
    }
}
