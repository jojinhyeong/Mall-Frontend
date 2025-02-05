import React from 'react';
import { useParams } from 'react-router-dom';
import ReadCompoenet from '../../components/product/ReadCompoenet';


const ReadPage = () => {

   const {pno} =useParams()

    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold"> Products Read Page
            </div>
            <ReadCompoenet pno = {pno}></ReadCompoenet>
        </div>
    );
}
export default ReadPage;