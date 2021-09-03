const initialState = {
    ProductAll: [],
    Product:[],
    updateProduct:[],
}

export const Products = (state = initialState , action) => {
    switch (action.type) {
        case 'listarProduct':
        return {...state, ProductAll:action.payload}
        case 'newProductCreated':
            return {...state, blogsAll:action.payload}
        case 'detailProduct':
        return {...state, blog:action.payload}
        case 'updateProduct':
            return {...state, updateBlog:action.payload}
        default:
            return state
    }
};