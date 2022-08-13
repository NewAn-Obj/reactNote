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
export const publishArticle = (data, draft) => {
  // return request.post('mp/articles', data)
  return request({
    method: 'post',
    url: `/mp/articles?draft=${draft}`,
    data,
  })
}
/**
 * 文章回显是获取文章详情
 * @param {*} id
 * @returns
 */
export const getArticleById = (id) => {
  return request({
    method: 'get',
    url: `/mp/articles/${id}`,
  })
}
/**
 * 上传修改文件
 * @param {*} data
 * @param {*} draft
 * @returns
 */
export const updataArticle = (data, draft) => {
  // return request.post('mp/articles', data)
  return request({
    method: 'put',
    url: `/mp/articles/${data.id}?draft=${draft}`,
    data,
  })
}
