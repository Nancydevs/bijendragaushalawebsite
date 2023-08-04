const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { firstname, lastname, subject } = req.body;

    // Define the Discord webhook URL (replace 'YOUR_DISCORD_WEBHOOK_URL' with your actual Discord webhook URL)
    const discordWebhookURL = process.env.DISCORD_WEBHOOK_URL;

    // Define the message you want to send to Discord
    const discordMessage = {
        content: `New form submission:\nName: ${firstname}\nEmail: ${lastname}\nMessage: ${subject}`,
    };

    // Send the message to Discord
    await fetch(discordWebhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage),
    });

    res.status(200).send("Form submitted successfully");
};
