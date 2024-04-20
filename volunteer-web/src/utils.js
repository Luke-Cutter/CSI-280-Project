import * as React from 'react';

export const getCharity = (id) => {
    const charities = [
        {
            id: "aab",
            name: "Alzheimers Association of Burlington",
            bannerImg: "/sample-banner-8.png", 
            positionTitle: "Test Position", 
            positionOverview: "The Alzheimer's Association of Burlington offers vital resources and  support to individuals and families navigating the complexities of  Alzheimer's disease and other forms of dementia in the Burlington area,  fostering a compassionate community of care and advocacy.", 
            hours: {
                monday: "Closed",
                tuesday: "Open",
                wednesday: "Open",
                thursday: "Open",
                friday: "Open",
                saturday: "Open",
                sunday: "Open"
            }, 
            location: "142 Kindness Ct, South Burlington, VT 05403",
            phone: "999-999-9999", 
            email: "test@gmail.com",
            about: "The Alzheimer's Association of Burlington offers vital resources and  support to individuals and families navigating the complexities of  Alzheimer's disease and other forms of dementia in the Burlington area,  fostering a compassionate community of care and advocacy.", 
            images: [
                "/extra-image-2.png",
                "/extra-image-3.png",
                "/extra-image-4.png",
                "/extra-image-2.png",
                "/extra-image-3.png"
            ] 
        }
    ];

    return charities.find(c => c.id === id);
  }