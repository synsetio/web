import Cookies from "js-cookie";

export const setCookiePreference = (preference: boolean) => {
  Cookies.set("cookie-preference", preference.toString(), { expires: 365 });
};

export const getCookiePreference = (): boolean | null => {
  const preference = Cookies.get("cookie-preference");
  return preference ? preference === "true" : null;
};

export const setAnalyticsCookie = (enabled: boolean) => {
  if (enabled) {
    // Set analytics cookies here
    Cookies.set("analytics-enabled", "true", { expires: 365 });
    // Initialize analytics (e.g., Google Analytics) here
  } else {
    // Remove analytics cookies
    Cookies.remove("analytics-enabled");
    // Disable analytics tracking here
  }
};
