import { shallowMount } from '@vue/test-utils';
import TheListOfWords from '../../src/components/ListOfWords/TheListOfWords';

describe('TheListOfWords', () => {
  const wrapper = shallowMount(TheListOfWords, {
    mocks: {
      $t: (msg) => msg
    }
  });
  describe('Basic elements check', () => {
    
  })
  describe('Clickable items check', () => {
    it('shuffle cards', () => {
      // changed order
      // reset load button
    });
    it('empty list', ()=> {
      // Display of label
    })
  })
})