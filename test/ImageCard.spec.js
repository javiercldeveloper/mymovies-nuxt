import { shallowMount } from '@vue/test-utils'
import ImageCard from '@/components/ImageCard'

describe('ImageCard Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(ImageCard, {
      propsData: {
        item: {
          id: 1,
          title: 'Película',
          resource: 'popular'
        },
        isCategoryItem: true
      },
      stubs: ['nuxt-link']
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Should render a li with class image-card', () => {
    expect(wrapper.find('li.image-card').exists()).toBe(true)
  })

  test('Should render a div with class image-card__body', () => {
    expect(wrapper.find('div.image-card__body').exists()).toBe(true)
  })

  test('Should render a span with class image-card__body-title', () => {
    expect(wrapper.find('span.image-card__body-title').exists()).toBe(true)
  })

  test('If item has a title should be rendered in the span', () => {
    expect(wrapper.find('span.image-card__body-title').text()).toBe('Película')
  })

  test('If item does not have a title should render the default one', async () => {
    wrapper.setProps({
      item: {
        id: 1
      }
    })
    await wrapper.vm.$nextTick()

    expect(wrapper.find('span.image-card__body-title').text()).toBe('Titulo no disponible')
  })

  test('If is a Category item the route should redirect to the item Category', () => {
    expect(wrapper.vm.route.name).toBe('category-id')
    expect(wrapper.vm.route.params.id).toBe('popular')
  })
  test('If is a movie item the route should redirect to the movie detail page', async () => {
    wrapper.setProps({
      item: {
        id: 1
      },
      isCategoryItem: false
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.route.name).toBe('movie-id')
    expect(wrapper.vm.route.params.id).toBe(1)
  })
})
