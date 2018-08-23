import PhraseTextReducer from './PhraseTextReducer'

describe('reducers', () => {
  describe('PhraseTextReducer', () => {
    it('returns an empty object as initial state', () => {
      expect(PhraseTextReducer(undefined, {})).toEqual({})
    });

    it('returns the same state if action is not UPDATE_PHRASE_TEXT', () => {
      expect(PhraseTextReducer({foo: 'bar'} , { type: 'OTHER_ACTION' })).toEqual({foo: 'bar'})
    });

    it('returns the updated text if  action is  UPDATE_PHRASE_TEXT', () => {
      expect(PhraseTextReducer({ textValue: 'old one' } , { type: 'UPDATE_PHRASE_TEXT', newText: 'new one' }))
        .toEqual({textValue: 'new one'})
    });
  })
});
