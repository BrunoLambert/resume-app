import { ExperienceDataType } from "@/server/experience.data";
import { ExperienceResponseType } from "@/types/Server";

class ApiClient {
  apiUrl: string;

  constructor(url?: string) {
    this.apiUrl = url ? url : '/api'
  }

  async getExperiences(): Promise<ExperienceResponseType> {
    const response = await fetch(`${this.apiUrl}/experiences`);
    return response.json();
  }
}

export default ApiClient;