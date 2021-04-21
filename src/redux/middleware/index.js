import logger from 'redux-logger';
import { orderMiddleware } from './orderMiddleware';

export const middleware = [logger, orderMiddleware];
