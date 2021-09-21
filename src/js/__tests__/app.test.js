import Game from '../app';

document.body.innerHTML = '<div id="root"></div>';

test('test 1', () => {
  const game = new Game();
  expect(game.name).toBe('Starting template');
});
