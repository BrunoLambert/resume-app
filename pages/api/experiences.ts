import GET_EXPERIENCE_DATA, { ExperienceDataType } from '@/server/experience.data';
import { ExperienceResponseType, ServerErrorResponse } from '@/types/Server';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExperienceResponseType | ServerErrorResponse>
) {
  try {
    const data = GET_EXPERIENCE_DATA();
    res.status(200).json({ message: "Ok", data })
  } catch (error: any) {
    res.status(500).json({ message: "Server Error", error })
  }
}