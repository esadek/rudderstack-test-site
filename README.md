# RudderStack Test Site

Simple website for sending test events with the [RudderStack JavaScript SDK](https://rudderstack.com/docs/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/).

## Installation

[Clone](https://github.com/git-guides/git-clone) repository into a new directory:

```
$ git clone https://github.com/esadek/rudderstack-test-site.git
```

## Usage

1. Open `rudderstack-test-site` folder in [VS Code](https://code.visualstudio.com/).
2. Add [write key](https://rudderstack.com/docs/glossary/#write-key) and [data plane URL](https://rudderstack.com/docs/get-started/dashboard-overview/#data-plane-url) to the `load` method at the end of line 19 in `index.html`.
3. Edit event calls in `main.js`.
4. Launch a local server with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). 
5. Click buttons to make event calls.

## License

[MIT](LICENSE)