import {Injectable} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers, XHRBackend} from "@angular/http";
import {Observable, Observer} from "rxjs/Rx";

import { SpinnerService } from './';


export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, spinner : SpinnerService): Http {
    return new InterceptedHttp(xhrBackend, requestOptions, spinner);
}

@Injectable()
export class InterceptedHttp extends Http {

    pendingRequests : number = 0; 

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private spinner : SpinnerService) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> { 
        this.showSpinner();
        return Observable.create((observer : Observer<Response>) => {
            super.get(url, options).subscribe(
                response => {                    
                    this.pendingRequests--;
                    observer.next(response);
                },
                error => {                    
                    this.pendingRequests--;
                    observer.error(error);
                },
                () => observer.complete()
            );
        });
        
    }

    showSpinner() {
        this.pendingRequests++;
        this.spinner.show();
        let self = this;

        let hideSpinner = function() {
            setTimeout(function() {
                if(self.pendingRequests < 1) {
                    self.spinner.hide();
                }
                else {
                    hideSpinner();
                }                
            }, 1000);
        }

        hideSpinner();
    }
    

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {

        this.showSpinner();
        return Observable.create((observer : Observer<Response>) => {
            super.post(url, body, options).subscribe(
                response => {                    
                    this.pendingRequests--;
                    observer.next(response);
                },
                error => {                    
                    this.pendingRequests--;
                    observer.error(error);
                },
                () => observer.complete()
            );
        });
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {        
        this.showSpinner();
        return Observable.create((observer : Observer<Response>) => {
            super.put(url, body, options).subscribe(
                response => {                    
                    this.pendingRequests--;
                    observer.next(response);
                },
                error => {                    
                    this.pendingRequests--;
                    observer.error(error);
                },
                () => observer.complete()
            );
        });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.showSpinner();
        return Observable.create((observer : Observer<Response>) => {
            super.delete(url, options).subscribe(
                response => {                    
                    this.pendingRequests--;
                    observer.next(response);
                },
                error => {                    
                    this.pendingRequests--;
                    observer.error(error);
                },
                () => observer.complete()
            );
        });
    }
}