import { mount } from 'vue-test-utils';
import Blog from '../src/components/Blog.vue';
import expect from 'expect';

describe('Blog', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(Blog)
    });

    it('returns if the theme is set to rainbow', () => {
        expect(wrapper.vm.style_rainbow).toBe(true);
    });

    it('tests if the blogs array is not empty', () => {
        expect(wrapper.vm.blogs.length).toBe(7)
    })
});