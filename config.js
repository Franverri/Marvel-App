import md5 from 'md5';
import { publicKey, privateKey } from '@env';

const ts = 'timestamp';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiParams = {
  ts,
  apikey: publicKey,
  hash,
	baseURL: 'https://gateway.marvel.com'
};

export default apiParams;
