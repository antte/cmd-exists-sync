import test from 'ava';
import cmdExists from '../lib/index.js';

test(`check if command 'ls' exists`, t => {
  t.same(cmdExists('ls'), true);
});

test(`check if command 'grupy' exists`, t => {
  t.same(cmdExists('grupy'), false);
});