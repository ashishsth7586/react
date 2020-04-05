function init() {
  // Raven.config("https://fca5dbc3f7a742faba416517d759abbd@sentry.io/5189271", {
  //   release: "1-0-0",
  //   environment: "development-test",
  // }).install();
}

function log(error) {
  // Raven.captureException(error);
  console.log(error);
}

export default {
  init,
  log,
};
