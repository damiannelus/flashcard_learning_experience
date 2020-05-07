import { shallowMount } from '@vue/test-utils'
import FlashCard from "../../src/data_objects/flashCard";
const assert = require('assert')

describe('FlashCard basic CRUD', () => {
  it('Create a FC', () => {
    // Setup
    const id = Math.floor(Math.random()*10000);
    const word = 'test word';
    const translation = 'testowe tłumaczeni ąś';
    // Exercise
    const testFlashCard = new FlashCard(id, word, translation);
    // Verify
    assert.equal(testFlashCard.id, id);
    assert.equal(testFlashCard.word, word);
    assert.equal(testFlashCard.translation, translation);
    // Teardown - not needed
  })
})