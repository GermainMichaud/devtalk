import create from 'zustand'

const userStore = create(set => ({
  user: null,
  loading: false,
  setUser: data => set({ user: data }),
  setLoading: value => set({ loading: value }),
}))

export default userStore
