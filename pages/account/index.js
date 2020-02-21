import { useRouter } from 'next/router'
import {useEffect} from 'react'

export default () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/account/profile') //redirect immediately to the profile page
    }, []);

    return <p>redirecting</p>
}