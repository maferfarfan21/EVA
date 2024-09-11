import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../app/models/identify.model';  // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class PlantIdService {
  private apiUrl = 'URL_DE_LA_API';  // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  identifyPlant(image: string): Observable<ApiResponse> {
    // Prepara el cuerpo de la solicitud, si es necesario
    const body = { image }; // Ajusta según los requisitos de la API
    return this.http.post<ApiResponse>(this.apiUrl, body);
  }
}
