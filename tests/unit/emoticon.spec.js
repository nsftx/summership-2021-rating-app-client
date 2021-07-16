import { mount, createWrapper } from '@vue/test-utils'
import Emoticon from '../../src/component/emoticon'
describe('Emoticon', () => {
  const wrapper = mount(Emoticon, {
    propsData: {
      data: {
        src: 'positive-vote.svg',
        color: 'rgb(0, 168, 107)',
        id: 1
      }
    }
  })
  test('Component exist', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('should have vote method', function () {
    expect(typeof wrapper.vm.vote).toBe('function')
  })
  it('should emit userVoted events', function () {
    wrapper.vm.vote()
    expect(wrapper.emitted().userVoted).toBeTruthy()
  })
  it('should emit post event', function () {
    wrapper.vm.vote()
    const rootWrapper = createWrapper(wrapper.vm.$root)
    expect(rootWrapper.emitted().post).toBeTruthy()
  })
})
