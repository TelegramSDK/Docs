---
sidebar_position: 1
---

# Echo Bot
Here's an example of a bot that echoes back the same message that was sent.

Remember to replace `YOUR_BOT_TOKEN` with a token given by [@botfather](https://t.me/BotFather).

## Getting Updates
```php
<?php
define("PRODUCTION", false);
require_once "vendor/autoload.php";

define("GREEN_TEXT", "\033[0;32m");
define("RED_TEXT", "\033[0;31m");
define("DEFAULT_TEXT", "\033[0m");

use TelegramSDK\BotAPI\Telegram\Bot;
$bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);

echo GREEN_TEXT . "Bot Started!\n" . DEFAULT_TEXT;

while(true){
    $updates = $bot->updates(true, $updates->lastUpdateID ?? null);

    foreach($updates->result as $update){
        if(isset($update->message)){
            $res = $bot->copyMessage([
                "chat_id" => $update->chat->id,
                "from_chat_id" => $update->chat->id,
                "message_id" => $update->message->message_id
            ]);

            if($res->body->ok){
                echo GREEN_TEXT . "Replied to " . $update->chat->id . "\n" . DEFAULT_TEXT;
            } else{
                echo RED_TEXT . "Coulnd't reply to " . $update->chat->id . ": " . $res->body->error . "\n" . DEFAULT_TEXT;
            }
        }
    }

    sleep(5);
}
```

### How does it work?
We're creating a new instance of `TelegramSDK\BotAPI\Telegram\Bot`, passing the `Bot::UPDATES_FROM_GET_UPDATES` as the form of updates
```php
$bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);
```
Then the program creates an infinite loop to get the new updates, `$updates->lastUpdateID` is the offset of the update, set by the last `$bot->updates()` or `null` if its not set.
*See [Getting Updates](/docs/usage/updates) for detailed information.*
```php
while(true){
    $updates = $bot->updates(true, $updates->lastUpdateID ?? null);
}
```
The next step is to iterate through the array of updates and check if a message was sent.
```php
foreach($updates->result as $update){
    if(isset($update->message)) // A message was sent
}
```

If a message is sent we simply copy it and send it to the same user.
*See the [copyMessage](https://core.telegram.org/bots/api#copymessage) method.*
```php
$res = $bot->copyMessage([ // Copying the message
    "chat_id" => $update->chat->id,
    "from_chat_id" => $update->chat->id,
    "message_id" => $update->message->message_id
]);

if($res->body->ok){ // The message was sent
    echo GREEN_TEXT . "Replied to " . $update->chat->id . "\n" . DEFAULT_TEXT;
} else{ // The message coulnd't be sent
    echo RED_TEXT . "Coulnd't reply to " . $update->chat->id . ": " . $res->body->error . "\n" . DEFAULT_TEXT;
}
```
The last step is to wait 5 seconds before checking for new updates to avoid being timed out by telegram.
```php
sleep(5);
```

## Webhook
```php
<?php
define("PRODUCTION", false);
require_once "vendor/autoload.php";

use TelegramSDK\BotAPI\Telegram\Bot;

$bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_WEBHOOK);

$update = $bot->updates(true);

if(isset($update->update_id)){

    if(isset($update->message)){
        $bot->copyMessage([
            "chat_id" => $update->chat->id,
            "from_chat_id" => $update->chat->id,
            "message_id" => $update->message->message_id
        ]);
    }

} else{
    echo "No updates from telegram where found.\n";
}
```

### How does it work?
We're creating a new instance of `TelegramSDK\BotAPI\Telegram\Bot`, passing the `Bot::UPDATES_FROM_WEBHOOK` as the form of updates
```php
$bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_WEBHOOK);
```

Then we check if there is a telegram update.
```php
$update = $bot->updates(true);

if(isset($update->update_id)){} // There should be an update from Telegram
```

If a message is sent we simply copy it and send it to the same user.
*See the [copyMessage](https://core.telegram.org/bots/api#copymessage) method.*
```php
if(isset($update->message)){
    $bot->copyMessage([ // Copying the message
        "chat_id" => $update->chat->id,
        "from_chat_id" => $update->chat->id,
        "message_id" => $update->message->message_id
    ]);
}
```
