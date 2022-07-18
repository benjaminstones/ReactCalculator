import { isBtnTagFound } from './stringUtils';
import { NON_OPERATOR_CHAR, HIGHLIGHTED, UTIL } from '../constants/index.js';


describe('isBtnTagFound', () => {
	it('returns true when tag is found', () => {  
		const mockTags = { NON_OPERATOR_CHAR, HIGHLIGHTED }
		const expected = isBtnTagFound(mockTags, HIGHLIGHTED)
		expect(expected).toBeTruthy();

	})
	it('returns false when tag is not found', () => {  
		const mockTags = { NON_OPERATOR_CHAR, HIGHLIGHTED }
		const expected = isBtnTagFound(mockTags, UTIL)
		expect(expected).toBeFalsy();

	})
})