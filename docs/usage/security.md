---
sidebar_position: 3
---

# Security
When working with the Telegram API is always a good practise to set a `secret_token` when setting up the [webhook](https://core.telegram.org/bots/api#setwebhook).

You can check if the update is from Telegram with `$bot->onExternalRequest()` function.
```php
if (!$update->isFromTelegram("YOUR_TELEGRAM_SECRET")) {
    header("Location: https://t.me/" . $bot->getMe()->body->result->username, true);
    exit;
}
```

In this example the script is going to check if `"YOUR_TELEGRAM_SECRET"` is equal to the `X-Telegram-Bot-Api-Secret-Token` header, redirecting the non-telegram user to the bot.