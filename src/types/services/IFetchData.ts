export type NavBarItem = {
  name: string;
  path: string;
  items?: Array<{
    name: string;
    path: string;
    items?: Array<{
      name: string;
      path: string;
    }>;
  }>;
}

export type NavbarData = {
  logo: string;
  contacts: {
    phone1: string;
    phone2: string;
    email: string;
  };
  navigation: Array<NavBarItem>;
  sliders: Array<{
    image: string;
    text1: string;
    text2: string;
    text3: string | null;
    btn1: {
      text: string;
      path: string;
    };
    btn2: {
      text: string;
      path: string;
    };
  }>;
} | null;

export type SeoData = {
  id: number;
  path: string;
  title: string;
  description: string;
} | null;