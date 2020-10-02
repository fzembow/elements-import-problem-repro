import { Config } from '@elements/application';

/**
 * Server only app config settings.
 */
export default Config.create((config: Config) => {
  // server
  config.set('server.port', 3000);
  config.set('server.ssl.on', !config.is('dev'));
  config.set('server.ssl.key', '/path/to/ssl.key');
  config.set('server.ssl.cert', '/path/to/ssl.crt');

  // session
  config.set('session.secret', 'c61fcf19993f08d293ee63bb5e922cfb16b60455');
  config.set('session.loggedInExpires', undefined);
  config.set('session.loggedOutExpires', undefined);

  // database
  config.set('db.database', 'graphics');
});
