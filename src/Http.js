class Http {
  post(url) {
    window.$app.eventHub.$emit('showFullscreenLoading');

    return new Promise((resolve) => {
      window.$app.eventHub.$emit('hideFullscreenLoading');

      if (url === 'class') {
        resolve({
          data: {
            hash: 'cGVyZ3VudGFl6WZlcmEh',
          },
        });
      }
    });
  }
}

export default Http;
