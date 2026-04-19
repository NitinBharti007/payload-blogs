import { getPayload } from 'payload'
import config from '@payload-config'
import { env } from '@/lib/env'

export async function seedAdmin() {
  const payload = await getPayload({ config })

  try {
    const res = await payload.create({
      collection: 'users',
      data: {
        email: env.CMS_ADMIN_SEED_EMAIL,
        password: env.CMS_ADMIN_SEED_PASSWORD,
      },
    })
    console.log('Admin Created:', res)
  } catch (error) {
    console.log('Error creating admin user:', error)
  }
}
