import axios from "../core/axios";

export const getToken = async () => {
  const res = await axios.get("http://localhost:80/api/sanctum/csrf-cookie", {
    withCredentials: true,
  });
  return res.data;
};

export const register = async (values, token) => {
  const res = await axios.post(
    "http://localhost:80/api/register",
    values,
    { withCredentials: true },
    {
      headers: {
        "X-CSRF-TOKEN": token,
      },
    }
  );
  return res.data;
};

export const login = async (values, token) => {
  const res = await api.post(
    "http://localhost:80/api/login",
    values,
    { withCredentials: true },
    {
      headers: {
        "X-CSRF-TOKEN": token,
      },
    }
  );
  return res.data;
};

export const logout = async (token, authToken) => {
  const res = await api.post(

    "http://localhost/api/logout",
    {},
    {
      withCredentials: true,
      headers: {
        "X-CSRF-TOKEN": token,
        'Authorization': 'Bearer ' + authToken,
      },
    }
  );
  return res.data;
}