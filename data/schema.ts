import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  confidence: z.string(),
  label: z.string(),
  priority: z.string(),
  lastReview: z.string(),
  nextReview: z.string(),
  reviewCount: z.number(),
})

export type Task = z.infer<typeof taskSchema>
