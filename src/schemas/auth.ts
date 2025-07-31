import { z } from 'zod'

export const emailSchema = z.string().email()
export const passwordSchema = z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/)