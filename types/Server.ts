import { ExperienceDataType } from "@/server/experience.data"

export interface ServerErrorResponse {
  message: string,
  error: any
}

export interface ExperienceResponseType {
  message: string,
  data: ExperienceDataType[]
}