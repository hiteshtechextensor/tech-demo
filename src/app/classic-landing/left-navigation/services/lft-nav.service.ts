import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { TabGetService } from '@techextensor/tab-core-utility';

@Injectable({
  providedIn: 'root',
})
export class LftNavService {
  private _tabGetService = inject(TabGetService);

  constructor(private httpClient: HttpClient) {}
  navigations: any;

  headerOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
    ApplicationCode: 'PMS_Backup',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoYXJkaWsudGhha2thckB0ZWNoZXh0ZW5zb3IuY29tIiwianRpIjoiM2UzN2RjNjEtOTMxZC00NjdhLWJiNzktMjY0MzRlNjZhZjY4IiwiZW1haWwiOiJoYXJkaWsudGhha2thckB0ZWNoZXh0ZW5zb3IuY29tIiwiaWQiOiIwYjYwMDY5ZS02ZTM4LTQ0YTUtODMyYS1lMTBmYWQ3MTUyYjYiLCJsb2NhbGVTZXR0aW5nIjoie1wiVGltZVpvbmVJZFwiOlwiSW5kaWEgU3RhbmRhcmQgVGltZVwiLFwiTG9jYWxlXCI6MCxcIkxhbmd1YWdlXCI6MCxcIkRhdGVGb3JtYXRcIjpcImRkLU1NLXl5eXlcIixcIlRpbWVGb3JtYXRcIjpcImhoOm1tOnNzIHR0XCIsXCJOdW1iZXJGb3JtYXRcIjpudWxsLFwiQ3VycmVuY3lcIjpudWxsfSIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwiUm9sZUlkcyI6IjJjYjQzMWE2LTUxZWUtNDYzZS04NDBjLTNhMThjNWZlOTE1MCIsIm5iZiI6MTcxNjk3MDE3OCwiZXhwIjoxNzE3MDA2MTc4LCJpYXQiOjE3MTY5NzAxNzh9.YpQWI9CxP77ip_3Y26kHeXyYBDjJm18tkMRG-KUXCVg',
  });

  LEFT_NAV =
    'http://27.109.17.250:8446/api/v1/CRUD/DSQ/TABMD_Menu/Default_TABMD_Menu';

  getLeftNavData() {
    const appMenuPayLoad = {
      AppObjectName: 'TABMD_Menu',
      DSQName: 'Default_TABMD_Menu',
      Reqtokens: {},
    };

    return this.httpClient.post(this.LEFT_NAV, appMenuPayLoad, {
      headers: this.headerOptions,
    });
  }
}
