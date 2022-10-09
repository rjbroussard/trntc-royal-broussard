import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UrlService {
    giffySearchUrl = 'http://api.giphy.com/v1/gifs/search'
}