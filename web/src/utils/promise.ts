export const promise = (promise: Promise<any>) =>
  promise.then(res => [null, res]).catch(err => [err])