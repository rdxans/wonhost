import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () =>  {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Service</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, ind) => {
                                    return <Card key={ind}
                                        imageSrc={val.imageSrc}
                                        title={val.title}
                                        space={val.space}
                                        bandwidth={val.bandwidth}
                                        domain={val.domain}
                                        email={val.email}
                                        sql={val.sql}
                                        freedom={val.freedom}
                                        btnname={val.btnname}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Service;

        