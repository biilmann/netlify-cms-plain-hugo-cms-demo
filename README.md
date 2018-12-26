# Plain Hugo Netlify CMS Starter

This is a start template for Hugo and Netlify CMS based on Hugo's [Quick Start Guide](https://gohugo.io/getting-started/quick-start/).

To get started, you can do a one-click deploy to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/biilmann/netlify-cms-plain-hugo&stack=cms)

The starter template gives you a Hugo project corresponding to step 4 in the quick step guide, but with Netlify CMS integrated.

## CMS Integration

All Netlify CMS related code lives in `static/admin`

The most important part here is the `config.yml` configuration file for setting up collections,
and the `preview.js` file and `preview-components` folder for setting up custom preview components.

There's an example component in `static/admin/preview-components/post.js` for rendering the correct markup
based on the current `anake` team when doing live editing in the CMS.
