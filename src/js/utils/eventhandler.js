const handlers = {
  logout: function (event) {
    alert("yes");
  },
  login: function (event) {
    // Do login stuff...
  },

  resetPassword: function (event) {
    resetPassword();
  },
  saveEvents: function (event) {
    saveEvents(event);
  },
};

const EventHandler = {
  addListeners() {
    document.addEventListener("click", function (event) {
      let handler = event.target.getAttribute("data-action");
      console.log(handlers);

      if (!handler || !handlers[handler]) return;
      return handlers[handler](event);
    });
  },
};
export default EventHandler;
/*
watch(
      window,
      "resize",
      function () {
        var w = window,
          d = document,
          e = d.documentElement;

        return { type: "VIEWPORT_SIZE", x: e.clientWidth, y: e.clientHeight };
      },
      true
    );

    // watch scroll state
    watch(window, "scroll", function (event) {
      return event;
    }); // {
    //   target: "[data-tr-save]",
    //   type: "click",
    //   callback: function (event) {
    //     return saveEvents();
    //   },
    // },

    // watch mouse clicks
    watch(document, "click", function (event) {
      return event;
    });

    // watch mouse move
    watch(document, "mousemove", function (event) {
      return event;
    });

    watch("[data-tr-savebutton]", "click", function (event) {
      return saveEvents();
    });
    
    if (typeof target != "object") {
      target = document.querySelectorAll(target);
      target.forEach((matchedTarget) => {
        addListener(matchedTarget, eventName, transformEventCb);
      });
    } else {
      console.log("something, anything");

    const initDom = () => {
    const handleDOMChanged = () => {
      handleEvent({
        type: "DOM_CHANGE",
        html: document.documentElement.outerHTML,
      });
    };

    document.addEventListener("DOMContentLoaded", function () {
      handleDOMChanged();

      pageinfo.width = window.innerWidth;
      pageinfo.height = window.innerHeight;
      pageinfo.url = window.location.pathname;
      console.log(pageinfo);
      // new MutationObserver(handleDOMChanged).observe(document, {
      //   attributes: true,
      //   childList: true,
      //   subtree: true,
      //   characterData: true,
      // });
    });
  };

    */
