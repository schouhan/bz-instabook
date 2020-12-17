import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public AddressBookList;

  constructor(public navCtrl: NavController) {
    this.LoadAddressBookList();
  }

  private LoadAddressBookList() {
    this.AddressBookList = [
      {
        title: "Blue Zone Systems",
        descr: "Offical Company Address Book"
      },
      {
        title: "Rishi Heights",
        descr: "My Residential Address Book"
      }
    ];
  }

  public OpenAddressBook(id: string) {}
}
