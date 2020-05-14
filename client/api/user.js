import request from 'superagent';
import { requestUser, receivedUser, receivedError } from '../actions/index';
import { getEncodedToken } from 'authenticare/client';

const URL = '/api/user/';
