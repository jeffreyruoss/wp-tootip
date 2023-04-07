# FM Tooltip

FM Tooltip is a simple tooltip plugin for WordPress that adds tooltip functionality to specific anchor links. The tooltip displays additional information when the user hovers over or clicks on the anchor link.

## How the Tooltip Works

To create a tooltip, add the `fm-tooltip-link` class and `aria-describedby` attribute to an anchor link. The `aria-describedby` attribute should contain the ID of the tooltip content element.

The tooltip content should be wrapped in a `div` with the `fm-tooltip-content` class and an ID that matches the `aria-describedby` attribute value.

Here's an example:

```html
<a href="#example" class="fm-tooltip-link" aria-describedby="example">Example Link</a>
<div class="fm-tooltip-content" id="example">
  <h3>Tooltip Title</h3>
  <p>Tooltip content goes here.</p>
</div>
```

The tooltip will appear when the user hovers over or clicks on the anchor link. The tooltip will be hidden when the user moves their cursor away or clicks outside the tooltip.

### Usage

To start development and watch for changes in the source files, run the "npm start" command.

Gulp will watch the source files and automatically minify the CSS and JavaScript files when changes are saved. The minified files will be saved in the `dist` directory.

To build the minified files without watching for changes, run the "npm run build" command.

## Integration with WordPress

To integrate the plugin with WordPress, follow these steps:

1. Copy the `fm-tooltip` folder to the `wp-content/plugins` directory of your WordPress installation.
2. Log in to your WordPress admin dashboard.
3. Navigate to the "Plugins" page.
4. Find the "FM Tooltip" plugin in the list and click the "Activate" link.

After activating the plugin, the tooltip functionality will be available for use on your WordPress site.


## Development

This plugin uses Gulp to minify the CSS and JavaScript files. The source files are located in the `src` directory, and the minified files are generated in the `dist` directory.

### Prerequisites

Make sure you have the following tools installed on your system:

- Node.js
- npm

### Installation

1. Clone the repository or download the source files.
2. Open a terminal and navigate to the `fm-tooltip` folder.
3. Run `npm install` to install the development dependencies.

### Usage

To start development and watch for changes in the source files, run the "npm start" command.

```bash
npm start
```

Gulp will watch the source files and automatically minify the CSS and JavaScript files when changes are saved. The minified files will be saved in the `dist` directory.

## Integration with WordPress

To integrate the plugin with WordPress, follow these steps:

1. Copy the `fm-tooltip` folder to the `wp-content/plugins` directory of your WordPress installation.
2. Log in to your WordPress admin dashboard.
3. Navigate to the "Plugins" page.
4. Find the "FM Tooltip" plugin in the list and click the "Activate" link.

After activating the plugin, the tooltip functionality will be available for use on your WordPress site.
