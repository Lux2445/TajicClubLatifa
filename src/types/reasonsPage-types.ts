export interface ReasonItem {
  title: string;
  desc: string;
}

export interface ReasonsPage {
  title: string;
  subtitle: string;
  items: ReasonItem[];
  back: string;
}

export interface Translations {
  reasonsPage: ReasonsPage;
}
