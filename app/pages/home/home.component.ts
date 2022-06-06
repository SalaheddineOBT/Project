import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private routerAct:ActivatedRoute) { }

  ngOnInit(): void {
    //this.router.navigate(['cars'],{relativeTo:this.routerAct});
  }

}
