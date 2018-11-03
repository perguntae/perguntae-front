export const askPermission = () => new Promise((resolve) => {
  if (window.Notification && Notification.permission !== 'granted') {
    Notification.requestPermission((status) => {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }

      resolve();
    });
  }
});

export const havePermission = () => window.Notification && Notification.permission === 'granted';

export const showNotification = ({ title }) => {
  if (havePermission()) {
    const n = new Notification(title);
  }
};

export default {
  askPermission,
  havePermission,
  showNotification,
};
