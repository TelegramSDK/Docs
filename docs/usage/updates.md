---
sidebar_position: 2
---

# Getting Updates
As mentioned in the introduction, the `Bot` class provides a method to get updates.


## Updates Methods
You can pass 3 updates methods:
* `null`: No updates are expected from Telegram, is set as default.
* `Update::UPDATES_FROM_GET_UPDATES`: Get updates from the `getUpdates()` method.
* `Update::UPDATES_FROM_WEBHOOK`: Get updates from [`php://input`](https://www.php.net/manual/en/wrappers.php.php#wrappers.php.input).

### Get Updates
```php
<?php

use TelegramSDK\BotAPI\Telegram\Bot;

// With getUpdates()
$bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);

$updates = $bot->updates();
foreach($updates->result as $update){
    echo json_encode($update) . "\n";
}
```

### Webhook
```php
<?php
use TelegramSDK\BotAPI\Telegram\Bot;

// A webhook must be set
$bot = new Bot("YOUR_BOT_TOKEN", Update::UPDATES_FROM_WEBHOOK);

$update = $bot->updates();
echo (json_encode($update) ?? "No updates found.") . "\n";
```

## Default Updates
The library provides general default updates to use

```php
$updates = $bot->updates(true);
```

Here's a list of the currently available general updates:
* [`msg`](https://core.telegram.org/bots/api#message): The sent message.
* [`user`](https://core.telegram.org/bots/api#user): The user that performed the action.
* [`chat`](https://core.telegram.org/bots/api#chat): The chat where the action was performed.