import { Application, Db } from '@elements/application';

/**
 * Add server only code to the app.
 */
export default function(app: Application) {
  // api routes
  // app.routes('/api/v1', require('app/routes/api/v1'));

  // after the web server starts
  app.on('started', async function() {
    // connect to the db specified in app/config/index.ts db.database config
    // setting.
    // try {
    //   await Db.connect()
    // } catch (err) {
    //   console.error(err);
    // }
  });
}
