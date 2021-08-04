import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader'

describe('TheHeader Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(TheHeader, {
      stubs: ['nuxt-link', 'badge']
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Should render a header with class header', () => {
    expect(wrapper.find('header.header').exists()).toBe(true)
  })

  test('Should render a div with class header__inner', () => {
    expect(wrapper.find('div.header__inner').exists()).toBe(true)
  })

  test('Should render three router links', () => {
    expect(wrapper.findAll('nuxt-link-stub').length).toBe(3)
  })

  test('Should render the Logo as a nuxt link', () => {
    expect(wrapper.find('nuxt-link-stub.logo').exists()).toBe(true)
  })

  test('Should render one nav item', () => {
    expect(wrapper.findAll('nav').length).toBe(1)
  })

  test('Should render two images in the nav elements', () => {
    expect(wrapper.findAll('img').length).toBe(2)
  })
})
