export default async function handler(req, res) {
    const { messaggio } = req.body;

    const token = process.env.TELEGRAM_TOKEN;
    const chat_id = process.env.CHAT_ID;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: messaggio
        })
    });

    const data = await response.json();
    res.status(200).json(data);
}