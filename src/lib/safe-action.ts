import { createSafeActionClient } from "next-safe-action";

export const safeAction = createSafeActionClient({
  handleReturnedServerError: (e) => {
    throw e;
  },
});
