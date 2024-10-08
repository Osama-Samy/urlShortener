import validUrl from 'valid-url'
import shortid from 'shortid'
import Url from '../Database/Models/url.model.js'

const shortenUrl = async (req, res) => {
const { originalUrl } = req.body
const baseUrl = `${req.protocol}://${req.get('host')}`
if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base URL')
}
const urlCode = shortid.generate()

if (validUrl.isUri(originalUrl)) {
    try {
    let url = await Url.findOne({ originalUrl })

    if (url) {
        res.json({message: 'URL Shortened successfully'},url)
    } else {
        const shortUrl = `${baseUrl}/${urlCode}`
        url = new Url({ originalUrl, shortUrl, urlCode })
        await url.save()
        res.json(url.shortUrl)
    }
    } catch (err) {
    res.status(500).json('Server error')
    }
} else {
    res.status(401).json('Invalid original URL')
}
}

const redirectToUrl = async (req, res) => {
try {
    const url = await Url.findOne({ urlCode: req.params.code })

    if (url) {
    url.clicks ++
    await url.save()

    return res.redirect(url.originalUrl)
    } else {
    return res.status(404).json('No URL found')
    }
} catch (err) {
    res.status(500).json('Server error')
}
}

export { 
    shortenUrl, 
    redirectToUrl 
}