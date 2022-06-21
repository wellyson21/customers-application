import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../customers.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges {

  @Input() settings: any;

  public form: FormGroup | any;

  get addressControls(){
    return (<FormGroup>(<any>this.form.controls).address).controls;
  }

  get title(){

    const obj: any = {
      add: "Registrar Novo Cliente",
      edit: "Atualizar Dados do Cliente",
      delete: "Remover Cliente"
    };

    if(this.settings){
      return obj[this.settings.action];
    }else{
      return "";
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private httClient: HttpClient,
    private customersService: CustomersService
  ) { }

  ngOnChanges(): void {
    this.config();
  }

  ngOnInit(): void {
  }


  private config(){

    if(this.settings?.data?.address){
      this.settings.data.address = typeof this.settings.data.address == "string" ?  JSON.parse(this.settings.data.address) : this.settings.data.address;
    }

    this.form = this.formBuilder.group({
      id: [this.settings?.data?.id || "", []],
      name: [this.settings?.data?.name || "", [Validators.required]],
      email: [this.settings?.data?.email || "", [Validators.required]],
      phone: [this.settings?.data?.phone || "", [Validators.required]],
      address: this.formBuilder.group({
        addressLine: [ this.settings?.data?.address?.addressLine || "", [Validators.required]],
        state: [ this.settings?.data?.address?.state || "", [Validators.required]],
        city: [ this.settings?.data?.address?.city || "", [Validators.required]],
        district: [ this.settings?.data?.address?.district || "", [Validators.required]],
        postalCode: [this.settings?.data?.address?.postalCode || "", [Validators.required, Validators.maxLength(8)]],
        number: [ this.settings?.data?.address?.number || "", [Validators.required]],
        complement: [ this.settings?.data?.address?.complement || "", []],
      })
    });
  }

  onSearchCep(){

    const value = this.addressControls["postalCode"].value;

    if(value.length == 8){

      const url = `https://viacep.com.br/ws/${ value }/json/`;

      this.httClient.get(url).subscribe((res: any)=>{

        if(!res.erro){

          this.addressControls["addressLine"].patchValue(res.logradouro);
          this.addressControls["city"].patchValue(res.localidade);
          this.addressControls["district"].patchValue(res.bairro);
          this.addressControls["state"].patchValue(res.uf);
        }
      });
    }

  }


  public onSave(){

    const data = this.form.value;
    
    if(!data.id){ delete data.id; }

    data.address = JSON.stringify(data.address);
    
    this.customersService.update(data).then(()=>{}).catch((error)=>{
      console.error(error.message);
    });
  }

  public onDelete(){

    this.customersService.delete(this.settings.data.id).then(()=>{}).catch((error)=>{
      console.error(error.message);
    });
  }

}
