(async () => {
  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker.register("cache.serviceworker.js");

    await navigator.serviceWorker.ready;

    if (!navigator.serviceWorker.controller) {
      location.reload();
    }
  }
})();
