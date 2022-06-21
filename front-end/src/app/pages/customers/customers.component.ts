import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customersData: any;
  modalSettings: any;

  constructor(
    private customersService: CustomersService
  ) {}

  public ngOnInit(): void {

    this.customersService.subject.subscribe((res)=>{

      res.map((item: any)=> { item.address = JSON.parse(item.address); return item; })
      this.customersData = res;
    });
  }

  public onRegister(){
    this.modalSettings = {data: {}, action: "add"};
  }

  public onEdit(data: any){
    this.modalSettings = {data: data, action: "edit"};
  }

  public onDelete(data: any){
    this.modalSettings = {data: data, action: "delete"};
  }

  public onLogout(){
    window.localStorage.clear();
    window.location.reload();
  }

}
