import * as React from 'react';

export const getCharity = (id) => {
    const charities = [
        {
            id: "aaa",
            name: "GREEN MOUNTAIN ANIMAL RESCUE",
            bannerImg: "/sample-banner-1.png", 
            positionTitle: "Volunteer Veterinary Technician Assistant:", 
            positionOverview: "Assist the veterinary technician in providing care to rescued animals.  Help with administering medications, monitoring vital signs, and  preparing animals for surgery. Maintain a clean and organized work  environment. Provide love and attention to the animals in our care. You  will work closely with the veterinary staff to ensure the health and  well-being of the animals. This is a hands-on position that requires a commitment of at least 8 hours per week.", 
            hours: {
                monday: "8pm-5pm",
                tuesday: "8pm-5pm",
                wednesday: "8pm-5pm",
                thursday: "8pm-5pm",
                friday: "8pm-5pm",
                saturday: "Closed",
                sunday: "Closed"
            }, 
            location: "123 Maple St, Burlington, VT 05401",
            phone: "(802) 555-0101", 
            email: "gmarburlington@gmail.com",
            about: "Green Mountain Animal Rescue is a non-profit organization dedicated to  saving the lives of abandoned, abused, and neglected animals in the  Burlington area. Our mission is to provide shelter, medical care, and  adoption services to help animals find loving forever homes. We believe  that every animal deserves a chance at a happy and healthy life, and we  work tirelessly to make that a reality. Our team of experienced staff  and passionate volunteers provide top-notch care for the animals in our  facility, including daily feeding, cleaning, and socialization. We also  offer educational programs to the community to promote responsible pet  ownership and the importance of spaying and neutering. In addition to  our shelter services, we partner with local veterinarians to provide  affordable medical care for our animals and low-income pet owners. By volunteering with Green  Mountain Animal Rescue, you can make a real difference in the lives of  animals in need and help create a more compassionate community for all.", 
            images: [
                "/gmar1.jpg",
                "/gmar2.jpg",
                "/gmar3.jpg",
                "/gmar4.jpg",
                "/gmar5.jpg"
            ] 
        },
        {
            id: "aab",
            name: "CHAMPLAIN VALLEY LITERACY FOUNDATION",
            bannerImg: "/sample-banner-2.png", 
            positionTitle: "Volunteer Adult Literacy Tutor:", 
            positionOverview: "Provide one-on-one tutoring to adults seeking to improve their reading,  writing, and basic math skills. Develop lesson plans and track student  progress. Participate in regular training and development opportunities.  Help create a supportive and encouraging learning environment. You will  work with students from diverse backgrounds and help them achieve their  personal and professional goals. This is a rewarding position that  requires a commitment of at least 2 hours per week.", 
            hours: {
                monday: "4pm-8pm",
                tuesday: "4pm-8pm",
                wednesday: "4pm-8pm",
                thursday: "4pm-8pm",
                friday: "Closed",
                saturday: "Closed",
                sunday: "Closed"
            }, 
            location: "456 Pine St, Burlington, VT 05401",
            phone: "(802) 555-0202", 
            email: "champlainvalleyliteracy@gmail.com",
            about: "The Champlain Valley Literacy Foundation is a non-profit organization  committed to promoting adult literacy in the Burlington community. We  believe that everyone deserves the opportunity to improve their reading,  writing, and basic math skills, regardless of their age or background.  Our team of dedicated volunteers provides free one-on-one tutoring  services to help adults achieve their personal and professional goals.  We work with students from diverse backgrounds, including those who are  learning English as a second language, those who are preparing for the  GED or other exams, and those who simply want to improve their basic  skills. In addition to our tutoring services, we offer a range of  educational resources and support services to help our students succeed. By volunteering with the Champlain  Valley Literacy Foundation, you can help empower adults in our community  to reach their full potential and achieve their dreams.", 
            images: [
                "/cvlf1.jpg",
                "/cvlf2.jpg",
                "/cvlf3.jpg",
                "/cvlf4.jpg",
                "/cvlf5.jpg"
            ] 
        },
        {
            id: "aac",
            name: "BURLINGTON COMMUNITY GARDEN NETWORK",
            bannerImg: "/sample-banner-3.png", 
            positionTitle: "Volunteer Garden Assistant:", 
            positionOverview: "Help with the day-to-day operations of a community garden, including  planting, watering, weeding, and harvesting. Assist with organizing and  leading volunteer workdays. Promote the benefits of community gardening  and sustainable food production. Help maintain a safe and inclusive  garden environment. You will work alongside other volunteers and garden  members to maintain and improve the garden.", 
            hours: {
                monday: "9am-3pm",
                tuesday: "9am-3pm",
                wednesday: "9am-3pm",
                thursday: "9am-3pm",
                friday: "9am-3pm",
                saturday: "Closed",
                sunday: "Closed"
            }, 
            location: "789 Oak St, Burlington, VT 05401",
            phone: "(802) 555-0303", 
            email: "bcgn@gmail.com",
            about: "The Burlington Community Garden Network is a non-profit organization  that promotes sustainable urban agriculture and food security in the  Burlington area. We believe that everyone should have access to fresh,  healthy food, regardless of their income or background. To achieve this  goal, we manage a network of community gardens throughout the city,  where individuals and families can grow their own fruits, vegetables,  and herbs. Our gardens are maintained by a diverse group of volunteers  and community members who share a passion for growing food and building  community. We provide all the necessary tools, seeds, and support to  help our gardeners succeed, and we offer workshops and educational  programs throughout the year to promote sustainable gardening practices. By volunteering with the  Burlington Community Garden Network, you can help create a greener,  healthier, and more connected community.", 
            images: [
                "/bcgn1.jpg",
                "/bcgn2.jpg",
                "/bcgn3.jpg",
                "/bcgn4.jpg",
                "/bcgn5.jpg"
            ] 
        },
        {
            id: "aad",
            name: "LAKE CHAMPLAIN ENVIRONMENTAL COUNCIL",
            bannerImg: "/sample-banner-4.png", 
            positionTitle: "Volunteer Water Quality Monitoring Assistant:", 
            positionOverview: "Assist the Water Quality Specialist with conducting water quality tests  and monitoring the health of Lake Champlain. Help collect and analyze  water samples, maintain equipment, and record data. Participate in  community outreach and education programs. Help develop strategies to  reduce pollution and protect the lake. You will work as part of a team  to gather and interpret data on the health of the lake and its  tributaries. ", 
            hours: {
                monday: "9am-5pm",
                tuesday: "9am-5pm",
                wednesday: "9am-5pm",
                thursday: "9am-5pm",
                friday: "9am-5pm",
                saturday: "Closed",
                sunday: "Closed"
            }, 
            location: "321 Lakeview Dr, Burlington, VT 05401",
            phone: "(802) 555-0404", 
            email: "lcec@gmail.com",
            about: "The Lake Champlain Environmental Council is a non-profit organization  dedicated to protecting and preserving the ecological health of Lake  Champlain and its surrounding watershed. We believe that a healthy lake  is essential for the well-being of our community, our economy, and our  environment. To achieve our mission, we work with local communities,  businesses, and government agencies to promote sustainable practices and  reduce pollution. Our team of scientists, educators, and advocates  conducts regular water quality monitoring and testing to track the  health of the lake and identify areas of concern. We also work to  restore critical habitats, such as wetlands and riverbanks, to improve  water quality and support wildlife. By  volunteering with the Lake Champlain Environmental Council, you can help  protect one of our region's most valuable natural resources and ensure a  clean and healthy environment for future generations.", 
            images: [
                "/lcec1.jpg",
                "/lcec2.jpg",
                "/lcec3.jpg",
                "/lcec4.jpg",
                "/lcec5.jpg"
            ] 
        },
        {
            id: "aae",
            name: "BURLINGTON YOUTH ARTS CENTER",
            bannerImg: "/sample-banner-5.png", 
            positionTitle: "Volunteer Teaching Artist Assistant (Ceramics):", 
            positionOverview: "Assist the Teaching Artist with preparing materials and equipment for  ceramics classes. Help students with their projects and provide guidance  and encouragement. Maintain a clean and organized studio space.  Participate in community outreach and fundraising events. You will work  with students of all ages and skill levels to help them explore their  creativity and develop their artistic skills. This position requires a  commitment of at least 4 hours per week, with some weekend and evening  work required.", 
            hours: {
                monday: "3pm-7pm",
                tuesday: "3pm-7pm",
                wednesday: "3pm-7pm",
                thursday: "3pm-7pm",
                friday: "3pm-7pm",
                saturday: "10am-2pm",
                sunday: "Closed"
            }, 
            location: "654 Main St, Burlington, VT 05401",
            phone: "(802) 555-0505", 
            email: "byac@gmail.com",
            about: "The Burlington Youth Arts Center is a non-profit organization that  provides free arts education to underserved youth in the Burlington  area. We believe that every child deserves the opportunity to express  themselves creatively and develop their artistic skills, regardless of  their family's income or background. Our team of experienced teaching  artists and dedicated volunteers offer a wide range of classes and  workshops in visual arts, music, theater, and dance. We work with  students of all ages and skill levels, from beginners to advanced  artists, and we provide all the necessary materials and equipment. In  addition to our regular classes, we offer mentorship and career  development opportunities for older students who are interested in  pursuing the arts professionally. By volunteering with the Burlington Youth Arts Center, you can help inspire  and empower the next generation of artists and leaders in our  community.", 
            images: [
                "/byac1.jpg",
                "/byac2.jpg",
                "/byac3.jpg",
                "/byac4.jpg",
                "/byac5.jpg"
            ] 
        },
        {
            id: "aaf",
            name: "CHAMPLAIN VALLEY REFUGEE SUPPORT NETWORK",
            bannerImg: "/sample-banner-6.png", 
            positionTitle: "Family Support Volunteer:", 
            positionOverview: "Provide support and guidance to refugee families as they  navigate the resettlement process. Help with tasks such as enrolling  children in school, accessing healthcare services, and finding  employment. Serve as a cultural liaison and help families build social  connections in their new community. Participate in regular training and  development opportunities. You will work closely with families to help  them overcome challenges and achieve their goals.", 
            hours: {
                monday: "9am-5pm",
                tuesday: "9am-5pm",
                wednesday: "9am-5pm",
                thursday: "9am-5pm",
                friday: "9am-5pm",
                saturday: "Closed",
                sunday: "Closed"
            }, 
            location: "246 Church St, Burlington, VT 05401",
            phone: "(802) 555-0606", 
            email: "cvrsn@gmail.com",
            about: "The Champlain Valley Refugee Support Network is a non-profit  organization that provides comprehensive support services to refugee  families resettling in the Burlington area. We believe that refugees  deserve the opportunity to build new lives in safety and dignity, and we  work to provide the resources and support they need to thrive. Our team  of experienced case managers, interpreters, and volunteers works  closely with refugee families to help them navigate the complex process  of resettlement. We provide assistance with housing, healthcare,  education, employment, and other essential needs, as well as ongoing  cultural orientation and language support. By volunteering with the Champlain Valley Refugee Support  Network, you can help make a meaningful difference in the lives of  refugee families and help create a more just and compassionate world.", 
            images: [
                "/cvrsn1.jpg",
                "/cvrsn2.jpg",
                "/cvrsn3.jpg",
                "/cvrsn4.jpg",
                "/cvrsn5.jpg"
            ] 
        },
        {
            id: "aag",
            name: "BURLINGTON COMMUNITY BIKE SHOP",
            bannerImg: "/sample-banner-7.png", 
            positionTitle: "Bike Mechanic Assistant:", 
            positionOverview: "Assist the Bike Mechanic with repairing and maintaining  donated bicycles. Help with tasks such as cleaning, assembling, and  testing bikes. Assist with bike safety education programs and community  outreach events. Help manage the shop's inventory and keep the workspace  organized. You will work alongside experienced mechanics to learn new  skills and help provide affordable transportation options to the  community.", 
            hours: {
                monday: "Closed",
                tuesday: "10am-6pm",
                wednesday: "10am-6pm",
                thursday: "10am-6pm",
                friday: "10am-6pm",
                saturday: "10am-6pm",
                sunday: "Closed"
            }, 
            location: "753 Pine St, Burlington, VT 05401",
            phone: "(802) 555-0707", 
            email: "bcbikes@gmail.com",
            about: "The Burlington Community Bike Shop is a non-profit organization that  promotes sustainable transportation and access to affordable bicycles in  the Burlington area. We believe that bicycles are a powerful tool for  personal empowerment, community building, and environmental  sustainability, and we work to make them accessible to everyone. Our  team of skilled mechanics and passionate volunteers accepts donated  bicycles from the community, repairs them, and sells them at low cost to  individuals and families in need. We also offer a range of educational  programs and services to promote bike safety, maintenance, and culture.  These include bike repair workshops, safety clinics, and group rides. By volunteering with the Burlington Community Bike Shop, you can  help empower individuals and families to choose cycling as a fun,  healthy, and environmentally friendly mode of transportation.", 
            images: [
                "/bcbs1.jpg",
                "/bcbs2.jpg",
                "/bcbs3.jpg",
                "/bcbs4.jpg",
                "/bcbs5.jpg"
            ] 
        },
        {
            id: "aah",
            name: "GREEN MOUNTAIN MUSIC FOUNDATION",
            bannerImg: "/sample-banner-8.png", 
            positionTitle: "Music Therapy Assistant:", 
            positionOverview: "Assist the Music Therapist with providing music therapy services to  individuals with disabilities, mental health concerns, and chronic  illnesses. Help with setting up and cleaning up equipment, distributing  instruments, and providing support during therapy sessions. Participate  in community outreach and fundraising events. Assist with administrative  tasks as needed. You will work with clients of all ages and abilities  to help them achieve their therapeutic goals through music.", 
            hours: {
                monday: "9pm-5pm",
                tuesday: "9pm-5pm",
                wednesday: "9pm-5pm",
                thursday: "9pm-5pm",
                friday: "9pm-5pm",
                saturday: "Closed",
                sunday: "Closed"
            }, 
            location: "159 College St, Burlington, VT 05401",
            phone: "(802) 555-0808", 
            email: "gmmfburlington@gmail.com",
            about: "The Green Mountain Music Foundation is a non-profit organization that  promotes the therapeutic benefits of music and provides music therapy  services to individuals and communities in the Burlington area. We  believe that music has the power to heal, inspire, and transform lives,  and we work to make music therapy accessible to everyone who can benefit  from it. Our team of board-certified music therapists and dedicated  volunteers provides individual and group music therapy sessions to  people of all ages and abilities, including those with developmental  disabilities, mental health challenges, and chronic illnesses. By volunteering with the Green Mountain Music Foundation, you can help  bring the healing power of music to those who need it most and create a  more harmonious and compassionate community.", 
            images: [
                "/gmmf1.jpg",
                "/gmmf2.jpg",
                "/gmmf3.jpg",
                "/gmmf4.jpg",
                "/gmmf5.jpg"
            ] 
        },
        {
            id: "aai",
            name: "CHAMPLAIN VALLEY SUSTAINABLE AGRICULTURE NETWORK",
            bannerImg: "/sample-banner-9.png", 
            positionTitle: "Volunteer Farm Education Assistant:", 
            positionOverview: "Assist the Farm Educator with developing and delivering educational  programs on sustainable agriculture practices. Help with tasks such as  planning workshops, leading farm tours, and preparing educational  materials. Participate in community outreach and fundraising events. You will work with farmers, educators, and  community members to promote sustainable food systems and build a more  resilient local economy.", 
            hours: {
                monday: "9am-5pm",
                tuesday: "9am-5pm",
                wednesday: "Closed",
                thursday: "9am-5pm",
                friday: "9am-5pm",
                saturday: "Closed",
                sunday: "Closed"
            }, 
            location: "852 Shelburne Rd, Burlington, VT 05401",
            phone: "(802) 555-0909", 
            email: "champlainvalleysan@gmail.com",
            about: "The Champlain Valley Sustainable Agriculture Network is a non-profit  organization that promotes sustainable farming practices and local food  systems in the Burlington area. We believe that a resilient and  equitable food system is essential for the health and well-being of our  community, our economy, and our environment. Our team of experienced  farmers, educators, and advocates works to provide education, technical  assistance, and market opportunities to local farmers and food  producers. We offer a range of workshops, farm tours, and mentorship  programs to help farmers adopt sustainable practices, such as organic  agriculture, regenerative grazing, and agroforestry. By volunteering with  the Champlain Valley Sustainable Agriculture Network, you can help  build a more just, sustainable, and delicious food system for our  community and beyond.", 
            images: [
                "/cvsan1.jpg",
                "/cvsan2.jpg",
                "/cvsan3.jpg",
                "/cvsan4.jpg",
                "/cvsan5.jpg"
            ] 
        },
        {
            id: "aaj",
            name: "WINOOSKI RIVER WILDLIFE FOUNDATION",
            bannerImg: "/sample-banner-10.png", 
            positionTitle: "Wildlife Research Assistant:", 
            positionOverview: "Assist the Wildlife Biologist with conducting research on wildlife  populations along the Winooski River. Help with field surveys, data  collection, and habitat assessments. Participate in community outreach  and education programs. Assist with developing conservation strategies  and land management plans. You will work as part of a team to gather and  interpret data on the health and behavior of wildlife populations.", 
            hours: {
                monday: "8am-4pm",
                tuesday: "8am-4pm",
                wednesday: "8am-4pm",
                thursday: "8am-4pm",
                friday: "Closed",
                saturday: "Closed",
                sunday: "Closed"
            }, 
            location: "852 Shelburne Rd, Burlington, VT 05401",
            phone: "(802) 555-1000", 
            email: "champlainvalleysan@gmail.com",
            about: "The Champlain Valley Sustainable Agriculture Network is a non-profit  organization that promotes sustainable farming practices and local food  systems in the Burlington area. We believe that a resilient and  equitable food system is essential for the health and well-being of our  community, our economy, and our environment. Our team of experienced  farmers, educators, and advocates works to provide education, technical  assistance, and market opportunities to local farmers and food  producers. We offer a range of workshops, farm tours, and mentorship  programs to help farmers adopt sustainable practices, such as organic  agriculture, regenerative grazing, and agroforestry. By volunteering with  the Champlain Valley Sustainable Agriculture Network, you can help  build a more just, sustainable, and delicious food system for our  community and beyond.", 
            images: [
                "/wrwf1.jpg",
                "/wrwf2.jpg",
                "/wrwf3.jpg",
                "/wrwf4.jpg",
                "/wrwf5.jpg"
            ] 
        }
    ];

    return charities.find(c => c.id === id);
}