
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Partner {
  name: string;
  logo: string;
}

export interface CommunityCardProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
}
