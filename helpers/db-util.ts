import { Document, InsertOneResult, MongoClient, SortDirection, WithId } from 'mongodb'

export const connectDatabase = async (): Promise<MongoClient> => {
  return await MongoClient.connect(
    'mongodb+srv://exleonardo:1239643k@cluster0.yfysi3d.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0'
  )
}
export const insertDocument = async (
  client: MongoClient,
  collection: string,
  document: Object
): Promise<InsertOneResult> => {
  const db = client.db()

  const result = await db.collection(collection).insertOne(document)

  return result
}
export const getAllDocuments = async (
  client: MongoClient,
  collection: string,
  sort: { [key: string]: SortDirection },
  filter: Object = {}
): Promise<WithId<Document>[]> => {
  const db = client.db()
  const documents = await db.collection(collection).find(filter).sort(sort).toArray()

  return documents
}
