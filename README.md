# Profile-search-app
This app helps us to look for profiles of different people on github.

## Features of this PWA that we're building:

1. Works responsively on deskop and mobile
1. Works Offline
1. Can be installed on desktop and mobile like an App
1. Extremely light weight


First of all, I created a website on "Github-Profile-Search" using HTML, CSS and Javascript.

Then I created a manifest file with the name manifest.json that has the metadata about our PWA like the name, short_name, start_url, the scope, the icons for the PWA, the Theme color, the background color, and how our PWA should display.

```json
{
  "name": "Github Search App by Diya",
  "short_name": "Search",
  "start_url": "Notes.html",
  "scope": "./",
  "icons": [
    {
      "src": "https://w7.pngwing.com/pngs/240/158/png-transparent-social-media-computer-icons-github-fork-github-purple-text-social-media.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://w7.pngwing.com/pngs/240/158/png-transparent-social-media-computer-icons-github-fork-github-purple-text-social-media.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffd31d",
  "background_color": "#333",
  "display": "standalone"
}
```
By following the tutorial:
https://dev.to/developertharun/convert-any-website-into-a-pwa-in-just-3-simple-steps-35pp

In the index.html, I added the link tag to link to the manifest.json file so that it knows that there is a manifest file to use.
```html
<link rel="manifest" href="manifest.json">

```

Then I installed NPM package by using:

`$ sudo apt install npm`

Then generate service-worker.js file by:

`$ npm install --global sw-precache`

A service worker is a JavaScript file that is completely asynchronous and runs on a separate thread, that takes care of intercepting network requests, caching or retrieving resources from the cache, and delivering push messages.

Once it is installed, run the below command, make sure that we are in the same path as your project root directory:

`$ sw-precache`

Then linked service_worker.js file to html document by:
```html
if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}
```
Then by using Netlify, generated the app link:
https://main--github-profiles-find.netlify.app/
