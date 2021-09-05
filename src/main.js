const vscode = require("vscode");
const keys = require("../data/keys");

function activate(context) {
  console.log('Congratulations, your extension "nvr" is now active!');

  const disposable = vscode.languages.registerHoverProvider("nvr", {
    provideHover(document, position, token) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);
      try {
        if (word.match(/&?0x[A-F0-9]+/)) {
          const match = word.match(/&?0x([A-F0-9]+)/);

          return {
            language: "nvr",
            contents: [keys.byID[match[1]] || ""],
          };
        } else if (word.match(/^([A-F0-9]+)$/)) {
          const match = word.match(/^([A-F0-9]+)$/)[1];
          const hexAsString = hex2a(match);
          return {
            title: "**Details:** ",
            contents: [
              (!match.match(/^(0+)$/g)
                ? "**String value:**\n" + hexAsString
                : "**String value:**\nNo string value!"),
                "\n**Numeric value:**\n" +
                parseInt(match, 16),
            ],
          };
        }
      } catch (e) {
        return {
          contents: ["Internal Extension Error: " + e.toString()],
        };
      }
    },
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}

function hex2a(hex) {
  var str = "";
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

module.exports = {
  activate,
  deactivate,
};
