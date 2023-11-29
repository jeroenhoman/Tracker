(function () {
  let events = [];
  // let eventsJSON;
  let eventsData = [];
  let pageInfo = {};

  let eventsToWatch = [
    // {
    //   target: window,
    //   type: "resize",
    // },
    // {
    //   target: window,
    //   type: "scroll",
    // },
    {
      target: document,
      type: "click",
    },
    {
      target: document,
      type: "mousemove",
    },
  ];

  let heatmap;
  let holder = document.querySelector("[data-heatmap-holder]");

  const initApp = function () {
    document
      .querySelector("[data-tr-save]")
      .addEventListener("click", function (event) {
        saveEvents();
      });

    document
      .querySelector("[data-tr-showmap]")
      .addEventListener("click", function (event) {
        showHeatmap();
      });

    document
      .querySelector("[data-close-button]")
      .addEventListener("click", function (event) {
        closeHeatmap();
      });
    document
      .querySelector("[data-exit-button]")
      .addEventListener("click", function (event) {
        saveSessionData();
      });
  };

  const initDom = () => {
    document.addEventListener("DOMContentLoaded", function () {
      pageInfo.width = window.innerWidth;
      pageInfo.height = window.innerHeight;
      pageInfo.url = window.location.pathname;
    });
  };

  const initWatchers = function () {
    eventsToWatch.forEach((eventToWatch) => {
      watch(eventToWatch.target, eventToWatch.type, (event) => {
        return event;
      });
    });
  };

  const addListener = function (target, eventName, transformEventCb) {
    target.addEventListener(
      eventName,
      function (event) {
        handleEvent(transformEventCb(event));
      },
      true
    );
  };

  const watch = function (target, eventName, transformEventCb) {
    if (typeof target != "object") {
      target = document.querySelectorAll(target);
      target.forEach((matchedTarget) => {
        addListener(matchedTarget, eventName, transformEventCb);
      });
    } else {
      addListener(target, eventName, transformEventCb);
    }
  };

  const handleEvent = function (event) {
    let temporaryEvent = { name: event.type };
    temporaryEvent.ts = new Date().getTime();
    temporaryEvent.x = event.clientX;
    temporaryEvent.y = event.clientY;
    events.push(temporaryEvent);
  };

  const createHeatmapDataObject = function (dataArray) {
    dataArray.forEach((item) => {
      if (item.x != undefined) {
        eventsData.push({ x: item.x, y: item.y, value: 2 });
      }
    });
  };

  const saveEvents = function (event) {
    createHeatmapDataObject(events);
    return false;
  };

  const showHeatmap = function (event) {
    holder.classList.add("visible");
    heatmap = h337.create({
      container: holder,
      backgroundColor: "rgba(255, 255, 255,.4)",
    });
    heatmap.setData({
      max: 25,
      data: eventsData,
    });
  };

  const closeHeatmap = function (event) {
    holder.classList.remove("visible");
  };

  const saveSessionData = function () {
    let sessionData = {
      pageInfo: pageInfo,
      eventsData: eventsData,
    };
  };

  initApp();
  initWatchers();
  initDom();
})();

//list of events
//watch
//attachhandlers
//save event obj
//build JSON from all events

//per pageview dataobject opslaan met coordinaten + paginatitel
