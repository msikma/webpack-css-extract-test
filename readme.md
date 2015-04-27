# Webpack *ExtractTextPlugin* image dedupe test

Test that highlights how images don't get deduped when using the
*ExtractTextPlugin*. If the plugin isn't used, the images get neatly deduped
in the `main.bundle.js`.

## Testing

Try `grunt build-extract` to test a build with the CSS extracted and put in
a separate file, and `grunt build-inline` to make a build with the CSS
inlined in the JS.

You'll see that the former test will contain multiple duplicate versions of
the test image.
