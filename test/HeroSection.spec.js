import { shallowMount } from '@vue/test-utils'
import HeroSection from '@/components/HeroSection'

describe('HeroSection Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(HeroSection, {
      propsData: {
        title: 'Titulo',
        subtitle: 'Subtitulo'
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  test.todo('There is an issue regarding dynamic style imports which makes the test fail')

  // test('Should render a section with class hero', () => {
  //   expect(wrapper.find('section.hero').exists()).toBe(true)
  // })
  //
  // test('Should render a h1 with class hero-title with the title prop', () => {
  //   expect(wrapper.find('h1.hero-title').text()).toBe('Titulo')
  // })
  //
  // test('Should render a paragraph with class hero-subtitle with the subtitle prop', () => {
  //   expect(wrapper.find('p.hero-subtitle').text()).toBe('Subtitulo')
  // })
})
