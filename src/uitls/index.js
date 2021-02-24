/**
 * 获取querystring中的参数
 * @param key
 * @param def
 * @returns {*}
 */
export function queryStringGetParam(key, def) {
  let url = window.location.href
  if (def === undefined) {
    def = null
  }
  key += '='
  let index = url.indexOf(key)
  if (index === -1) {
    return def
  }
  url = url.substr(index + key.length, url.length)
  const index_and = url.indexOf('&')
  const index_jing = url.indexOf('#')
  if (index_and !== -1 && index_jing !== -1) {
    if (index_jing < index_and) {
      index = index_jing
    } else {
      index = index_and
    }
  } else if (index_and !== -1) {
    index = index_and
  } else if (index_jing !== -1) {
    index = index_jing
  } else {
    index = -1
  }

  if (index === -1) {
    return url
  }
  return url.substr(0, index)
}
