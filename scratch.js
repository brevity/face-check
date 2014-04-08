Template.__define__("configureLoginServiceDialogForGithub", (function() {
  var self = this;
  var template = this;
  return [ 
    HTML.Raw("<p>\n    First, you'll need to get a Github Client ID. Follow these steps:\n  </p>\n  "), 
    HTML.OL(HTML.Raw('\n    <li>\n      Visit <a href="https://github.com/settings/applications/new" target="blank">https://github.com/settings/applications/new</a>\n    </li>\n    '), 
    HTML.LI("\n      Set Homepage URL to: ", 
    HTML.SPAN(
      {
        "class": "url"
      }, function() {
                      return Spacebars.mustache(self.lookup("siteUrl"));
      }
    ), "\n    "), "\n    ", HTML.LI("\n      Set Authorization callback URL to: ", HTML.SPAN({
    "class": "url"
    }, function() {
    return Spacebars.mustache(self.lookup("siteUrl"));
  }, "_oauth/github?close"), "\n    "), "\n  ") ];
}));

