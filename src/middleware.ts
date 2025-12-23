import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr", "es", "de", "pt", "zh", "ja", "ar"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|fr|es|de|pt|zh|ja|ar)/:path*"],
};
