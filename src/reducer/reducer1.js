export const reducer1 = (state, action)=>{
    switch(action.type){
        case "FETCH_INIT":
            return{
                ...state, 
                isError:false,
                isLoading:true
            }
        case "FETCH_SUCCESS":
            return{
                ...state,
                isError:false,
                isLoading:false,
                data: action.payload
            }
        case "FETCH_ERROR":
            return{
                ...state,
                isError:true,
                isLoading:false
            }
    }
}