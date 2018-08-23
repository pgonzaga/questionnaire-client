import { UpdatePhraseText } from './UpdatePhraseText'

describe('actions', () => {
  describe('UpdatePhraseText', () => {
    it('returns the rigth object', () => {
      expect(UpdatePhraseText('new text added')).toEqual({ type: 'UPDATE_PHRASE_TEXT', newText: 'new text added' });
    });
  })
});
