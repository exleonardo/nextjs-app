import type { NextApiRequest, NextApiResponse } from 'next'

import { connectDatabase, insertDocument } from 'helpers/db-util'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const userEmail = req.body.email

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'invalid email address' })

      return
    }
    let client

    try {
      client = await connectDatabase()
    } catch (e) {
      res.status(500).json({ message: 'Connecting to the database failed' })

      return
    }
    try {
      await insertDocument(client, 'newsletter', { email: userEmail })
      await client.close()
    } catch (e) {
      res.status(500).json({ message: 'Inserting data failed!' })

      return
    }

    res.status(201).json({ message: 'signed up!' })
  }
}
