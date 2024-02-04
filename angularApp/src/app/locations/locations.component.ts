import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {
  // Travel Locations
  locations: any;

  constructor (private service: LocationsService) {}

  ngOnInit() {
    this.service.getLocations() 
      .subscribe((response: any) => {
        this.locations = response;
      });
  }
}
