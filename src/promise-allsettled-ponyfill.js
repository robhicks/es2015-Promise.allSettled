if (Promise && !Promise.allSettled) {
  Promise.allSettled = (promises) =>
    Promise.all(promises.map((promise) =>
      promise
        .then((value) => ({status: 'fulfilled', state: 'fulfilled', value}))
        .catch((reason) => ({status: 'rejected', state: 'rejected', reason}))
    ))
}
