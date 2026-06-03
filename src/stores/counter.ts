import { defineStore } from 'pinia'

interface CounterState {
  counter: number
}

export const useCounterStore = defineStore('counter', {
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },

  state: (): CounterState => ({
    counter: 0,
  }),
})
