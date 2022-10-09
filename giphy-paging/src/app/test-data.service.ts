import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { GiffyResponce } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  helloSubject = new ReplaySubject<GiffyResponce>(1)
  constructor() {
    this.helloSubject.next(this.hello);
  }

  hello: GiffyResponce = {
    "data": [
      {
        "type": "gif",
        "id": "5FDfOtafB4Gnwr9dBm",
        "url": "https://giphy.com/gifs/thedrewbarrymoreshow-hello-hi-drew-barrymore-5FDfOtafB4Gnwr9dBm",
        "slug": "thedrewbarrymoreshow-hello-hi-drew-barrymore-5FDfOtafB4Gnwr9dBm",
        "bitly_gif_url": "https://gph.is/g/4bxdgNn",
        "bitly_url": "https://gph.is/g/4bxdgNn",
        "embed_url": "https://giphy.com/embed/5FDfOtafB4Gnwr9dBm",
        "username": "thedrewbarrymoreshow",
        "source": "youtube.com/thedrewbarrymoreshow",
        "title": "Pick Up Hello GIF by The Drew Barrymore Show",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "youtube.com/thedrewbarrymoreshow",
        "is_sticker": 0,
        "import_datetime": "2020-11-12 19:47:56",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "480",
            "width": "430",
            "size": "2118339",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g",
            "mp4_size": "636001",
            "mp4": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g",
            "webp_size": "799692",
            "webp": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.webp&ct=g",
            "frames": "16",
            "hash": "35fdeee5fb1877369b27f79fa687a662"
          },
          "downsized": {
            "height": "480",
            "width": "430",
            "size": "1301583",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy-downsized.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "480",
            "width": "430",
            "size": "2118339",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "480",
            "width": "430",
            "size": "2118339",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "270",
            "width": "241",
            "mp4_size": "72163",
            "mp4": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy-downsized-small.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "480",
            "width": "430",
            "size": "80824",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy-downsized_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "179",
            "size": "322012",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.gif&ct=g",
            "mp4_size": "86988",
            "mp4": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.mp4&ct=g",
            "webp_size": "191086",
            "webp": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "179",
            "size": "130226",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.gif&ct=g",
            "webp_size": "82220",
            "webp": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "90",
            "size": "98071",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/100.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.gif&ct=g",
            "mp4_size": "29418",
            "mp4": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/100.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.mp4&ct=g",
            "webp_size": "66848",
            "webp": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/100.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "90",
            "size": "7601",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/100_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "179",
            "size": "21239",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "223",
            "width": "200",
            "size": "395564",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.gif&ct=g",
            "mp4_size": "99715",
            "mp4": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.mp4&ct=g",
            "webp_size": "221578",
            "webp": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "223",
            "width": "200",
            "size": "162445",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200w_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.gif&ct=g",
            "webp_size": "97304",
            "webp": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200w_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "112",
            "width": "100",
            "size": "121850",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/100w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.gif&ct=g",
            "mp4_size": "33633",
            "mp4": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/100w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.mp4&ct=g",
            "webp_size": "78350",
            "webp": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/100w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "112",
            "width": "100",
            "size": "9227",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/100w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "223",
            "width": "200",
            "size": "25651",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/200w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "5839811",
            "mp4": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy-loop.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "480",
            "width": "430",
            "size": "146505",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "534",
            "width": "480",
            "mp4_size": "636001",
            "mp4": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "192",
            "width": "172",
            "mp4_size": "43758",
            "mp4": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy-preview.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "78",
            "width": "70",
            "size": "48806",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy-preview.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "100",
            "width": "90",
            "size": "41652",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy-preview.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "536",
            "width": "480",
            "size": "2118339",
            "url": "https://media3.giphy.com/media/5FDfOtafB4Gnwr9dBm/480w_s.jpg?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media1.giphy.com/avatars/thedrewbarrymoreshow/ERJYiDug0nC8.jpg",
          "banner_image": "https://media1.giphy.com/headers/thedrewbarrymoreshow/3FhX8CFN7bpX.jpg",
          "banner_url": "https://media1.giphy.com/headers/thedrewbarrymoreshow/3FhX8CFN7bpX.jpg",
          "profile_url": "https://giphy.com/thedrewbarrymoreshow/",
          "username": "thedrewbarrymoreshow",
          "display_name": "The Drew Barrymore Show",
          "description": "The official GIPHY channel for The Drew Barrymore Show!! \r\n\r\nWeekdays | Check local listings!",
          "instagram_url": "https://instagram.com/thedrewbarrymoreshow",
          "website_url": "https://www.thedrewbarrymoreshow.com/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTVGRGZPdGFmQjRHbndyOWRCbSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTVGRGZPdGFmQjRHbndyOWRCbSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTVGRGZPdGFmQjRHbndyOWRCbSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTVGRGZPdGFmQjRHbndyOWRCbSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "28GHfhGFWpFgsQB4wR",
        "url": "https://giphy.com/gifs/foxhomeent-hello-friday-mrs-doubtfire-28GHfhGFWpFgsQB4wR",
        "slug": "foxhomeent-hello-friday-mrs-doubtfire-28GHfhGFWpFgsQB4wR",
        "bitly_gif_url": "https://gph.is/2zoREKd",
        "bitly_url": "https://gph.is/2zoREKd",
        "embed_url": "https://giphy.com/embed/28GHfhGFWpFgsQB4wR",
        "username": "foxhomeent",
        "source": "",
        "title": "Robin Williams Hello GIF by 20th Century Fox Home Entertainment",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2018-11-02 15:19:09",
        "trending_datetime": "2020-08-11 18:07:53",
        "images": {
          "original": {
            "height": "450",
            "width": "450",
            "size": "2593532",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g",
            "mp4_size": "262235",
            "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g",
            "webp_size": "340382",
            "webp": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.webp&ct=g",
            "frames": "48",
            "hash": "70351d377b8b3ff6dc848d6d293834d0"
          },
          "downsized": {
            "height": "450",
            "width": "450",
            "size": "1462844",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy-downsized.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "450",
            "width": "450",
            "size": "2593532",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "450",
            "width": "450",
            "size": "2593532",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "394",
            "width": "394",
            "mp4_size": "86179",
            "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy-downsized-small.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "450",
            "width": "450",
            "size": "17833",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy-downsized_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "486633",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.gif&ct=g",
            "mp4_size": "57647",
            "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.mp4&ct=g",
            "webp_size": "137934",
            "webp": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "84425",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.gif&ct=g",
            "webp_size": "44400",
            "webp": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "171117",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/100.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.gif&ct=g",
            "mp4_size": "22459",
            "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/100.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.mp4&ct=g",
            "webp_size": "49108",
            "webp": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/100.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "100",
            "size": "2997",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/100_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "200",
            "size": "8369",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "487627",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.gif&ct=g",
            "mp4_size": "57647",
            "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.mp4&ct=g",
            "webp_size": "138006",
            "webp": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "88331",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200w_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.gif&ct=g",
            "webp_size": "44954",
            "webp": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200w_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "170109",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/100w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.gif&ct=g",
            "mp4_size": "22459",
            "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/100w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.mp4&ct=g",
            "webp_size": "48880",
            "webp": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/100w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "100",
            "width": "100",
            "size": "2975",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/100w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "200",
            "width": "200",
            "size": "8237",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2368641",
            "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy-loop.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "450",
            "width": "450",
            "size": "98065",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "480",
            "width": "480",
            "mp4_size": "262235",
            "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "196",
            "width": "196",
            "mp4_size": "27735",
            "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy-preview.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "129",
            "width": "129",
            "size": "49268",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy-preview.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "220",
            "width": "220",
            "size": "49102",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy-preview.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "480",
            "width": "480",
            "size": "2593532",
            "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/480w_s.jpg?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media4.giphy.com/channel_assets/foxhomeent/tCKZC54c2Sgc.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/foxhomeent/dCOcfstywrkP.jpg",
          "banner_url": "https://media4.giphy.com/channel_assets/foxhomeent/dCOcfstywrkP.jpg",
          "profile_url": "https://giphy.com/foxhomeent/",
          "username": "foxhomeent",
          "display_name": "20th Century Fox Home Entertainment",
          "description": "Welcome to the official Fox Home Entertainment Giphy channel! Browse our gifs for even more of your favorite Fox stars, movies and TV shows.\r\n\r\nShop, watch, explore and get even more from your favorite movies and TV shows at http://FoxMovies.com/, the official site for 20th Century Fox Home Entertainment.\r\n\r\nDownload the Movie of the Day iOS, and now also Apple TV app for up to 70% discount on movies everyday: \r\nhttp://bit.ly/FHEMovieoftheDay",
          "instagram_url": "https://instagram.com/foxhomeent",
          "website_url": "",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTI4R0hmaEdGV3BGZ3NRQjR3UiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTI4R0hmaEdGV3BGZ3NRQjR3UiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTI4R0hmaEdGV3BGZ3NRQjR3UiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTI4R0hmaEdGV3BGZ3NRQjR3UiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "icUEIrjnUuFCWDxFpU",
        "url": "https://giphy.com/gifs/foxhomeent-napoleon-dynamite-20th-century-fox-icUEIrjnUuFCWDxFpU",
        "slug": "foxhomeent-napoleon-dynamite-20th-century-fox-icUEIrjnUuFCWDxFpU",
        "bitly_gif_url": "https://gph.is/g/4wP9Dxw",
        "bitly_url": "https://gph.is/g/4wP9Dxw",
        "embed_url": "https://giphy.com/embed/icUEIrjnUuFCWDxFpU",
        "username": "foxhomeent",
        "source": "",
        "title": "Napoleon Dynamite Hello GIF by 20th Century Fox Home Entertainment",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2019-09-04 18:50:23",
        "trending_datetime": "2020-08-27 00:00:05",
        "images": {
          "original": {
            "height": "260",
            "width": "480",
            "size": "952123",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g",
            "mp4_size": "151547",
            "mp4": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g",
            "webp_size": "314464",
            "webp": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.webp&ct=g",
            "frames": "26",
            "hash": "0e277c7ddd9c6d1b862643dc9b45cc0b"
          },
          "downsized": {
            "height": "260",
            "width": "480",
            "size": "952123",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "260",
            "width": "480",
            "size": "952123",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "260",
            "width": "480",
            "size": "952123",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "260",
            "width": "480",
            "mp4_size": "151547",
            "mp4": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy-downsized-small.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "260",
            "width": "480",
            "size": "952123",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "369",
            "size": "489254",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.gif&ct=g",
            "mp4_size": "88211",
            "mp4": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.mp4&ct=g",
            "webp_size": "244974",
            "webp": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "369",
            "size": "173049",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.gif&ct=g",
            "webp_size": "107728",
            "webp": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "185",
            "size": "185705",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/100.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.gif&ct=g",
            "mp4_size": "25735",
            "mp4": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/100.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.mp4&ct=g",
            "webp_size": "82886",
            "webp": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/100.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "185",
            "size": "9723",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/100_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "369",
            "size": "25708",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "108",
            "width": "200",
            "size": "166203",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.gif&ct=g",
            "mp4_size": "27515",
            "mp4": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.mp4&ct=g",
            "webp_size": "93768",
            "webp": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "108",
            "width": "200",
            "size": "60844",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200w_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.gif&ct=g",
            "webp_size": "36684",
            "webp": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200w_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "54",
            "width": "100",
            "size": "57847",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/100w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.gif&ct=g",
            "mp4_size": "9767",
            "mp4": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/100w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.mp4&ct=g",
            "webp_size": "34224",
            "webp": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/100w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "54",
            "width": "100",
            "size": "3660",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/100w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "108",
            "width": "200",
            "size": "11654",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/200w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1221579",
            "mp4": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy-loop.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "260",
            "width": "480",
            "size": "59959",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "260",
            "width": "480",
            "mp4_size": "151547",
            "mp4": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "148",
            "width": "273",
            "mp4_size": "25908",
            "mp4": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy-preview.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "63",
            "width": "116",
            "size": "48238",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy-preview.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "98",
            "width": "180",
            "size": "34614",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy-preview.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.webp&ct=g"
          },
          "hd": {
            "height": "586",
            "width": "1080",
            "mp4_size": "462523",
            "mp4": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy-hd.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-hd.mp4&ct=g"
          },
          "480w_still": {
            "height": "260",
            "width": "480",
            "size": "952123",
            "url": "https://media3.giphy.com/media/icUEIrjnUuFCWDxFpU/480w_s.jpg?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media4.giphy.com/channel_assets/foxhomeent/tCKZC54c2Sgc.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/foxhomeent/dCOcfstywrkP.jpg",
          "banner_url": "https://media4.giphy.com/channel_assets/foxhomeent/dCOcfstywrkP.jpg",
          "profile_url": "https://giphy.com/foxhomeent/",
          "username": "foxhomeent",
          "display_name": "20th Century Fox Home Entertainment",
          "description": "Welcome to the official Fox Home Entertainment Giphy channel! Browse our gifs for even more of your favorite Fox stars, movies and TV shows.\r\n\r\nShop, watch, explore and get even more from your favorite movies and TV shows at http://FoxMovies.com/, the official site for 20th Century Fox Home Entertainment.\r\n\r\nDownload the Movie of the Day iOS, and now also Apple TV app for up to 70% discount on movies everyday: \r\nhttp://bit.ly/FHEMovieoftheDay",
          "instagram_url": "https://instagram.com/foxhomeent",
          "website_url": "",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPWljVUVJcmpuVXVGQ1dEeEZwVSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWljVUVJcmpuVXVGQ1dEeEZwVSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWljVUVJcmpuVXVGQ1dEeEZwVSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWljVUVJcmpuVXVGQ1dEeEZwVSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3otPongOYeG9iINM8o",
        "url": "https://giphy.com/gifs/filmeditor-the-legend-of-sleepy-hollow-3otPongOYeG9iINM8o",
        "slug": "filmeditor-the-legend-of-sleepy-hollow-3otPongOYeG9iINM8o",
        "bitly_gif_url": "http://gph.is/2e1fpRI",
        "bitly_url": "http://gph.is/2e1fpRI",
        "embed_url": "https://giphy.com/embed/3otPongOYeG9iINM8o",
        "username": "",
        "source": "",
        "title": "The Legend Of Sleepy Hollow Hello GIF by filmeditor",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2016-10-17 14:35:37",
        "trending_datetime": "2020-11-15 16:15:07",
        "images": {
          "original": {
            "height": "358",
            "width": "452",
            "size": "890081",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g",
            "mp4_size": "149113",
            "mp4": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g",
            "webp_size": "222636",
            "webp": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.webp&ct=g",
            "frames": "23",
            "hash": "65b3ce10791f6f887a0f723a9e843203"
          },
          "downsized": {
            "height": "358",
            "width": "452",
            "size": "890081",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "358",
            "width": "452",
            "size": "890081",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "358",
            "width": "452",
            "size": "890081",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "358",
            "width": "452",
            "mp4_size": "149113",
            "mp4": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy-downsized-small.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "358",
            "width": "452",
            "size": "890081",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "253",
            "size": "279403",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.gif&ct=g",
            "mp4_size": "66175",
            "mp4": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.mp4&ct=g",
            "webp_size": "135106",
            "webp": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "253",
            "size": "107671",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.gif&ct=g",
            "webp_size": "66748",
            "webp": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "127",
            "size": "103786",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/100.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.gif&ct=g",
            "mp4_size": "25607",
            "mp4": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/100.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.mp4&ct=g",
            "webp_size": "61286",
            "webp": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/100.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "127",
            "size": "6163",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/100_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "253",
            "size": "16541",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "158",
            "width": "200",
            "size": "207680",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.gif&ct=g",
            "mp4_size": "47329",
            "mp4": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.mp4&ct=g",
            "webp_size": "103750",
            "webp": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "158",
            "width": "200",
            "size": "72805",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200w_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.gif&ct=g",
            "webp_size": "47704",
            "webp": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200w_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "79",
            "width": "100",
            "size": "73075",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/100w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.gif&ct=g",
            "mp4_size": "18508",
            "mp4": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/100w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.mp4&ct=g",
            "webp_size": "44292",
            "webp": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/100w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "79",
            "width": "100",
            "size": "4539",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/100w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "158",
            "width": "200",
            "size": "15604",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/200w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1418818",
            "mp4": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy-loop.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "358",
            "width": "452",
            "size": "58183",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "358",
            "width": "452",
            "mp4_size": "149113",
            "mp4": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "204",
            "width": "257",
            "mp4_size": "34982",
            "mp4": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy-preview.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "105",
            "width": "133",
            "size": "48672",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy-preview.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "156",
            "width": "196",
            "size": "49542",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/giphy-preview.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "380",
            "width": "480",
            "size": "890081",
            "url": "https://media2.giphy.com/media/3otPongOYeG9iINM8o/480w_s.jpg?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTNvdFBvbmdPWWVHOWlJTk04byZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvdFBvbmdPWWVHOWlJTk04byZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvdFBvbmdPWWVHOWlJTk04byZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvdFBvbmdPWWVHOWlJTk04byZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "E1w0yvMxBIv5M8WkL8",
        "url": "https://giphy.com/gifs/E1w0yvMxBIv5M8WkL8",
        "slug": "E1w0yvMxBIv5M8WkL8",
        "bitly_gif_url": "https://gph.is/g/E03G6Bb",
        "bitly_url": "https://gph.is/g/E03G6Bb",
        "embed_url": "https://giphy.com/embed/E1w0yvMxBIv5M8WkL8",
        "username": "mostapesstudio",
        "source": "",
        "title": "Dino Hello GIF by DINOSALLY",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2021-07-06 03:48:48",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "360",
            "width": "360",
            "size": "75818",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g",
            "mp4_size": "91798",
            "mp4": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g",
            "webp_size": "92980",
            "webp": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.webp&ct=g",
            "frames": "21",
            "hash": "40ab4da2f55d0915b63ae00a3d329339"
          },
          "downsized": {
            "height": "360",
            "width": "360",
            "size": "75818",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "360",
            "width": "360",
            "size": "75818",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "360",
            "width": "360",
            "size": "75818",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "360",
            "width": "360",
            "mp4_size": "63833",
            "mp4": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy-downsized-small.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "360",
            "width": "360",
            "size": "75818",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "49301",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.gif&ct=g",
            "mp4_size": "33696",
            "mp4": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.mp4&ct=g",
            "webp_size": "47032",
            "webp": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "23830",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.gif&ct=g",
            "webp_size": "21390",
            "webp": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "24335",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/100.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.gif&ct=g",
            "mp4_size": "14461",
            "mp4": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/100.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.mp4&ct=g",
            "webp_size": "21206",
            "webp": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/100.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "100",
            "size": "2956",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/100_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "200",
            "size": "5464",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "49301",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.gif&ct=g",
            "mp4_size": "33696",
            "mp4": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.mp4&ct=g",
            "webp_size": "47032",
            "webp": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "23830",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200w_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.gif&ct=g",
            "webp_size": "21390",
            "webp": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200w_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "24335",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/100w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.gif&ct=g",
            "mp4_size": "14461",
            "mp4": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/100w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.mp4&ct=g",
            "webp_size": "21206",
            "webp": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/100w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "100",
            "width": "100",
            "size": "2956",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/100w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "200",
            "width": "200",
            "size": "5464",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/200w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "559842",
            "mp4": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy-loop.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "360",
            "width": "360",
            "size": "9471",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "480",
            "width": "480",
            "mp4_size": "91798",
            "mp4": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "318",
            "width": "318",
            "mp4_size": "26186",
            "mp4": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy-preview.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "360",
            "width": "360",
            "size": "32022",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy-preview.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "360",
            "width": "360",
            "size": "21646",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/giphy-preview.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "480",
            "width": "480",
            "size": "75818",
            "url": "https://media1.giphy.com/media/E1w0yvMxBIv5M8WkL8/480w_s.jpg?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media3.giphy.com/avatars/mostapesstudio/AfdnP317Swop.png",
          "banner_image": "https://media3.giphy.com/headers/mostapesstudio/Fa2uO8Uw5lPf.png",
          "banner_url": "https://media3.giphy.com/headers/mostapesstudio/Fa2uO8Uw5lPf.png",
          "profile_url": "https://giphy.com/mostapesstudio/",
          "username": "mostapesstudio",
          "display_name": "DINOSALLY",
          "description": "Stomp into adventure with Sally, the pink young dinosaur, and her beastie besties Blambi and Tibo!",
          "instagram_url": "https://instagram.com/mostapestudio",
          "website_url": "http://mostapes.com/dinosally",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPUUxdzB5dk14Qkl2NU04V2tMOCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUUxdzB5dk14Qkl2NU04V2tMOCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUUxdzB5dk14Qkl2NU04V2tMOCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUUxdzB5dk14Qkl2NU04V2tMOCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3pZipqyo1sqHDfJGtz",
        "url": "https://giphy.com/gifs/sesamestreet-3pZipqyo1sqHDfJGtz",
        "slug": "sesamestreet-3pZipqyo1sqHDfJGtz",
        "bitly_gif_url": "https://gph.is/2wP0MpT",
        "bitly_url": "https://gph.is/2wP0MpT",
        "embed_url": "https://giphy.com/embed/3pZipqyo1sqHDfJGtz",
        "username": "sesamestreet",
        "source": "Sesamstrasse",
        "title": "Elmo Hello GIF by Sesame Street",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "Sesamstrasse",
        "is_sticker": 0,
        "import_datetime": "2018-09-07 10:04:17",
        "trending_datetime": "2022-06-28 20:04:12",
        "images": {
          "original": {
            "height": "260",
            "width": "308",
            "size": "1462748",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g",
            "mp4_size": "608832",
            "mp4": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g",
            "webp_size": "259154",
            "webp": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.webp&ct=g",
            "frames": "47",
            "hash": "e02d0591b32b81297102c24459594705"
          },
          "downsized": {
            "height": "260",
            "width": "308",
            "size": "1462748",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "260",
            "width": "308",
            "size": "1462748",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "260",
            "width": "308",
            "size": "1462748",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "216",
            "width": "255",
            "mp4_size": "68655",
            "mp4": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-downsized-small.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "260",
            "width": "308",
            "size": "1462748",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "237",
            "size": "598432",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.gif&ct=g",
            "mp4_size": "137764",
            "mp4": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.mp4&ct=g",
            "webp_size": "130602",
            "webp": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "237",
            "size": "86954",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.gif&ct=g",
            "webp_size": "54244",
            "webp": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "119",
            "size": "207706",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/100.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.gif&ct=g",
            "mp4_size": "49617",
            "mp4": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/100.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.mp4&ct=g",
            "webp_size": "50232",
            "webp": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/100.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "119",
            "size": "4591",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/100_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "237",
            "size": "11396",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "169",
            "width": "200",
            "size": "579712",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.gif&ct=g",
            "mp4_size": "106202",
            "mp4": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.mp4&ct=g",
            "webp_size": "100564",
            "webp": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "169",
            "width": "200",
            "size": "94520",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200w_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.gif&ct=g",
            "webp_size": "43310",
            "webp": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200w_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "85",
            "width": "100",
            "size": "163208",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/100w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.gif&ct=g",
            "mp4_size": "40377",
            "mp4": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/100w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.mp4&ct=g",
            "webp_size": "41470",
            "webp": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/100w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "85",
            "width": "100",
            "size": "3760",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/100w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "169",
            "width": "200",
            "size": "10756",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/200w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "3941134",
            "mp4": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-loop.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "260",
            "width": "308",
            "size": "37387",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "404",
            "width": "480",
            "mp4_size": "608832",
            "mp4": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "126",
            "width": "149",
            "mp4_size": "22836",
            "mp4": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-preview.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "71",
            "width": "84",
            "size": "49790",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-preview.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "104",
            "width": "124",
            "size": "28474",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-preview.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "405",
            "width": "480",
            "size": "1462748",
            "url": "https://media2.giphy.com/media/3pZipqyo1sqHDfJGtz/480w_s.jpg?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media3.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH.png",
          "banner_image": "https://media3.giphy.com/headers/sesamestreet/rY1amQ9t9bt0.png",
          "banner_url": "https://media3.giphy.com/headers/sesamestreet/rY1amQ9t9bt0.png",
          "profile_url": "https://giphy.com/sesamestreet/",
          "username": "sesamestreet",
          "display_name": "Sesame Street",
          "description": "Our nonprofit’s mission is to help kids grow smarter, stronger, kinder – in more than 150 countries around the world!",
          "instagram_url": "https://instagram.com/SesameStreet",
          "website_url": "http://sesamestreet.org",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "d8oI97avlJAygnp7RC",
        "url": "https://giphy.com/gifs/shaymitchell-shay-mitchell-d8oI97avlJAygnp7RC",
        "slug": "shaymitchell-shay-mitchell-d8oI97avlJAygnp7RC",
        "bitly_gif_url": "https://gph.is/g/Z276Np4",
        "bitly_url": "https://gph.is/g/Z276Np4",
        "embed_url": "https://giphy.com/embed/d8oI97avlJAygnp7RC",
        "username": "shaymitchell",
        "source": "",
        "title": "Knock Knock Hello GIF by Shay Mitchell",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2019-04-03 21:39:46",
        "trending_datetime": "2021-03-03 17:15:10",
        "images": {
          "original": {
            "height": "418",
            "width": "480",
            "size": "2116496",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g",
            "mp4_size": "395390",
            "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g",
            "webp_size": "495118",
            "webp": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.webp&ct=g",
            "frames": "67",
            "hash": "220388d681e671d2890adff90b11877a"
          },
          "downsized": {
            "height": "418",
            "width": "480",
            "size": "1351169",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy-downsized.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "418",
            "width": "480",
            "size": "2116496",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "418",
            "width": "480",
            "size": "2116496",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "290",
            "width": "333",
            "mp4_size": "102704",
            "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy-downsized-small.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "418",
            "width": "480",
            "size": "21059",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy-downsized_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "230",
            "size": "464160",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.gif&ct=g",
            "mp4_size": "115520",
            "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.mp4&ct=g",
            "webp_size": "180750",
            "webp": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "230",
            "size": "45231",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.gif&ct=g",
            "webp_size": "35462",
            "webp": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "115",
            "size": "167202",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/100.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.gif&ct=g",
            "mp4_size": "46246",
            "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/100.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.mp4&ct=g",
            "webp_size": "77698",
            "webp": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/100.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "115",
            "size": "3155",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/100_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "230",
            "size": "8423",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "174",
            "width": "200",
            "size": "373554",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.gif&ct=g",
            "mp4_size": "95780",
            "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.mp4&ct=g",
            "webp_size": "150364",
            "webp": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "174",
            "width": "200",
            "size": "36209",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200w_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.gif&ct=g",
            "webp_size": "28192",
            "webp": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200w_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "87",
            "width": "100",
            "size": "133964",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/100w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.gif&ct=g",
            "mp4_size": "38118",
            "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/100w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.mp4&ct=g",
            "webp_size": "68026",
            "webp": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/100w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "87",
            "width": "100",
            "size": "2328",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/100w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "174",
            "width": "200",
            "size": "6183",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2173378",
            "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy-loop.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "418",
            "width": "480",
            "size": "63224",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "416",
            "width": "480",
            "mp4_size": "395390",
            "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "264",
            "width": "303",
            "mp4_size": "40829",
            "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy-preview.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "103",
            "width": "118",
            "size": "49314",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy-preview.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "184",
            "width": "212",
            "size": "41978",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy-preview.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "418",
            "width": "480",
            "size": "2116496",
            "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/480w_s.jpg?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media1.giphy.com/avatars/shaymitchell/VfLTV9FaRlbL.gif",
          "banner_image": "https://media1.giphy.com/headers/shaymitchell/hM90mHGyc7kV.gif",
          "banner_url": "https://media1.giphy.com/headers/shaymitchell/hM90mHGyc7kV.gif",
          "profile_url": "https://giphy.com/shaymitchell/",
          "username": "shaymitchell",
          "display_name": "Shay Mitchell",
          "description": "Live. Laugh. GIF.",
          "instagram_url": "https://instagram.com/shaymitchell",
          "website_url": "https://www.youtube.com/ShayMitchell",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPWQ4b0k5N2F2bEpBeWducDdSQyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWQ4b0k5N2F2bEpBeWducDdSQyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWQ4b0k5N2F2bEpBeWducDdSQyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWQ4b0k5N2F2bEpBeWducDdSQyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "VdAvVcQLJDwKKDUDJR",
        "url": "https://giphy.com/gifs/rodneydangerfield-hello-hi-hey-VdAvVcQLJDwKKDUDJR",
        "slug": "rodneydangerfield-hello-hi-hey-VdAvVcQLJDwKKDUDJR",
        "bitly_gif_url": "https://gph.is/g/4zA2dMl",
        "bitly_url": "https://gph.is/g/4zA2dMl",
        "embed_url": "https://giphy.com/embed/VdAvVcQLJDwKKDUDJR",
        "username": "rodneydangerfield",
        "source": "",
        "title": "Hey You Hello GIF by Rodney Dangerfield",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2021-02-04 04:43:11",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "480",
            "width": "480",
            "size": "3080715",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g",
            "mp4_size": "5007330",
            "mp4": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g",
            "webp_size": "2688292",
            "webp": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.webp&ct=g",
            "frames": "82",
            "hash": "0074ea7186cdfa22b06897b656413325"
          },
          "downsized": {
            "height": "231",
            "width": "231",
            "size": "1037974",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy-downsized.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "480",
            "width": "480",
            "size": "3080715",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "480",
            "width": "480",
            "size": "3080715",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "192",
            "width": "192",
            "mp4_size": "63182",
            "mp4": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy-downsized-small.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "231",
            "width": "231",
            "size": "16887",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy-downsized_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "1205083",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.gif&ct=g",
            "mp4_size": "190479",
            "mp4": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.mp4&ct=g",
            "webp_size": "317350",
            "webp": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "108902",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.gif&ct=g",
            "webp_size": "65002",
            "webp": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "359810",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/100.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.gif&ct=g",
            "mp4_size": "54027",
            "mp4": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/100.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.mp4&ct=g",
            "webp_size": "101060",
            "webp": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/100.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "100",
            "size": "5093",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/100_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "200",
            "size": "15324",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "1205083",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.gif&ct=g",
            "mp4_size": "190479",
            "mp4": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.mp4&ct=g",
            "webp_size": "317350",
            "webp": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "108902",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200w_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.gif&ct=g",
            "webp_size": "65002",
            "webp": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200w_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "359810",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/100w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.gif&ct=g",
            "mp4_size": "48962",
            "mp4": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/100w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.mp4&ct=g",
            "webp_size": "101060",
            "webp": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/100w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "100",
            "width": "100",
            "size": "5093",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/100w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "200",
            "width": "200",
            "size": "15324",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/200w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "30090096",
            "mp4": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy-loop.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "480",
            "width": "480",
            "size": "36031",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "480",
            "width": "480",
            "mp4_size": "5007330",
            "mp4": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "150",
            "width": "150",
            "mp4_size": "40997",
            "mp4": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy-preview.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "76",
            "width": "76",
            "size": "49488",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy-preview.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "78",
            "width": "78",
            "size": "15994",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/giphy-preview.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "480",
            "width": "480",
            "size": "3080715",
            "url": "https://media4.giphy.com/media/VdAvVcQLJDwKKDUDJR/480w_s.jpg?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/rodneydangerfield/cbizUZsk296e.jpg",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/rodneydangerfield/",
          "username": "rodneydangerfield",
          "display_name": "Rodney Dangerfield",
          "description": "Official GIPHY account of the late great comedy legend Rodney Dangerfield, known for his iconic line “I don’t get no respect!”.",
          "instagram_url": "https://instagram.com/rodneynorespect",
          "website_url": "http://rodney.com/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPVZkQXZWY1FMSkR3S0tEVURKUiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVZkQXZWY1FMSkR3S0tEVURKUiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVZkQXZWY1FMSkR3S0tEVURKUiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVZkQXZWY1FMSkR3S0tEVURKUiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "65OOoKUgwJlJpRma8O",
        "url": "https://giphy.com/gifs/INSP-hello-answer-your-phone-helllooooo-65OOoKUgwJlJpRma8O",
        "slug": "INSP-hello-answer-your-phone-helllooooo-65OOoKUgwJlJpRma8O",
        "bitly_gif_url": "https://gph.is/2Rvs9hm",
        "bitly_url": "https://gph.is/2Rvs9hm",
        "embed_url": "https://giphy.com/embed/65OOoKUgwJlJpRma8O",
        "username": "INSP",
        "source": "",
        "title": "Cowboy Way Hello GIF by INSP",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2019-01-30 13:59:28",
        "trending_datetime": "2019-05-13 20:11:28",
        "images": {
          "original": {
            "height": "480",
            "width": "480",
            "size": "7499116",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g",
            "mp4_size": "1227920",
            "mp4": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g",
            "webp_size": "1626016",
            "webp": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.webp&ct=g",
            "frames": "68",
            "hash": "1e80cd3619f14584c025e3430f46776c"
          },
          "downsized": {
            "height": "248",
            "width": "248",
            "size": "1281533",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy-downsized.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "480",
            "width": "480",
            "size": "7499116",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "480",
            "width": "480",
            "size": "4899845",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy-downsized-medium.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized-medium.gif&ct=g"
          },
          "downsized_small": {
            "height": "192",
            "width": "192",
            "mp4_size": "147568",
            "mp4": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy-downsized-small.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "248",
            "width": "248",
            "size": "21960",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy-downsized_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "1225586",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.gif&ct=g",
            "mp4_size": "321192",
            "mp4": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.mp4&ct=g",
            "webp_size": "592248",
            "webp": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "129823",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.gif&ct=g",
            "webp_size": "69846",
            "webp": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "395824",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/100.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.gif&ct=g",
            "mp4_size": "114683",
            "mp4": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/100.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.mp4&ct=g",
            "webp_size": "232466",
            "webp": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/100.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "100",
            "size": "6825",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/100_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "200",
            "size": "18912",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "1225586",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.gif&ct=g",
            "mp4_size": "321192",
            "mp4": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.mp4&ct=g",
            "webp_size": "592248",
            "webp": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "129823",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200w_d.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.gif&ct=g",
            "webp_size": "69846",
            "webp": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200w_d.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "395824",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/100w.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.gif&ct=g",
            "mp4_size": "49171",
            "mp4": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/100w.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.mp4&ct=g",
            "webp_size": "232466",
            "webp": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/100w.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "100",
            "width": "100",
            "size": "6825",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/100w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "200",
            "width": "200",
            "size": "18912",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/200w_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "3708308",
            "mp4": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy-loop.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "480",
            "width": "480",
            "size": "114654",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy_s.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "480",
            "width": "480",
            "mp4_size": "1227920",
            "mp4": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "220",
            "width": "220",
            "mp4_size": "38742",
            "mp4": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy-preview.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "97",
            "width": "97",
            "size": "48866",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy-preview.gif?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "124",
            "width": "124",
            "size": "44830",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy-preview.webp?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-preview.webp&ct=g"
          },
          "hd": {
            "height": "1080",
            "width": "1080",
            "mp4_size": "4447546",
            "mp4": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/giphy-hd.mp4?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=giphy-hd.mp4&ct=g"
          },
          "480w_still": {
            "height": "480",
            "width": "480",
            "size": "7499116",
            "url": "https://media2.giphy.com/media/65OOoKUgwJlJpRma8O/480w_s.jpg?cid=90c2ba51qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media3.giphy.com/avatars/INSP/hblVyolHdhR0.jpg",
          "banner_image": "https://media3.giphy.com/channel_assets/INSP/eJSqbwzeJzs2.jpg",
          "banner_url": "https://media3.giphy.com/channel_assets/INSP/eJSqbwzeJzs2.jpg",
          "profile_url": "https://giphy.com/INSP/",
          "username": "INSP",
          "display_name": "INSP",
          "description": "Your home for Westerns. #HeroesLiveHere",
          "instagram_url": "https://instagram.com/insp_tv",
          "website_url": "http://www.insp.com",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTY1T09vS1Vnd0psSnBSbWE4TyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTY1T09vS1Vnd0psSnBSbWE4TyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTY1T09vS1Vnd0psSnBSbWE4TyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTY1T09vS1Vnd0psSnBSbWE4TyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTkwYzJiYTUxcWJxanh5b3dodzU5OXUwYWkxanZzMGlneGFhOHozeDkxYzdlZGMwYyZjdD1n&action_type=SENT"
          }
        }
      }
    ],
    "pagination": {
      "total_count": 28477,
      "count": 9,
      "offset": 0
    },
    "meta": {
      "status": 200,
      "msg": "OK",
      "response_id": "qbqjxyowhw599u0ai1jvs0igxaa8z3x91c7edc0c"
    }
  }
}
