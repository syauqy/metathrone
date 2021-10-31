// const CONTRACT_ADDRESS = '0x706a6A918f8C092785C039B5BB0143AFE9957721';
const CONTRACT_ADDRESS = "0xF0E92027465ED9AC45e2f45375646edf76f6F69C";

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };
