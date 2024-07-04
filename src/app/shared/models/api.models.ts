export interface ApiResponseInterface<IResponse>
{
    status: any;
    data: IResponse;
    pagination?: any;
}
