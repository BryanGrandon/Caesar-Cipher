const selectAlphabet = (isEnglish) => {
  const alphabetEnglish = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetSpanish = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  return isEnglish
    ? alphabetEnglish.trim().split("")
    : alphabetSpanish.trim().split("");
};

const encrypted = (letterIndex, scrolling, alphabet) => {
  return letterIndex + scrolling < alphabet.length
    ? alphabet.at(letterIndex + scrolling)
    : alphabet.at(letterIndex + scrolling - alphabet.length);
};

const decrypt = (letterIndex, scrolling, alphabet) => {
  scrolling = -scrolling;
  return encrypted(letterIndex, scrolling, alphabet);
};

const caesarCipher = (
  message,
  scroll,
  isEnglish,
  withSpecialCharacters,
  isEncrypted
) => {
  let alphabet = selectAlphabet(isEnglish);

  let encryptedMessage = "";
  const messageInArray = message.trim().toUpperCase().split("");

  messageInArray.map((letter) => {
    if (alphabet.includes(letter)) {
      const letterIndex = alphabet.indexOf(letter);
      let scrolling = scroll % alphabet.length;

      encryptedMessage += !isEncrypted
        ? encrypted(letterIndex, scrolling, alphabet)
        : decrypt(letterIndex, scrolling, alphabet);
    } else {
      encryptedMessage += withSpecialCharacters ? letter : "";
    }
  });
  return encryptedMessage;
};

caesarCipher("x", -3, true, true, true);

export { caesarCipher };
