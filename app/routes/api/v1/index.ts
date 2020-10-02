import { Router, IRequest } from '@elements/application';

let router = new Router();
export default router;

router.route('get', '/hello', async function(this: IRequest) {
  this.json({ method: 'get', url: '/hello' });
});

router.route('post', '/hello', async function(this: IRequest) {
  this.json({ method: 'post', url: '/hello' });
});

router.route('put', '/hello', async function(this: IRequest) {
  this.json({ method: 'put', url: '/hello' });
});

router.route('delete', '/hello', async function(this: IRequest) {
  this.json({ method: 'delete', url: '/hello' });
});
