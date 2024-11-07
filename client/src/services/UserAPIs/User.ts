import MainAPIService from '../MainAPIService'

export async function apiGetUserById(id: any) {
    return MainAPIService.fetchData<any>({
        url: `/api/getUserById/${id}`,
        method: 'get',
        
    })
}