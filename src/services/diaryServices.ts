import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'
console.log(diaryData)

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
console.log(diaries)

export const getEntries = (): DiaryEntry[] => diaries

export const findByid = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility
      }
    })
  }

export const addDiary = (newDiaryEntry: Omit<DiaryEntry, 'id'>): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
