import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingState, setLoadingState } from '@/store/reducers/valueReducer';

export default function Loader() {
    const router = useRouter();
    const dispatch = useDispatch();
    const isLoading = useSelector(getLoadingState);
    
    function startLoading() {
        dispatch(setLoadingState(true));
    }
    
    function stopLoading() {
        dispatch(setLoadingState(false));
    }

    useEffect(() => {
        router.events.on('routeChangeStart', startLoading);
        router.events.on('routeChangeComplete', stopLoading);
        router.events.on('routeChangeError', stopLoading);

        return () => {
            router.events.off('routeChangeStart', startLoading);
            router.events.off('routeChangeComplete', stopLoading);
            router.events.off('routeChangeError', stopLoading);
        };
    }, [router, startLoading, stopLoading])

    return (
        <>
            {
                isLoading &&
                 <div className='fixed top-0 left-0 z-[100] w-screen h-screen bg-black/50 p-4 grid place-items-center'>
                    <div className="p-4 bg-white w-[110px] h-[110px] rounded-full grid place-items-center">
                        <span className="loader"></span>
                    </div>
                </div>
            }
        </>
    )
}


