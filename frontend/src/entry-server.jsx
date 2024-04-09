import { createHandler, StartServer } from "@solidjs/start/server";
 
export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* UIKIT */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.19.3/dist/css/uikit.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.19.3/dist/js/uikit.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.19.3/dist/js/uikit-icons.min.js"></script>
          {assets}
        </head>
        <body>
          {children}
          {scripts}
        </body>
      </html>
    )}
  />
));
