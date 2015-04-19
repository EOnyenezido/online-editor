//var editorControllers = angular.module('editorControllers', []);

/*editorControllers.controller('editorCtrl', ['$scope', '$http',
  function ($scope, $http) {
    //$http.get('editor.html').success(function(data) {
      //$scope.phones = data;
    });
}]);*/


var currentEditor = "html";
var htmlEditor = ace.edit("htmlEditor");
var jsEditor = ace.edit("jsEditor");
var cssEditor = ace.edit("cssEditor");
jsEditor.setTheme("ace/theme/github");
jsEditor.getSession().setMode("ace/mode/javascript");
htmlEditor.setTheme("ace/theme/github");
htmlEditor.getSession().setMode("ace/mode/html");
cssEditor.setTheme("ace/theme/github");
cssEditor.getSession().setMode("ace/mode/css");
htmlEditor.setValue(htmlState);
jsEditor.setValue(jsState);
cssEditor.setValue(cssState);
htmlEditor.commands.addCommand({
    name: 'myCommand',
    bindKey: {win: 'Ctrl-M',  mac: 'Command-M'},
    exec: function(editor) {
      $('#preview').empty();
      $('#preview').append("<style>" + cssEditor.getValue() + "</style>");
      $('#preview').append(htmlEditor.getValue());
      $('#preview').append("<script>" + jsEditor.getValue() + "</script>");
    }
});

cssEditor.commands.addCommand({
    name: 'myCommand',
    bindKey: {win: 'Ctrl-M',  mac: 'Command-M'},
    exec: function(editor) {
      $('#preview').empty();
      $('#preview').append("<style>" + cssEditor.getValue() + "</style>");
      $('#preview').append(htmlEditor.getValue());
      $('#preview').append("<script>" + jsEditor.getValue() + "</script>");
    }
});

jsEditor.commands.addCommand({
    name: 'myCommand',
    bindKey: {win: 'Ctrl-M',  mac: 'Command-M'},
    exec: function(editor) {
      $('#preview').empty();
      $('#preview').append("<style>" + cssEditor.getValue() + "</style>");
      $('#preview').append(htmlEditor.getValue());
      $('#preview').append("<script>" + jsEditor.getValue() + "</script>");
    }
});

htmlEditor.commands.addCommand({
    name: 'saveHTMLWork',
    bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
    exec: function(editor) {
      save.click();
    }
});

jsEditor.commands.addCommand({
    name: 'saveJSWork',
    bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
    exec: function(editor) {
      save.click();
    }
});

var array = [];

console = {};

console.log = function(msg)   {
  try{
    array.push(window.eval(msg));
  }
  catch(e)  {
    array.push(msg);
  }
  return "hujvjv@,.(~```#*_)_7&3~`1";
}

jQuery(function($, undefined) {
    $('#jsTerminal').terminal(function(command, term) {
      if(command !== '')  {
        try {
              var result = window.eval(command);
              if(array.length > 0)  {
                array.forEach(function(element) {
                  term.echo(new String(element), {finalize: function(div) {div.css("color", "#0091ea")}});
                })
                array = [];
              }
              else{
                term.echo("=>  " + new String(result), {finalize: function(div) {div.css("color", "#76ff03")}});
              }
            } catch(e) {
              term.error(new String(e));
            }
      }
      else  {
        var jsTerm = jsEditor.getValue();
        if (jsTerm !== '') {
            try {
              var result = window.eval(jsTerm);
              if(array.length > 0)  {
                array.forEach(function(element) {
                  term.echo(new String(element), {finalize: function(div) {div.css("color", "#0091ea")}});
                })
                array = [];
              }
              if(result !== "hujvjv@,.(~```#*_)_7&3~`1")  {
                term.echo("=>  " + new String(result), {finalize: function(div) {div.css("color", "#76ff03")}});
              }
            } catch(e) {
                term.error(new String(e));
            }
        }
      }
    }, {
        greetings: 'Javascript Interpreter',
        name: 'js_demo',
        height: 120,
        prompt: '> '});
    document.querySelector("#run").addEventListener("click", function()  {
      $('#jsTerminal').terminal().exec("");
    })
    jsEditor.commands.addCommand({
      name: 'runJSWork',
      bindKey: {win: 'Ctrl-R',  mac: 'Command-R'},
      exec: function(editor) {
        $('#jsTerminal').terminal().exec("");
      }
    });
});


