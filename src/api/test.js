import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/api',
    method: 'get',
    params: data
  })
}

