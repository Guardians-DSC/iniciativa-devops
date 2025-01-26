type NavLink = {
  label: string;
  url: string;
}

interface NavigationProps {
  links: NavLink[];
}

export type { NavLink, NavigationProps };
