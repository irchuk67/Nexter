import React from "react";
import Sidebar from "./Sections/Sidebar/sidebar";
import Header from "./Sections/Header/header";
import Realtors from "./Sections/Realtors/realtors";
import Features from "./Sections/Features/features";
import StoryPictures from "./Sections/Story/Pictures/story-pictures";
import StoryContent from "./Sections/Story/Content/story-content";
import Homes from "./Sections/Homes/homes";
import Gallery from "./Sections/Gallery/gallery";
import Footer from "./Sections/Footer/footer";
import {EmojiEvents, Insights, Key, Language, Lock, LocationOn} from "@mui/icons-material";
import house1 from './img/house-1.jpeg';
import house2 from './img/house-2.jpeg';
import house3 from './img/house-3.jpeg';
import house4 from './img/house-4.jpeg';
import house5 from './img/house-5.jpeg';
import house6 from './img/house-6.jpeg';
import photo1 from './img/gal-1.jpeg';
import photo2 from './img/gal-2.jpeg';
import photo3 from './img/gal-3.jpeg';
import photo4 from './img/gal-4.jpeg';
import photo5 from './img/gal-5.jpeg';
import photo6 from './img/gal-6.jpeg';
import photo7 from './img/gal-7.jpeg';
import photo8 from './img/gal-8.jpeg';
import photo9 from './img/gal-9.jpeg';
import photo10 from './img/gal-10.jpeg';
import photo11 from './img/gal-11.jpeg';
import photo12 from './img/gal-12.jpeg';
import photo13 from './img/gal-13.jpeg';
import photo14 from './img/gal-14.jpeg';
import logo1 from './img/logo-bbc.png';
import logo2 from './img/logo-forbes.png';
import logo3 from './img/logo-techcrunch.png';
import logo4 from './img/logo-bi.png';
import realtor1 from './img/realtor-1.jpeg';
import realtor2 from './img/realtor-2.jpeg';
import realtor3 from './img/realtor-3.jpeg';
import './App.scss';

let App = () => {
    return (
        <div className={'container'}>
            <Sidebar/>
            <Header logos={[logo1, logo2, logo3, logo4]}/>
            <Realtors realtorsData={[[realtor1, "Erik Feinman", 245], [realtor2, "Kim Brown", 212], [realtor3, "Toby Ramsey", 198]]}/>
            <Features features={[[Language, "World`s best luxury homes", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."],
                [EmojiEvents, "Only the best properties", "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia."],
                [LocationOn, "All homes in top locations", "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."],
                [Key, "New home in one week", "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit."],
                [Insights, "Top 1% realtors", "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus."],
                [Lock, "Secure payment on XXX", "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."]]}/>
            <StoryPictures/>
            <StoryContent/>
            <Homes houses={[
                [house1, "beautiful family house", "USA", 5, 325, "1,200,000"],
                [house2, "modern glass villa", "Canada", 6, 450, "2,750,000"],
                [house3, "Cozy country house", "UK", 4, 250, "850,000"],
                [house4, "Large rustical villa", "Portugal", 6, 480, "1,950,000"],
                [house5, "Majestic palace house", "Germany", 18, 4230, "9,500,000"],
                [house6, "Modern family apartment", "Italy", 3, 180, "600,000"]
            ]}/>
            <Gallery photos={[photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9,photo10, photo11, photo12, photo13, photo14]}/>
            <Footer items={['find your dream home', 'request proposal', 'download home planner', 'contact us', 'submit your property', "come work with us!"]}/>
        </div>
    )
}

export default App;