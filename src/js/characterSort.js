export default function charactersSort(characters) {
    return characters.sort((a, b) => (a.health > b.health ? -1 : 1));
  }