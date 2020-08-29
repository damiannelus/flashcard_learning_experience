import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import footer from '../../src/components/Footer/footer';

describe('Footer', () => {
  const wrapper = shallowMount(footer, {
    mocks: {
      $t: (msg) => msg
    }
  });
  describe('Basic elements check', () => {
    it('Legal copy', () => {
      expect(wrapper.html()).contain('<h6>')
    });
    it('Toggle button', () => {
      expect(wrapper.html()).contain('b-form-radio-group')
    });
  })
  describe('Clickable items check', () => {
    it('Enable', () => {
      // Check if disabled -> default form
      expect(wrapper.vm.selected).to.be.equal('disabled');

      // Check if clickable. Click + enabled?
      wrapper.find('b-form-radio-group').trigger('change');
      expect(wrapper.vm.selected).to.be.equal('enabled');
    });
    it('Disable', () => {
      wrapper.find('b-form-radio-group').trigger('change');
      expect(wrapper.vm.selected).to.be.equal('disabled');
    });
  })
})