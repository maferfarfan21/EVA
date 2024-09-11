import { Component } from '@angular/core';
import { PlantIdService } from '../plant-id.service';
import { ApiResponse } from '../models/identify.model';

@Component({
  selector: 'app-plant-identify',
  templateUrl: './plant-identify.component.html',
  styleUrls: ['./plant-identify.component.css']
})
export class PlantIdentifyComponent {
  selectedImage: string | ArrayBuffer | null = null;
  result: ApiResponse | null = null;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private plantIdService: PlantIdService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  identifyPlant() {
    if (this.selectedImage) {
      this.isLoading = true;
      this.plantIdService.identifyPlant(this.selectedImage as string)
        .subscribe({
          next: (response: ApiResponse) => {
            this.result = response;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error identificando la planta:', error);
            this.errorMessage = 'Ocurrió un error identificando la planta';
            this.isLoading = false;
          }
        });
    }
  }
}

