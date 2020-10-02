import { Router, IRequest } from '@elements/application';

let router = new Router();
export default router;

router.page('/', async function(this: IRequest) {
  this.title('Home - Graphics');
  this.description('');
  this.render('app/pages/home');
});
