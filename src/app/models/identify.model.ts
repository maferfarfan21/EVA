export interface SimilarImage {
    id: string;
    url: string;
    license_name?: string;
    license_url?: string;
    citation?: string;
    similarity?: number;
    url_small?: string;
  }
  
  export interface SuggestionDetails {
    language: string;
    entity_id: string;
  }
  
  export interface Suggestion {
    id: string;
    name: string;
    probability: number;
    similar_images: SimilarImage[];
    details: SuggestionDetails;
  }
  
  export interface Classification {
    suggestions: Suggestion[];
  }
  
  export interface IsPlant {
    probability: number;
    binary: boolean;
    threshold: number;
  }
  
  export interface Result {
    is_plant: IsPlant;
    classification: Classification;
  }
  
  export interface ApiResponse {
    access_token: string;
    model_version: string;
    custom_id: string | null;
    input: {
      latitude: number;
      longitude: number;
      similar_images: boolean;
      images: string[];
      datetime: string;
    };
    result: Result;
    status: string;
    sla_compliant_client: boolean;
    sla_compliant_system: boolean;
    created: number;
    completed: number;
  }
  