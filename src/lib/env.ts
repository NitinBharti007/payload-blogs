import { createEnv } from '@t3-oss/env-core'
import * as z from 'zod'

export const env = createEnv({
  server: {
    CMS_ADMIN_SEED_EMAIL: z.email(),
    CMS_ADMIN_SEED_PASSWORD: z.string().min(1),
  },
  runtimeEnv: {
    CMS_ADMIN_SEED_EMAIL: process.env.CMS_ADMIN_SEED_EMAIL,
    CMS_ADMIN_SEED_PASSWORD: process.env.CMS_ADMIN_SEED_PASSWORD,
  },
})
