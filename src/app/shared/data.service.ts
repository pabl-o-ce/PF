import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IContact, Product, Products } from './data.interface';

@Injectable()
export class DataService {

  private headers: Headers;
  private reqOptions: RequestOptions;

  constructor(private http: Http) {

    this.headers = new Headers({ 'Content-Type': 'application/vnd.pf+json' });
    this.reqOptions = new RequestOptions({ headers: this.headers });
  }

  public getProducts (): Observable<Products> {
    return this.http.get(`data.json`, this.reqOptions)
    .map(this.extractData)
    .catch(this.handleError);
  }

  public postContact (data: IContact): Observable<any> {
    return this.http.post(`http://api.elpalaciodelafritada.com/api/contact`, JSON.stringify(data), this.reqOptions)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData (res: Response): Products {
    return (res.json()) ? res.json() : {};
  }

  private handleError (error: Response): Observable<any> {
    const errMsg: any = (error.json()) ? error.json() : {
      statusCode: 503,
      error: 'Service Unavailable',
      message: `Server is currently down of service`,
    };
    return Observable.throw(errMsg);
  }

}
