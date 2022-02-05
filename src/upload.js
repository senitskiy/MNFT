import process from 'process'
import { Web3Storage, getFilesFromPath } from 'web3.storage'


export async function upload(token, file) {
    if (!token) {
        return console.error('A token is needed. You can create one on https://web3.storage')
    }

    const storage = new Web3Storage({ token })

    console.log(`Uploading file...`)
    const cid = await storage.put(file)
    console.log('Content added with CID:', cid)

    return cid
}