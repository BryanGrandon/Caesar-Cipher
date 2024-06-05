const caesarCipher = (message, scroll, isEnglish, withSpecialCharacters) => {
  const alphabetEnglish = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetSpanish = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const alphabet = isEnglish
    ? alphabetEnglish.trim().split("")
    : alphabetSpanish.trim().split("");

  let encryptedMessage = "";
  const messageInArray = message.trim().toUpperCase().split("");

  messageInArray.map((letter) => {
    if (alphabet.includes(letter)) {
      const letterIndex = alphabet.indexOf(letter);
      let scrolling = scroll % alphabet.length;

      if (letterIndex + scrolling < alphabet.length) {
        encryptedMessage += alphabet.at(letterIndex + scrolling);
      } else if (letterIndex + scrolling >= alphabet.length) {
        encryptedMessage += alphabet.at(
          letterIndex + scrolling - alphabet.length
        );
      }
    } else {
      encryptedMessage += withSpecialCharacters ? letter : "";
    }
  });
  return encryptedMessage;
};

export { caesarCipher };
