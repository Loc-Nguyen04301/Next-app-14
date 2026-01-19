export interface TMenuItem {
  url: string;
  title: string;
  icon: React.ReactNode;
}

export interface ActiveLinkProps {
  url: string;
  children?: React.ReactNode;
}
