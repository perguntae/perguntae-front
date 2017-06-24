class Http {
  post() {
    window.$app.eventHub.$emit('showFullscreenLoading');

    setTimeout(() => {
      window.$app.eventHub.$emit('hideFullscreenLoading');
    }, 2000);
  }
}

export default Http;
