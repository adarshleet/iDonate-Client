import { AxiosError } from 'axios';
import { toast } from 'sonner';

const errorHandle = (error) => {
    const axiosError = error;
    console.log('errorr',axiosError.response.data)
    if (axiosError.response?.data) {
        const errorResponse = axiosError.response.data;
        if (errorResponse.message) {
            if (errorResponse.message === 'You are blocked by admin!') {
                localStorage.removeItem('userInfo');
                location.href = '/login';
                return toast.error(errorResponse.message);
            } 
            else if (errorResponse.message === 'Vendor have been blocked by admin') {
                console.log('Error: Vendor blocked');
                localStorage.removeItem('vendorInfo');
                location.href = '/vendor';
                return toast.error(errorResponse.message);
            } 
            else {
                return toast.error(errorResponse.message);
            }
        } else {
            console.log('Error response has no message');
        }
    } else {
        toast.error('An error occurred. Please try again!');
        console.log(axiosError.message);
    }
};

export default errorHandle;
