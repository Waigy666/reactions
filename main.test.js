
/** * @jest-environment jsdom */
const {getagerange} = require('./main.js')

test('that Jest is working', () => {
   expect(2+2).toBe(4);
});


test('That function getagerange works as expected for score <298', () => {
   expect(getagerange(290)).toBe('Your reaction age is less than 18 years old!');
   expect(getagerange(290)).not.toBe('Your reaction age is: \r\n\ 20 to 30 years old!');

});

// expect(getagerange(450)).toBe('Your reaction age is: \r\n\ 30 to 40 years old!');
//    expect(getagerange(217)).toBe('Your reaction age is less than 18 years old!');
//    expect(getagerange(789)).toBe('Your reaction age is: \r\n\ 60 to 70 years old!');
//    expect(getagerange(1000)).toBe('Your reaction age is: \r\n\ 80 to 90 years old!');