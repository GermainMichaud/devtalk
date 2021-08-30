import create from 'zustand'

const userStore = create(set => ({
  user: null,
  setUser: data => set({ user: data }),
  setToken: token => {
    console.log(token)
  },
}))

export default userStore
