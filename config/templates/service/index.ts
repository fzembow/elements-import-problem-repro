import {
  Service,
  NotAuthorizedError,
  NotFoundError,
  NotAcceptableError,
} from '@elements/application';

export interface IData {
  [key: string]: any;
}

/**
 * Example usage:
 * 
 *   await this.call('main.getData');
 */
export async function getData(this: Service, postId: string): Promise<IData> {
  // Examples:
  //
  //   Await a sql result of rows from a sql query:
  //   let sqlResult = await this.sql('select id, title, slug from posts where id = $1 limit 1', [postId]);
  //
  //   Map the sql results onto another array.
  //   sqlResult.map(row => { id: row.id, title: format(row.title) });
  //
  //   Get the first row of the result.
  //   let record = sqlResult.first();
  //
  //   Throw a not found error if no rows.
  //   let record = sqlResult.firstOrThrowNotFoundError(`The post was not found.`);
  //
  //   Throw a not authorized error if no rows.
  //   let record = sqlResult.firstOrThrowNotAuthorizedError();
  //
  //   Throw a custom error if no rows.
  //   let record = sqlResult.firstOrThrowError(Error, 'some error message');
  //
  //   Return the record to the rpc caller or the route caller.
  //   return record;
  return {};
}
