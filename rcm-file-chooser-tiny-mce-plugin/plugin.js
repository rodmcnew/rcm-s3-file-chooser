tinymce.PluginManager.add(
    "rcmFileChooser", function (editor, url) {
        editor.settings.file_browser_callback = function (id, value, type, win) {
            rcmFileChooser.chooseFile(function (chosenValue) {
                win.document.getElementById(id).value = chosenValue;
            }, value);
            return false;
        };
    }
);
