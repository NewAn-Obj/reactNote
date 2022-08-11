import request from '../utils/request'

/**
 * 请求文章列表
 * @param {*} params
 * @returns
 */
export function getArticle(params) {
  return request.get('/mp/articles', {
    params,
  })
}
