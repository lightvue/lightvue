export default function pubSub(all) {
  all = all || new Map();
  return {
    all,
    $on(type, handler) {
      const handlers = all.get(type);
      const added = handlers && handlers.push(handler);
      if (!added) {
        all.set(type, [handler]);
      }
    },
    $off(type, handler) {
      const handlers = all.get(type);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    $emit(type, evt) {
      (all.get(type) || []).slice().map(handler => {
        handler(evt);
      });
      (all.get('*') || []).slice().map(handler => {
        handler(type, evt);
      });
    },
  };
}
