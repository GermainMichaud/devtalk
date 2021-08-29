import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://rpiweb.hopto.org:3001/devtalk/api/v1',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  config => {
    config.headers['authorization'] =
      localStorage.getItem('devtalk_token') || null
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
  response => {
    const { jwtoken } = response.data
    if (jwtoken) {
      localStorage.setItem('devtalk_token', jwtoken)
    }
    return response
  },
  error => {
    if (error.response && error.response.status == 401) {
      localStorage.removeItem('devtalk_token')
    }
    return Promise.reject(error)
  }
)

export const authAPI = {
  login: async data => {
    return await axiosInstance.post('/login', data)
  },

  register: async data => {
    return await axiosInstance.post('/register', data)
  },
}

export const userAPI = {
  get: async () => {
    return await axiosInstance.get('/user')
  },

  update: async data => {
    return await axiosInstance.patch('/user', JSON.stringify(data))
  },

  delete: async () => {
    return await axiosInstance.delete('/user')
  },
}

export const subjectAPI = {
  getAll: async (queries = undefined) => {
    let url = '/subject'
    if (queries) {
      url +=
        '?' +
        Object.keys(queries)
          .map(key => `${[key]}=${queries[key]}`)
          .join('&')
    }
    return await axiosInstance.get(url)
  },

  getOne: async id => {
    return await axiosInstance.get(`/subject/${id}`)
  },

  add: async data => {
    return await axiosInstance.post('/subject', JSON.stringify(data))
  },

  addReference: async (id, data) => {
    return await axiosInstance.post(
      `/subject/${id}/reference`,
      JSON.stringify(data)
    )
  },

  update: async (id, data) => {
    return await axiosInstance.patch(`/subject/${id}`, JSON.stringify(data))
  },

  delete: async id => {
    return await axiosInstance.delete(`/subject/${id}`)
  },

  deleteReference: async id => {
    return await axiosInstance.delete(`/subject/${id}/reference`)
  },
}

export const commentAPI = {
  getAll: async () => {
    return await axiosInstance.get('/comment')
  },

  getOne: async id => {
    return await axiosInstance.get(`/comment/${id}`)
  },

  add: async data => {
    return await axiosInstance.post('/comment', JSON.stringify(data))
  },

  update: async (id, body) => {
    return await axiosInstance.patch(`/comment/${id}`, JSON.stringify({ body }))
  },

  delete: async id => {
    return await axiosInstance.delete(`/comment/${id}`)
  },
}
