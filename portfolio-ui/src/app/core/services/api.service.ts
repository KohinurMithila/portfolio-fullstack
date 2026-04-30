import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {

    baseUrl = 'http://127.0.0.1:5197/api';

    constructor(private http: HttpClient) { }

    get(url: string) {
        return this.http.get(this.baseUrl + url);
    }

    post(url: string, data: any) {
        return this.http.post(this.baseUrl + url, data);
    }

    put(url: string, data: any) {
        return this.http.put(this.baseUrl + url, data);
    }

    delete(url: string) {
                return this.http.delete(this.baseUrl + url);
    }
}