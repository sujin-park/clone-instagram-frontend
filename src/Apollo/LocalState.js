export const defaults = {
  isLoggeddIn: Boolean(localStorage.getItem("token")) || false
}

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggeddIn: true
        }
      });
      return null;
    },
    logUserout: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    }
  }
}