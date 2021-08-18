
import { mount } from '@vue/test-utils'
import Rating from '../../src/views/rating'
describe('Rating', () => {
  const wrapper = mount(Rating, {
    propsData: {
      settings: {
        numOfEmoticons: 5,
        timeout: 5,
        msg: 'Thank you for your rating.'
      }
    }
  })
  wrapper.setData({
    voted: false
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('should have changeVoted method', function () {
    expect(typeof wrapper.vm.changeVoted).toBe('function')
  })
  wrapper.vm.changeVoted()
  it('should change voted to true from false', function () {
    expect(wrapper.vm.voted).toBe(true)
  })
})
