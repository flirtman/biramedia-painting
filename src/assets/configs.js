import React from "react";
import queryString from 'query-string';

let url = window.location.search;
let params = queryString.parse(url);

let configs = {};

if(Object.keys(params).length > 0) {
    configs = {
        phone : params.phone,
        email : params.email,
        companyName: params.company_name,
        companyAddress: params.address,
    };
}
else {
    configs = {
        phone : "514-571-9094",
        email : "demo@gmail.com",
        companyName: "Painting Montreal Solutions",
        companyAddress: "6555 Avenue Kildair, Cote-Saint-Luc, QC",
    };
}

export default configs;
