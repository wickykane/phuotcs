import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { ApiService } from '../../share/api.service';

@Injectable()
export class CollectionServices {
    public token: string;

    constructor(private $http: Http,
        private ApiService: ApiService) {
    }

    getAccessoryList(param) {
        var url = '/accessory';
        return this.ApiService.read(url, param);
    }
    getAccessoryById(id) {
        let url = '/accessory/' + id;
        return this.ApiService.read(url);
    }
    createAccessory(param) {
        let url = '/accessory';
        return this.ApiService.create(url, param);
    }
    updateAccessory(id, param) {
        let url = '/accessory/' + id;
        return this.ApiService.update(url, param);
    }
}
