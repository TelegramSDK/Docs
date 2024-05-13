---
sidebar_position: 3
---

# Download Files
Since each request like `$bot->method([])` is made using the `/bot{TOKEN}/{method}` endpoint, the library provides a method to download files with `/file/bot{TOKEN}/{PATH}`.

## Usage
```php
// Assuming you have a bot instance named $bot
if($bot->downloadFile('path given by /getFile', '/path/to/downloads')){
    echo 'The download was successfull';
} else {
    echo 'There was an error';
}
```

:::info
See [`/getFile`](https://core.telegram.org/bots/api#getfile) to know the path of the downloadable file.
:::