/**
 * Generated by orval v6.11.1 🍺
 * Do not edit manually.
 * ShortAI
 * OpenAPI spec version: 0.1.0
 */
import type { TaskType } from './taskType'

export interface TaskIn {
  /** Text compression ratio */
  rate: number
  /** link to the article on habr.com */
  url?: string
  text?: string
  type: TaskType
}
