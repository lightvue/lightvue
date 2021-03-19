var lastId = 0;

export default function (prefix = 'lv_id_') {
  lastId++;
  return `${prefix}${lastId}`;
}
