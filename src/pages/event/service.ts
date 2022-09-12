import { request } from 'alita';

export async function query(): Promise<any> {
  return request('/api/herolist.json', { method: 'get' });
}
