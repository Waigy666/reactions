
const {getagerange} = require('./main.js')

test('that Jest is working', () => {
   expect(2+2).toBe(4);
});


describe('Testing the lower breakpoint', () => {
   it('That function getagerange works as expected for score <298', () => {
      expect(getagerange(290)).toBe('Your reaction age is less than 18 years old!');
      expect(getagerange(290)).not.toBe('Your reaction age is: \r\n\ 20 to 30 years old!');
   });

   it('That function getagerange works as expected on 298 and surrounding values', () => {
      expect(getagerange(297)).toBe('Your reaction age is less than 18 years old!');
      expect(getagerange(298)).not.toBe('Your reaction age is: \r\n\ 20 to 30 years old!');
      expect(getagerange(299)).toBe('Your reaction age is: \r\n\ 20 to 30 years old!');
      expect(getagerange(300)).not.toBe('Your reaction age is: \r\n\ 80 to 90 years old!');
   });
   
})