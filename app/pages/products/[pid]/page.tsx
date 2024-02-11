import { Metadata } from "next";

type Props = {
    params: {
        pid: string;
    }
}

// * Dynamic metadata for this component
export const generateMetadata = ({ params}: Props) : Metadata => {
    return {
        title: 'Product id for the dynamic product - ' + params.pid
    }
}

function ProductDetails() {
    return ( <p>My product Details</p> );
}

export default ProductDetails;