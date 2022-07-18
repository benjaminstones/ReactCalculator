import { isBtnTagFound } from './stringUtils';
import { NON_OPERATOR_CHAR, HIGHLIGHTED } from '../constants/index.js';


describe('isBtnTagFound', () => {
	it('returns true when tag is found', () => {  
		const mockTags = { NON_OPERATOR_CHAR, HIGHLIGHTED }
		const expected = isBtnTagFound(mockTags, HIGHLIGHTED)
		expect(expected).toBeTruthy();

	})
})