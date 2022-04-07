// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

// create cardio
export const createCardio = (cardioData) => {
  return fetch("/api/users/cardio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardioData),
  });
};

// create resistance
export const createResistance = (resistanceData) => {
  return fetch("/api/users/resistance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(resistanceData),
  });
};

// create goal
export const createGoals = (goalData) => {
  return fetch("/api/users/goal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(goalData),
  });
};

//cardio history
export const getAllCardio = (cardioData) => {
  return fetch("/api/users/cardio", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardioData),
  });
};

//resistance history
export const getAllResistance = (resistanceData) => {
  return fetch("/api/users/resistance", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(resistanceData),
  });
};

//goal history
export const getAllGoals = (goalData) => {
  return fetch("/api/users/goal", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(goalData),
  });
};

export const getCardioById = (cardioId) => {
  return fetch(`/api/users/cardio/${cardioId}`, {
    method: "GET",
    headers: {
      // authorization: `Bearer ${token}`,
    },
  });
};

export const getResistanceById = (resistanceId) => {
  return fetch(`/api/users/resistance/${resistanceId}`, {
    method: "GET",
    headers: {
      // authorization: `Bearer ${token}`,
    },
  });
};
