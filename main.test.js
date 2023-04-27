
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

   it('That function getagerange works as expected on max of first range', () => {
      expect(getagerange(387)).toBe('Your reaction age is: \r\n\ 20 to 30 years old!');
      expect(getagerange(388)).toBe('Your reaction age is: \r\n\ 30 to 40 years old!');
      expect(getagerange(388)).not.toBe('Your reaction age is: \r\n\ 80 to 90 years old!');
   });
})

   describe('Testing the higher breakpoint', () => {
   it('That function getagerange works as expected on max of first range', () => {
      expect(getagerange(940)).toBe('Your reaction age is: \r\n\ 70 to 80 years old!');
      expect(getagerange(941)).toBe('Your reaction age is: \r\n\ 80 to 90 years old!');
      expect(getagerange(942)).toBe('Your reaction age is: \r\n\ 80 to 90 years old!');
      expect(getagerange(942)).not.toBe('Your reaction age is: \r\n\ 20 to 30 years old!');
   });

   it('That function getagerange works as expected on score >941', () => {
      expect(getagerange(941)).toBe('Your reaction age is: \r\n\ 80 to 90 years old!');
      expect(getagerange(941)).not.toBe('Your reaction age is: \r\n\ 20 to 30 years old!');
      expect(getagerange(1000)).toBe('Your reaction age is: \r\n\ 80 to 90 years old!');

   });


   describe('Testing long delay clicks', () => {
      it('That function getagerange works as expected on very high values', () => {
         expect(getagerange(10000)).toBe('Your reaction age is: \r\n\ 80 to 90 years old!');
         expect(getagerange(20000)).toBe('Your reaction age is: \r\n\ 80 to 90 years old!');
         expect(getagerange(40000)).not.toBe('Your reaction age is: \r\n\ 70 to 80 years old!');
      });

   });
   
})