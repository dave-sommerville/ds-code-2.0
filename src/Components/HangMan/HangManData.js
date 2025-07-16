function HangManData() {
  const hangingMan = [
    `++---+\n||\u00A0\u00A0\u00A0\n||\u00A0\u00A0\u00A0\n||\u00A0\u00A0\u00A0\n||______`,
    `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0\u00A0\n||\u00A0\u00A0\u00A0\n||______`,
    `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0\u00A0|\n||\u00A0\u00A0\u00A0\n||______`,
    `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0/|\n||\u00A0\u00A0\u00A0\n||______`,
    `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0/|\\\n||\u00A0\u00A0\u00A0\n||______`,
    `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0/|\\\n||\u00A0\u00A0/ \n||______`,
    `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0/|\\\n||\u00A0\u00A0/ \\\n||______`
  ];
  
  const hangmanPhrases = [
    'Quick brown fox', 'Jump over the fence', 'Life is a journey',
    'Home sweet home', 'Time heals all wounds', 'Better late than never',
    'Lost in the moment', 'Sky full of stars', 'Catch me if you can',
    'Dreams come true', 'Keep it simple', 'Live and let live',
    'Under the weather', 'Break the silence', 'Chasing the wind',
    'Eyes on the prize'
  ];
  function getRandomPhrase() {
  return hangmanPhrases[Math.floor(Math.random() * hangmanPhrases.length)];
  }
}
export default HangManData;