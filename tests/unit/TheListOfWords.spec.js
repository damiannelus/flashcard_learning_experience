import { shallowMount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai';
import Vuex from 'vuex'
import TheListOfWords from '../../src/components/ListOfWords/TheListOfWords';
import FlashCard from '../../src/data_objects/flashCard';
import _ from "lodash";

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TheListOfWords', () => {
  
    const wrapper = shallowMount(TheListOfWords, {
      mocks: {
        $t: (msg) => msg
      },
      stubs: {
        'LoadFileComponent': true, 
        'WordsForGuessing': true, 
        'ListOfDone':true, 
        'LoadPredefinedSets': true, 
        'newFlashCardForm': true}
    });
  // TODO: disseminate wide and narrow (RWD) versions
  describe('Basic elements check - wide version', () => {

    it('Words for guessing presence', () => {
      expect(wrapper.html()).contain('words-for-guessing')
    });
    it('List of done presence', () => {
      expect(wrapper.html()).contain('ListOfDone')
    });
    it('Add flash card presence', () => {
      expect(wrapper.html()).contain('newFlashCardForm')
    });
    it('Load predefined set presence', () => {
      expect(wrapper.html()).contain('LoadPredefinedSets')
    });
    it('Upload presence', () => {
      expect(wrapper.html()).contain('LoadFileComponent')
    });

  });
  // describe('Basic elements check - narrow version', () => {
  //   it('')

  // });

  describe('Clickable items check - wide version', () => {
    // it('shuffle cards', () => {
    //   // changed order
    //   // reset load button
    // });
    // it('empty list', ()=> {
    //   // Display of label
    // })
  });
});
