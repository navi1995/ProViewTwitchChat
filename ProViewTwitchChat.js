(function () {
  var interval;
  var enabled;

  //Listen for URL changes every second
  interval = window.setInterval(function() {
    var $pageContainer = document.getElementsByClassName("ProView")[0];
    var $znipeFrame = document.getElementById("znipe-iframe");

    if (location.pathname == "/pro-view" && $pageContainer && $znipeFrame && !document.getElementById("toggleTwitch")) {
      createTwitchChatMenuToggle();
      createTwitchChatIframe();
    } else if (location.pathname != "/pro-view" && document.getElementById("toggleTwitch") && !document.getElementById("twitch-chat-iframe")) {
      document.getElementById("toggleTwitch").remove();
    }
  }, 1000);

  function createTwitchChatMenuToggle() {
    if (!document.getElementById("toggleTwitch")) {
      var $nav = document.querySelector("body > div:nth-child(4) > nav");

      $nav.insertAdjacentHTML("beforeend", "<div id=\"toggleTwitch\" class=\"LocaleSelector toggle-twitch\" ><span class=\"title-icon\"><img class=\"toggle-twitch-image\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAMAAABOmSgnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAANlBMVEUAAADT3+rT3+rT3+rT 3+rT3+rT3+rT3+rT3+rT3+rT3+rT3+rT3+rT3+rT3+rT3+rT3+r////IBQ4/AAAAEHRSTlMAf/xj /mlvdIBFQPU89Djw3z3d1AAAAAFiS0dEEeK1PboAAAAHdElNRQfjBgIJEg7p0Jj8AAAAeUlEQVQ4 y83TSwrAMAgE0LRN/594/9MWtNBk4URoIc76gYNiCE5DIC2R1tUN6iyIRPUYiRoiRqLGiJGoqYJE zRX0tK+gUmmoUCrKlY4yBdCrEFp+GmcpblmBZZmWs7BZMWKz7RCxOU5CiM2VDI+Qvr9U8IG0tELO cgNYzCIy9mkPsgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNi0wMlQxNjoxODoxNC0wNzowMFK2 bckAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDYtMDJUMTY6MTg6MTQtMDc6MDAj69V1AAAAAElF TkSuQmCC\"></span></div>");
      addListeners();
    }
  }

  function createTwitchChatIframe() {
    var $pageContainer = document.getElementsByClassName("ProView")[0];
    var $znipeFrame = document.getElementById("znipe-iframe");

    if ($pageContainer && !document.getElementById("twitch-chat-iframe")) {
      $pageContainer.insertAdjacentHTML("beforeend", "<iframe id=\"twitch-chat-iframe\" class=\"twitch-chat-enabled\" src=\"https://www.twitch.tv/embed/riotgames/chat?darkpopout\" frameborder=\"0\" scrolling=\"yes\">");
      $znipeFrame.classList.add("twitch-chat-enabled");
      enabled = true;
    }
  }

  function removeTwitchChatIframe() {
    var $znipeFrame = document.getElementById("znipe-iframe");
    
    document.getElementById("twitch-chat-iframe").remove();
    $znipeFrame.classList.remove("twitch-chat-enabled");
    enabled = false;
  }

  function twitchChatIconToggle() {
    if (!document.getElementById("twitch-chat-iframe")) {
      createTwitchChatIframe();
    } else {
      removeTwitchChatIframe();
    }
  }

  function addListeners() {
    document.getElementById("toggleTwitch").addEventListener("click", function(e) {
      twitchChatIconToggle();
    });
  }
}());