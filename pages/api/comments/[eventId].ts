import type { NextApiRequest, NextApiResponse } from 'next'

import { CommenstData } from '@/input'
import { connectDatabase, getAllDocuments, insertDocument } from 'helpers/db-util'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const eventId = req.query.eventId
  let client

  try {
    client = await connectDatabase()
  } catch (e) {
    res.status(500).json({ message: 'connecting to the database failed' })

    return
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body

    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({ message: 'Invalid input' })
      await client.close()

      return
    }
    const newComment: CommenstData = {
      email,
      eventId,
      name,
      text,
    }
    let result

    try {
      result = await insertDocument(client, 'comments', newComment)
      newComment._id = result.insertedId
      res.status(201).json({ comment: newComment, message: 'Added comment' })
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed!' })
    }
  }

  if (req.method === 'GET') {
    let documents

    try {
      documents = await getAllDocuments(client, 'comments', { _id: -1 }, { eventId: eventId })
      res.status(200).json({ comments: documents })
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed.' })

      return
    }
  }
  await client.close()
}
