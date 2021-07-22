var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const uuid = function (len, radix) {
  var chars = CHARS, uuid = [], i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
};

const joinUrl = (uri, params = {}) => {
  let url = uri;
  if (url.indexOf('?') === -1) {
    url += '?';
  }

  Object.keys(params || {}).forEach((key, index) => {
    if (index === 0) {
      url += `${key}=${params[key]}`;
      return;
    }
    url += `&${key}=${params[key]}`;
  });

  return url;
};

function getUrlParam(url, name) {
  let query;

  if (url.indexOf('?') !== -1) {
    query = url.split('?')[1];
  } else {
    return null;
  }

  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = query.match(reg);
  if (r != null) return decodeURI(r[2]); return null;
}

function getQueryParams(url) {
  let query;

  if (url.indexOf('?') !== -1) {
    query = url.split('?')[1];
  } else {
    return {}
  }

  let key_values = query.split("&");
  let params = {};
  key_values.map(key_val => {
      let key_val_arr = key_val.split("=");
      params[key_val_arr[0]] = key_val_arr[1];
  });
  return params;
}

module.exports = {
  uuid,
  getQueryParams,
  joinUrl,
  getUrlParam
}