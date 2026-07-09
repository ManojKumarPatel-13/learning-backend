import { nanoid } from "nanoid";
import { UrlModel } from "../models/url.js"

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ err: "URL is required" })

    const shortID = nanoid(8);
    await UrlModel.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.json({ id: shortID })
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId
    const result = await UrlModel.findOne({ shortId })

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

export { handleGenerateNewShortUrl, handleGetAnalytics }