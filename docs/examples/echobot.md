---
sidebar_position: 1
---

# Echo Bot
Here's an example of a bot that echoes back the same message that was sent.

Remember to replace `YOUR_BOT_TOKEN` with a token given by [@botfather](https://t.me/BotFather).

## Getting Updates
```php
<?php

require_once  "vendor/autoload.php";

use TelegramSDK\BotAPI\Exception\TelegramException;
use TelegramSDK\BotAPI\Telegram\{Bot, Update};


define("GREEN_COLOR", "\033[0;32m");
define("RED_COLOR", "\033[0;31m");
define("DEFAULT_COLOR", "\033[0m");


$bot = new Bot("YOUR_BOT_TOKEN", Update::UPDATES_FROM_GET_UPDATES);

if(!$bot->isValidToken(true)) {
    echo RED_COLOR . "Invalid bot token.\n" . DEFAULT_COLOR;
    exit(1);
}

echo GREEN_COLOR . "Bot Started!\n" . DEFAULT_COLOR;

for ( ; ; sleep(5)) {

    $updates = $bot->updates(isset($updates) ? $updates->getLastUpdateId() : null);

    foreach($updates->result as $update){
        if(isset($update->message)){
            $chat = $update->getChat();

            try {

                $res = $bot->copyMessage([
                    "chat_id" => $chat->id,
                    "from_chat_id" => $chat->id,
                    "message_id" => $update->getMessage()->message_id
                ]);

                echo GREEN_COLOR . "Replied to " . $chat->id . "\n" . DEFAULT_COLOR;

            } catch (TelegramException $e) {
                echo RED_COLOR . "Coulnd't reply to " . $chat->id . ": " . $e->getResponseBody()->description . "\n" . DEFAULT_COLOR;
            }

        }
    }
}
```

## Webhook
```php
<?php

require_once  "vendor/autoload.php";

use TelegramSDK\BotAPI\Telegram\{Bot, Update};

$bot = new Bot("YOUR_BOT_TOKEN", Update::UPDATES_FROM_WEBHOOK);

$update = $bot->updates();

if(isset($update->update_id)){

    if(isset($update->message)){
        $chat = $update->getChat();

        $bot->copyMessage([
            "chat_id" => $chat->id,
            "from_chat_id" => $chat->id,
            "message_id" => $update->getMessage()->message_id
        ]);
    }

} else{
    echo "No updates from telegram where found.\n";
}

```
