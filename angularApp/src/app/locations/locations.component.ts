import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {
  // Travel Locations
  locations = [
    {
      place: "Golden Gate Bridge",
      image: "golden-gate-bridge",
      description: "Iconic suspension bridge spanning the Golden Gate Strait in San Francisco, offering breathtaking views.",
      rating: 4.7
    }, 
    {
      place: "Machu Picchu",
      image: "machu-picchu",
      description: "Ancient Incan citadel nestled in the Andes, showcasing stunning architecture and panoramic landscapes.",
      rating: 4.8
    }, 
    {
      place: "Sydney Opera House",
      image: "sydney-opera-house",
      description: "Architectural marvel on Sydney's harbor, renowned for its distinctive sail-like design and world-class performances.",
      rating: 4.6
    },
    {
      place: "Tokyo Skytree",
      image: "tokyo-skytree",
      description: "Japan's tallest structure, providing unparalleled views of Tokyo and its surroundings from its observation decks.",
      rating: 4.5
    }
  ]
}
