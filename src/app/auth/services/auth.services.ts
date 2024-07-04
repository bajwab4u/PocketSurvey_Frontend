import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";
import { ApiResponseInterface } from "../../shared/models/api.models";


@Injectable({
	providedIn: 'root'
})
export class AuthApiService 
{

	constructor(
		protected http: HttpClient,
	) 
	{

	}




	login<IRequest, IResponse>(payload: IRequest): Observable<ApiResponseInterface<IResponse | any>> 
	{
		const config: IApiCallConfig = {
			showToast: true,
			isTokenRequired: false,
			isAuthStrTokenRequired: false
		};

		return new Observable((subscriber: Subscriber<any>) => {

			this.post<IRequest>('/v2/initial-signup', payload, false, config)
			.subscribe((resp: IGenericApiResponse<IResponse | any>) => {

				
				subscriber.next(resp);
				subscriber.complete();

			},(err: IGenericApiResponse<IResponse | any>) => {

				subscriber.error(err);
                subscriber.complete();
			});

		});

	}

	sendEmailLink<IRequest, IResponse>(payload: IRequest): Observable<IGenericApiResponse<IResponse | any>>
	{
		const config: IApiCallConfig = {
			showToast: true,
			isTokenRequired: false,
			isAuthStrTokenRequired: false
		};

		return new Observable((subscriber: Subscriber<any>) => {

			this.post<IRequest>('/v2/users/request-reset-password-link', payload, false, config)
			.subscribe((resp: IGenericApiResponse<IResponse | any>) => {

				subscriber.next(resp);
				subscriber.complete();

			},(err: IGenericApiResponse<IResponse | any>) => {

				subscriber.error(err);
                subscriber.complete();
			});

		});
	}

	resetPasswordinForgotCase<IRequest, IResponse>(payload: IRequest): Observable<IGenericApiResponse<IResponse | any>> 
	{
		const config: IApiCallConfig = {
			showToast: true,
			isTokenRequired: false,
			isAuthStrTokenRequired: false
		};

		return new Observable((subscriber: Subscriber<any>) => {

			this.post<IRequest>('/v2/users/reset-password', payload, false, config)
			.subscribe((resp: IGenericApiResponse<IResponse | any>) => {

				this.toastr.success(resp.status.message.details, 'Success!');
				subscriber.next(resp);
				subscriber.complete();

			},(err: IGenericApiResponse<IResponse | any>) => {

				subscriber.error(err);
                subscriber.complete();
			});

		});
	}





}