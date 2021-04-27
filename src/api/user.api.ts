import axios from 'axios';

import { ApiResponse } from '../types/api.types';
import { User } from '../types/user.types';

export const userApi = {
  getUser: async (): Promise<ApiResponse<User>> => {
    try {
      /* @TODO: API_URL as env variable */
      const response = await axios.get('http://localhost:4000/api/user');

      return {
        success: true,
        result: response.data,
      };
    } catch (err) {
      if (err.response) {
        return {
          success: false,
          status: err.response.status,
        };
      }

      return {
        success: false,
        status: 404,
      };
    }
  },
};
