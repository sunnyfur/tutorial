import { observable, autorun } from 'mobx';

const todos = observable([
  { title: 'Spoil tea', completed: true },
  { title: 'Make coffee', completed: false },
]);

autorun(() => {
  console.log(
    'Remaining:',
    todos
      .filter((todo) => !todo.completed)
      .map((todo) => todo.title)
      .join(', ')
  );
});
// Prints: 'Remaining: Make coffee'

todos[0].completed = false;
// Prints: 'Remaining: Spoil tea, Make coffee'

todos[2] = { title: 'Take a nap', completed: false };
// Prints: 'Remaining: Spoil tea, Make coffee, Take a nap'

todos.shift();
