if (Promise && !Promise.allSettled) {
  Promise.allSettled = (promises) =>
    Promise.all(promises.map((promise) =>
      promise
        .then((value) => ({state: 'fulfilled', value}))
        .catch((reason) => ({state: 'rejected', reason}))
    ))
}
