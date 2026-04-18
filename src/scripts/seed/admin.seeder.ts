import { getPayload } from 'payload'
import config from '@payload-config'

export async function seedAdmin() {
  const payload = await getPayload({ config })

  try {
    const res = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@google.com',
        password: 'Password',
      },
    })
    console.log('Admin Created:', res)
  } catch (error) {
    console.log('Error creating admin user:', error)
  }
}
