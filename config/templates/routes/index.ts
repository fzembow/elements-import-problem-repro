import { Router, IRequest } from '@elements/application';

let router = new Router();
export default router;

router.page('/', async function(this: IRequest) {
  /**
   * this.title('Title');
   * this.description('Description.');
   * this.render('app/pages/some-page');
   */
});
