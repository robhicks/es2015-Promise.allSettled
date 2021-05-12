'use strict';

if (Promise && !Promise.allSettled) {
  Promise.allSettled = function (promises) {
    return Promise.all(promises.map(function (promise) {
      return promise.then(function (value) {
        return { status: 'fulfilled', state: 'fulfilled', value: value };
      }).catch(function (reason) {
        return { status: 'rejected', state: 'rejected', reason: reason };
      });
    }));
  };
}
