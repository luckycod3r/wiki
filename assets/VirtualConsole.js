var console = {
    __on : {},
    addEventListener : function (name, callback) {
      this.__on[name] = (this.__on[name] || []).concat(callback);
      return this;
    },
    dispatchEvent : function (name, value) {
      this.__on[name] = (this.__on[name] || []);
      for (var i = 0, n = this.__on[name].length; i < n; i++) {
        this.__on[name][i].call(this, value);
      }
      return this;
    },
    log: function () {
      var a = [];
      // For V8 optimization
      for (var i = 0, n = arguments.length; i < n; i++) {
        a.push(arguments[i]);
      }
      this.dispatchEvent("log", a);
    },
    error: function () {
        var a = [];
        // For V8 optimization
        for (var i = 0, n = arguments.length; i < n; i++) {
          a.push(arguments[i]);
        }
        this.dispatchEvent("error", a);
      },   
    info: function () {
        var a = [];
        // For V8 optimization
        for (var i = 0, n = arguments.length; i < n; i++) {
          a.push(arguments[i]);
        }
        this.dispatchEvent("info", a);
    },   
    warn: function () {
        var a = [];
        // For V8 optimization
        for (var i = 0, n = arguments.length; i < n; i++) {
          a.push(arguments[i]);
        }
        this.dispatchEvent("warn", a);
      }
  };
window.console.addEventListener("log", function (value) {
    VirtualConsole(value.toString(),"log");
});
window.console.addEventListener("warn", function (value) {
    VirtualConsole(value.toString(),"warn");
});
window.console.addEventListener("error", function (value) {
    VirtualConsole(value.toString(),"error");
});
window.console.addEventListener("info", function (value) {
    VirtualConsole(value.toString(),"info");
});

function VirtualConsole(value,type){
    if(value == undefined){
        value = "undefined";
    }
    let date = new Date();
    let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    let day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    let month = (date.getMonth() < 10) ? '0' + date.getMonth() : date.getMonth();
    res = `<div class="aqua-virtual-console-i console-${type}">
   <div class="console-target"> <span>${type.toUpperCase()}:</span>  ${value}</div>
   <div class="console-date">${day}.${month}.${date.getFullYear()} ${hours}:${minutes}:${seconds}</div>
</div>`
  document.querySelector(".aqua-virtual-console").innerHTML += res
}
