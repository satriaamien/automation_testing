export const login_test = {
  type: "object",
  properties: {
    success: {
      type: "boolean",
    },
    message: {
      type: "string",
    },
    accessToken: {
      type: "string",
    },
    refreshToken: {
      type: "string",
    },
  },
  required: ["success", "message", "accessToken", "refreshToken"],
};
