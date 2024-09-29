---
sidebar_position: 5
---

# BotKit

`telegramsdk/botkit` is just an extension for the `telegramsdk/botapi` package useful for having suggestions by your IDE.

It is reccommend to use this extension

## Installation

You can install the library via Composer

```bash
composer require telegramsdk/botkit
```

## Usage

```php
<?php
require "vendor/autoload.php";

use TelegramSDK\BotKit\Bot;

$bot = new Bot("YOUR_BOT_TOKEN");

$bot->sendMessage(chat_id: 123, text: "Hello World");
```

That's it!
