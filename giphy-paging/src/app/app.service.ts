import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TestDataService } from "./test-data.service";
import { UrlService } from "./url.service";

@Injectable({
  providedIn: 'root'
})
export class appService {

  constructor(
    private httpClient: HttpClient,
    private urlService: UrlService,
    private testData: TestDataService) { }

  getImages(keyword: string, pageOffest: number): Observable<GiffyResponce> {
    const params = new URLSearchParams()
    params.append('q', keyword)
    params.append('api_key', 'wnr7LMgNBTBejk720sp9YRqyegPlN1dQ')
    params.append('limit', '9')
    params.append('offset', pageOffest.toString())
    return this.httpClient.request<GiffyResponce>('GET', this.urlService.giffySearchUrl + '?' + params.toString())
  }
}


export interface GiffyResponce {
  data: any[];
  pagination: GiffyPagnation;
  meta: GiffyMeta;
}

export interface GiffyMeta {
  msg: string;
  status: number;
  response_id: string;
}

export interface GiffyPagnation {
  total_count: number;
  count: number;
  offset: number;
}

export interface GiffyData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  user: User;
  analytics_response_payload: string;
  analytics: Analytics;
}


export interface Original {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

export interface Downsized {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface DownsizedLarge {
  height: string;
  width: string;
  size: string;
  url: string;
}



export interface Images {
  original: Original;
  downsized: any;
  downsized_large: any;
  downsized_medium: any;
  downsized_small: any;
  downsized_still: any;
  fixed_height: any;
  fixed_height_downsampled: any;
  fixed_height_small: any;
  fixed_height_small_still: any;
  fixed_height_still: any;
  fixed_width: any;
  fixed_width_downsampled: any;
  fixed_width_small: any;
  fixed_width_small_still: any;
  fixed_width_still: any;
  looping: any;
  original_still: any;
  original_mp4: any;
  preview: any;
  preview_gif: any;
  preview_webp: any;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export interface Onload {
  url: string;
}

export interface Onclick {
  url: string;
}

export interface Onsent {
  url: string;
}

export interface Analytics {
  onload: Onload;
  onclick: Onclick;
  onsent: Onsent;
}



