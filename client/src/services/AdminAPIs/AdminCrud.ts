import MainAPIService from '../MainAPIService'

export async function apiGetAllProducts() {
    return MainAPIService.fetchData<any>({
        url: '/admin/products',
        method: 'get',
        
    })
}
export async function apiDeleteProductById(id: any) {
    return MainAPIService.fetchData<any>({
        url: `/admin/product/${id}`,
        method: 'delete',
        
    })
}
export async function apiGetProductById(id: any) {
    return MainAPIService.fetchData<any>({
        url: `/admin/product/${id}`,
        method: 'get',
        
    })
}

// Service to update product by ID
export async function apiUpdateProductById(id: string, formData: FormData) {
    return MainAPIService.fetchData<any>({
      url: `/admin/product/${id}`,
      method: 'put',
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  
  export async function apiAddProduct( formData: FormData) {
    return MainAPIService.fetchData<any>({
      url: '/admin/product/',
      method: 'post',
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }


