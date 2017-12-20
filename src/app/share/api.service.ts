import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams,RequestOptions  } from '@angular/http';

import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ApiService {
    constructor( private http: Http) {
    }

    private setHeaders():Headers {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        return new Headers( headersConfig );
    }
    private customHeader(headerOption:Object):Headers{
        const headersConfig = headerOption;
        return new Headers( headersConfig );
    }

    read( path:string, params:URLSearchParams = new URLSearchParams() ):Observable<any> {
        return this.http.get(
            `${environment.api_url}${path}`,
            { headers: this.setHeaders(), search: params })
            .catch( this.handleError )
            .map( ( res:Response ) => res.json() );
    }

    update( path:string, body:Object = {} ):Observable<any> {
        return this.http.put(
            `${environment.api_url}${path}`,
            JSON.stringify( body ),
            { headers: this.setHeaders() })
            .catch( this.handleError )
            .map( ( res:Response ) => res.json() );
    }

    create( path:string, body:Object = {} ):Observable<any> {
        return this.http.post(
            `${environment.api_url}${path}`,
            JSON.stringify( body ),
            { headers: this.setHeaders() })
            .catch( this.handleError )
            .map( ( res:Response ) => res.json() );
    }

    delete( path ):Observable<any> {
        return this.http.delete(
            `${environment.api_url}${path}`,
            { headers: this.setHeaders() })
            .catch( this.handleError )
            .map( ( res:Response ) => res.json() );
    }

    deleteWithParam( path:string,body:Object = {} ):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            headers: headers,
            body : body
        });
        return this.http.delete(
            `${environment.api_url}${path}`, options)
            .catch( this.handleError )
            .map( ( res:Response ) => res.json() );
    }

    createRequestWithFormData(path:string,formData){
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        return  this.http.post( `${environment.api_url}${path}`,formData,options)
            .map(res => res.json())
            .catch( this.handleError )
    }

    // Handle Error
    private handleError( error:Response | any ) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg:string;
        if( error instanceof Response ) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify( body );            
            errMsg = `${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw( JSON.parse(errMsg) );
    }
}
