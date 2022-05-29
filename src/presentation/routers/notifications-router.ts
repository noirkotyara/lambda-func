import express from 'express'
import { Request, Response } from 'express'

export const NotificationsRouter = () => {
    const router = express.Router()

    router.get('/', async (req: Request, res: Response) => {
        try {
            // const contacts = await getAllContactsUseCase.execute()
            // res.send(contacts)
            res.send('HELLO WORLD')
        } catch (err) {
            res.status(500).send({ message: "Error fetching data" })
        }
    })

    // router.post('/', async (req: Request, res: Response) => {
    //     try {
    //         await createContactUseCase.execute(req.body)
    //         res.statusCode = 201
    //         res.json({ message: "Created" })
    //     } catch (err) {
    //         console.log(err.message)
    //         res.status(500).send({ message: "Error saving data" })
    //     }
    // })

    return router
}