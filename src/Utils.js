export const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (val) =>
        hasCanceled_ ? reject({ isCanceled: true }) : resolve(val),
      (error) =>
        hasCanceled_ ? reject({ isCanceled: true }) : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    }
  };
};

export function camelToTitleCase(text) {
  const words = text
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ');
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
