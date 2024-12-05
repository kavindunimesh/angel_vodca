import { NavbarData, SeoData } from "@/types/services/IFetchData";

import HttpRequest from "@/lib/utils/httpRequest";

const httpRequest = new HttpRequest();

export async function FetchNavbarData(): Promise<NavbarData | null> {
  try {
    const response = await httpRequest.get<NavbarData>({
      path: '/content',
      accessToken: '',
    });

    if (response.status) {
      return response.data;
    } else {
      console.error('Error:', response.message);
      return null;
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    return null;
  }
}

export async function FetchSeoData(pathname: string): Promise<SeoData | null> {
  try {
    const response = await httpRequest.get<SeoData[]>({
      path: '/seo',
      accessToken: '',
    });

    if (response.status) {
      return response.data?.find((seo: SeoData) => seo?.path === pathname) || null;
    } else {
      console.error('Error:', response.message);
      return null;
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    return null;
  }
}