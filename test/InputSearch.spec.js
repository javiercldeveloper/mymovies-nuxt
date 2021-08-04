import { shallowMount } from '@vue/test-utils'
import InputSearch from '@/components/InputSearch'

describe('InputSearch Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(InputSearch)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Should render a div with class search__box', () => {
    expect(wrapper.find('div.search__box').exists()).toBe(true)
  })

  test('Should render an input with class search__input', () => {
    expect(wrapper.find('input.search__input').exists()).toBe(true)
  })

  test('Should receive inputs event debounced', (done) => {
    wrapper.vm.$on('input', (value) => {
      expect(value).toBe('querys')
      done()
    })
    wrapper.vm.sendInputValue({ target: { value: 'query' } })
    wrapper.vm.sendInputValue({ target: { value: 'querys' } })
  })

  test('should receive multiple input events if debounce time is exceeded', (done) => {
    const calls = [1, 2]
    let currentCall = 0

    wrapper.vm.$on('input', (inputValue) => {
      expect(wrapper.emitted().input.length).toBe(calls[currentCall])
      if (currentCall === 1) {
        done()
      }
      currentCall++
    })
    wrapper.vm.sendInputValue({ target: { value: 'query' } })
    setTimeout(() => {
      wrapper.vm.sendInputValue({ target: { value: 'query' } })
    }, 650)
  })
})
