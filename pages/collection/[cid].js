import Layout from '../../components/Layout'
import {useRouter} from 'next/router'


const ProductsList = () => {
    const router = useRouter();
    const handle = router.query.cid;
    return (
        <Layout>
            <p></p>
        </Layout>
    )
};

export default ProductsList