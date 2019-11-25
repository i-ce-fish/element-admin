import request from '@/utils/request'

export function getList(data) {
  return request({
    url: 'https://randomuser.me/api',
    method: 'get',
    params: data
  })
}

