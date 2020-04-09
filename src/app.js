'use strict';

import { CommentView } from './view/comment.js';
import { ContactView } from './view/contact.js';
import { ThxView } from './view/thx.js';
import { Router } from './libs/router.js';

function main() {
  const router = new Router();

  router.route('/comment', new CommentView(document.querySelector('.comment')));
  router.route('/thx', new ThxView(document.querySelector('.thx')));
  router.route(new ContactView(document.querySelector('.contact')));

  router.start();

  console.log('!!! its work');
}

if (document.readyState) {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}

console.log('12344123');