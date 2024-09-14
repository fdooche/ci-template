import healthCheck from '../healthCheck';
import charactersSort from '../characterSort';

test.each([
  [{ name: 'Маг', health: 14 }, 'critical'],
  [{ name: 'Воин', health: 32 }, 'wounded'],
  [{ name: 'Вор', health: 55 }, 'healthy'],
])('health check', (character, expected) => {
  const result = healthCheck(character);
  expect(result).toBe(expected);
});

test('characters sort', () => {
  const result = charactersSort([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);

  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});