import { FC } from "react";
import Button from "@/components/ui/Button";

interface pageProps {}

const page:FC<pageProps> = ({}) => {
    return(
        <div>
           <Button variant='default' size='lg'> Hello</Button>
        </div>
    )
}

export default page;