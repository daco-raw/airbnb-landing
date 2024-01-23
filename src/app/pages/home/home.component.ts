import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HotelsService } from '../../core/services/hotels.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, LoadingComponent, CardsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {


  public data: any[] = [];

  constructor(private apiService: HotelsService) {}

  ngOnInit(): void {
    this.showData();
  }

  showData() {
    this.apiService.getAllHotels().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
