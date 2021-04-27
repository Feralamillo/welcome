import axios from 'axios';
import { ApiResponse } from '../../types/api.types';
import { User } from '../../types/user.types';
import { userApi } from '../user.api';

const mock = jest.spyOn(axios, 'get');

describe('userApi - getUser', () => {
  it('should return the response', async () => {
    expect.assertions(1);
    const mockUser: User = {
      firstName: 'Jim',
      lastName: 'Morrison',
      food: 'Pizza',
      img: 'srcImage',
    };
    const mockResponse = {
      status: 200,
      data: mockUser,
    };

    mock.mockResolvedValueOnce(Promise.resolve(mockResponse));

    const result = await userApi.getUser();

    const expected: ApiResponse<User> = {
      success: true,
      result: mockUser,
    };

    expect(result).toEqual(expected);
  });

  it('should handle an error with response', async () => {
    expect.assertions(1);

    const mockResponse = {
      response: {
        status: 400,
        data: {
          message: 'Error',
        },
      },
    };

    mock.mockResolvedValueOnce(Promise.reject(mockResponse));

    const result = await userApi.getUser();

    const expected: ApiResponse<User> = {
      success: false,
      status: 400,
    };

    expect(result).toEqual(expected);
  });

  it('should handle an unknown', async () => {
    expect.assertions(1);

    const mockError: Error = {
      name: 'unknown Error',
      message: 'There is an error',
    };

    mock.mockImplementationOnce(() => {
      throw mockError;
    });

    const result = await userApi.getUser();

    const expected: ApiResponse<User> = {
      success: false,
      status: 404,
    };

    expect(result).toEqual(expected);
  });
});
