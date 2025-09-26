import { APP_ROUTES, LOGIN_TEXT } from "@/utils/constants";
import { NavBarOption } from "./navBarTypes";

export const navbarOptions: NavBarOption[] = [
  { name: "Showcase", href: APP_ROUTES.showcase },
  { name: "Docs", href: APP_ROUTES.docs },
  { name: "Blog", href: APP_ROUTES.blog },
  { name: "Analytics", href: APP_ROUTES.analytics },
  { name: "Templates", href: APP_ROUTES.templates },
  { name: "Enterprise", href: APP_ROUTES.enterprise },
];

export const searchPlaceholder = "Search documentation...";

export const loginOption: NavBarOption = {
  name: LOGIN_TEXT,
  href: APP_ROUTES.login,
};
