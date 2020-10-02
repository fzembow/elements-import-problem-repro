import {
  Application,
  IRequest,
  NotAuthorizedError,
  NotFoundError,
} from '@elements/application';
import config from 'app/config';

let app = new Application();
export default app;

// meta
app.title('Graphics');
app.description('');

// pages
app.page('/', async function(this: IRequest) {
  this.title('Home - Graphics');
  this.description('');
  this.render('app/pages/home');
});

// errors
app.on('notAuthorizedError', async function(this: IRequest, error: NotAuthorizedError) {
  this.title('Login - Graphics');
  this.render('app/pages/login');
});

app.on('notFoundError', async function(this: IRequest, error: NotFoundError) {
  this.title('Not Found - Graphics');
  this.render('app/pages/not-found-error', {
    error: error
  });
});

app.on('unhandledError', async function(this: IRequest, error: any) {
  this.title('Unhandled Error - Graphics');
  this.render('app/pages/unhandled-error', {
    error: error
  });
});

// server only
app.server(require('./server'));
