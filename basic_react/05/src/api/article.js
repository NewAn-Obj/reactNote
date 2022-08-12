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

/**
 * 删除文章接口
 * @param {*} id
 * @returns
 */
export function delArticle(id) {
  return request.delete(`mp/articles/${id}`)
}
