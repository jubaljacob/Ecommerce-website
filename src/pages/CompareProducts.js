import React from 'react';
import Meta from "../components/Meta";
const CompareProducts = () => {
  return (
    <>
        <Meta title={"Compare Products"} />
        {/* <BreadCrumb title="Compare Products" /> */}
        <div className='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className="compare-product-card"></div>
                    </div>
                </div>
            </div>
        </div>

    </>
  );
};

export default CompareProducts;