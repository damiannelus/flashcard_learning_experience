import chai, { expect } from 'chai';
import flashCard from '../src/data_objects/flashCard';
import faker from 'faker';

// chai.should()

describe("test flashcards class", () => {
  it("validate create", () => {
    const stubValue = {
      id: faker.random.number(),
      word: faker.hacker.noun(),
      translation: faker.hacker.noun(),
    }

    const testFlashCard = new flashCard(stubValue.id, stubValue.word, stubValue.translation);

    expect(testFlashCard.id).to.eq(stubValue.id);
    expect(testFlashCard.word).to.eq(stubValue.word);
    expect(testFlashCard.translation).to.eq(stubValue.translation);
    expect(testFlashCard.isChecked).to.eq(false);
  });
  it("validate checking a fc", () => {
    
  })
})