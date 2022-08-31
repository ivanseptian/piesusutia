import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({title, description}) => {
  return (
    <Helmet>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Free HTML Templates" name="keywords" />
        <meta content={description} name="description" />
        <link href="img/favicon.ico" rel="icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
    </Helmet>
  )
}

export default MetaTags