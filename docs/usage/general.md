---
sidebar_position: 1
---

# General Information
Before reading this documentation I recommend having a look at [Telegram Docs](https://core.telegram.org/bots/api).

The library provides one main class: `TelegramSDK\BotAPI\Telegram\Bot`.
You can use it to send requests to Telegram or get the updates.

```php
<?php

use TelegramSDK\BotAPI\Telegram\Bot;

$bot = new Bot("YOUR_BOT_TOKEN"); // Your bot token

$bot->sendMessage([ // Send a message
    "chat_id" => 123, // Your chat id
    "text" => "A message"
]);
```

### How does it work?
Every method in the `Bot` class is from the [Telegram Api](https://core.telegram.org/bots/api#available-methods) and it's case insensitive.