import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CarsComponent } from '../cars/cars.component';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  providers: [CarsComponent]
})

export class ToolBarComponent implements OnInit {

    constructor(private fb:FormBuilder,private apiService:ApiService,private carsComp:CarsComponent) { }

    searchTerm !: string;

    get Name(){ return this.infoForm.get('name'); }
    get PlaceNumber(){ return this.infoForm.get('placeNum'); }
    get DoorNumber(){ return this.infoForm.get('doorNum'); }
    get Color(){ return this.infoForm.get('color'); }
    get Price(){ return this.infoForm.get('price'); }
    get Photo(){ return this.infoForm.get('photo'); }
    get Category(){ return this.infoForm.get('category'); }
    get Marque(){ return this.infoForm.get('marque'); }
    get Description(){ return this.infoForm.get('description'); }

    public imgPath="../../../assets/images/imageImport.jpg";

    infoForm=this.fb.group({
        name:[''],
        placeNum:[''],
        doorNum:[''],
        color:[''],
        price:[''],
        photo:[''],
        marque:[''],
        description:[''],
        category:['']
    })

    ngOnInit(): void {
    }

    changing(e:any){
        // console.log(e.target.value);
        this.carsComp.filter('');
        this.searchTerm = (e.target as HTMLInputElement).value;
        this.apiService.search.next(this.searchTerm);
    }
    
    UploadImg(event:any){
        var reader = new FileReader();
        reader.onload=(e)=>{
            this.imgPath= (e.target as any).result;
        }

        // console.log((event.target as any).value);

        reader.readAsDataURL(event.target.files[0]);

        this.imgPath = event.target.files[0];
        // this.setState({img:this.inputfile.current.currentSrc});
    }


    

}
