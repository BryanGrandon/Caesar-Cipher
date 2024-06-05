const caesarCipher = (
  message,
  scroll,
  isEnglish,
  withSpecialCharacters,
  isEncrypted
) => {
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

      if (!isEncrypted) {
        encryptedMessage +=
          letterIndex + scrolling < alphabet.length
            ? alphabet.at(letterIndex + scrolling)
            : alphabet.at(letterIndex + scrolling - alphabet.length);
      } else {
        encryptedMessage +=
          letterIndex + scrolling < alphabet.length
            ? alphabet.at(letterIndex - scrolling)
            : alphabet.at(letterIndex - scrolling + alphabet.length);
      }
    } else {
      encryptedMessage += withSpecialCharacters ? letter : "";
    }
  });
  return encryptedMessage;
};

export { caesarCipher };