cssEditor.commands.addCommand({
    name: 'saveCSSWork',
    bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
    exec: function(editor) {
      save.click();
    }
});

htmlEditor.on("focus", function(){
  currentEditor = "html";
})
jsEditor.on("focus", function(){
  currentEditor = "js";
})
cssEditor.on("focus", function(){
  currentEditor = "css";
})

var preView = document.querySelector("#preView");

preView.addEventListener("click", function(){
  $('#preview').empty();
  $('#preview').append("<style>" + cssEditor.getValue() + "</style>");
  $('#preview').append(htmlEditor.getValue());
  $('#preview').append("<script>" + jsEditor.getValue() + "</script>");
});

var htmlState;
var cssState;
var jsState;

var fullScreen = document.querySelector("#fullScreen");

fullScreen.addEventListener("click", function(){
  htmlState = htmlEditor.getValue();
  jsState = jsEditor.getValue();
  cssState = cssEditor.getValue();
});

function checkCurrent() {
  if(currentEditor === "html")  {
    downloadHTML();
  }
  else if(currentEditor === "js")  {
    downloadJS();
  }
  else if(currentEditor === "css")  {
    downloadCSS();
  }
}

var save = document.querySelector("#save");

function downloadHTML()  {
  save.removeAttribute('download');
  save.removeAttribute('href');
  var fileName = prompt("Save as", "index");
  if(fileName !== null)  {
    save.setAttribute('download', fileName + ".html");
    save.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(htmlEditor.getValue()));
  }
}

function downloadCSS()  {
  save.removeAttribute('download');
  save.removeAttribute('href');
  var fileName = prompt("Save as", "style");
  if(fileName)  {
    save.setAttribute('download', fileName + ".css");
    save.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cssEditor.getValue()));
  }
}

function downloadJS()  {
  save.removeAttribute('download');
  save.removeAttribute('href');
  var fileName = prompt("Save as", "script");
  if(fileName)  {
    save.setAttribute('download', fileName + ".js");
    save.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsEditor.getValue()));
  }
}

save.addEventListener("click", checkCurrent);

var input = document.querySelector("#input");

htmlEditor.commands.addCommand({
    name: 'open',
    bindKey: {win: 'Ctrl-O',  mac: 'Command-O'},
    exec: function(editor) {
      input.click();
    }
});

jsEditor.commands.addCommand({
    name: 'open',
    bindKey: {win: 'Ctrl-O',  mac: 'Command-O'},
    exec: function(editor) {
      input.click();
    }
});

cssEditor.commands.addCommand({
    name: 'open',
    bindKey: {win: 'Ctrl-O',  mac: 'Command-O'},
    exec: function(editor) {
      input.click();
    }
});

input.addEventListener("change", function() {
  if(input.files.length == 0) return;
  if(!input.files[0].type.match('text.*') && !input.files[0].type.match('application.*')){
    alert("The file doesn't seem to be a valid text or script file");
  }
  else  {
    var reader = new FileReader();
    reader.onload = function()  {
      if(input.files[0].type == "text/html")  {
        htmlEditor.setValue(reader.result)
      }
      else if (input.files[0].type == "text/css") {
        cssEditor.setValue(reader.result)
      }
      else if (input.files[0].type == "application/javascript") {
        jsEditor.setValue(reader.result)
      }
    }
    reader.readAsText(input.files[0]);
  }
});