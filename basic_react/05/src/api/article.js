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

/**
 * 发表文章接口
 * @param {*} data
 * @returns
 */
export const publishArticle = ({ data }) => {
  // return request.post('mp/articles', data)
  return request({
    method: 'post',
    url: `/mp/articles`,
    data,
  })
}
