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
    items: Array<Contract> = new Array<Contract>();
    ctr = 0;
    isList: boolean;

    @ViewChild("CB1") FirstCheckBox: ElementRef;

    constructor(private page: Page) { }

    ngOnInit(): void { }

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
        this.items$.next([...this.items$.getValue(), this.items[this.ctr]]);
        this.ctr++;
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
    selectedRow(i, item: Contract) {
        let selectedLabel = <Label>this.page.getViewById(`item_${i}`);
        if (selectedLabel && selectedLabel.visibility && selectedLabel.visibility === "hidden") {
            selectedLabel.visibility = "visible";
            item.isSelcted = true;
        } else {
            selectedLabel.visibility = "hidden";
            item.isSelcted = false;
        }
    }

    selectAllItems() {
        for (let i = 0; i < this.items.length; i++) {
            let selectedLabel = <Label>this.page.getViewById(`item_${i}`);
            if (selectedLabel && selectedLabel.visibility) {
                selectedLabel.visibility = "visible";
            }
            this.items[i].isSelcted = true;
        }
    }
    deSelectAllItems() {
        for (let i = 0; i < this.items.length; i++) {
            let selectedLabel = <Label>this.page.getViewById(`item_${i}`);
            if (selectedLabel && selectedLabel.visibility) {
                selectedLabel.visibility = "hidden";
            }
            this.items[i].isSelcted = false;
        }
    }

    printArr() {
       // console.log(this.items);
       for (let i = 0; i < this.items.length; i++) {
        let selectedLabel = <Label>this.page.getViewById(`item_${i}`);
        if (selectedLabel && selectedLabel.visibility) {
            selectedLabel.visibility = "hidden";
        }
       // this.items[i].isSelcted = false;
    }
        let new_item = new Array<Contract>();
        this.items.forEach((item, index) => {
            if (!this.items[index].isSelcted) {
                let selectedLabel = <Label>this.page.getViewById(`item_${index}`);
                if (selectedLabel && selectedLabel.visibility) {
                    selectedLabel.visibility = "hidden";
                }
                new_item.push(item);
            }
        });
        //this.items$.unsubscribe();
        this.items$.next(new_item);
        this.items$.subscribe(x => {
            console.log(x);
        })
        //console.log("Final Item:",this.items$.getValue())
    }

}
