import { shallowMount } from '@vue/test-utils';
import chai, { expect } from 'chai';
import App from '../../src/App';

describe('App', () => {
  const wrapper = shallowMount(App, {
    mocks: {
      $t: (msg) => msg
    }
  });
  describe('Basic elements check', () => {
    it('Navibar', () => {
      expect(wrapper.html()).contain('<b-navbar type="dark" variant="dark" toggleable="sm">')
    });
    it('Locale changer', () => {
      expect(wrapper.html()).contain('localechanger-stub></localechanger-stub>');
    });
    it('Router view', () => {
      expect(wrapper.html()).contain('<router-view></router-view>');
    });
    it('Legal copy', () => {
      expect(wrapper.html()).contain('<footer-stub></footer-stub>')
    });
  })
  describe('Clickable items check', () => {

  })
})