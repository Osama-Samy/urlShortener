import express from 'express'
import { shortenUrl, redirectToUrl } from '../Controllers/url.controllers.js'

const urlRouter = express.Router()

urlRouter.post('/shorten', shortenUrl)

urlRouter.get('/:code', redirectToUrl)

export default urlRouter
