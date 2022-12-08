import React, { useContext } from 'react';
import Navbar from '../../components/header/Header';
import { Container } from "react-bootstrap";
import SingleCard from './../../components/card/card'
import CatList from '../../components/catList/catList';


const Home = () => {


    const data = [
        {
            id: 1,
            images: [
                "./01.png",
                "../../assets/02.webp",
                "../../assets/03.webp",
                "../../assets/04.webp",
                "../../assets/05.webp",
            ],
            title: "title one",
            subtitle: "  added 2 months ago",
            price: "30",
            date: "Feb 22, 2024",
        },
        {
            id: 2,
            images: [
                "/assets/02.webp",
                "/assets/03.webp",
                "/assets/04.webp",
                "/assets/05.webp",
                "/assets/01.webp",
            ],
            title: "title two",
            subtitle: "  added 4 months ago",
            price: "35",
            date: "April 2, 2023",
        },
        {
            id: 3,
            images: [
                "/assets/03.webp",
                "/assets/04.webp",
                "/assets/05.webp",
                "/assets/01.webp",
                "/assets/02.webp",
            ],
            title: "title three",
            subtitle: "  added 6 months ago",
            price: "40",
            date: "Feb 2, 2022",
        },
        {
            id: 4,
            images: [
                "/assets/04.webp",
                "/assets/05.webp",
                "/assets/01.webp",
                "/assets/02.webp",
                "/assets/03.webp",
            ],
            title: "title four",
            subtitle: "  added 5 months ago",
            price: "60",
            date: "Feb 25, 2022",
        },
        {
            id: 5,
            images: [
                "/assets/05.webp",
                "/assets/01.webp",
                "/assets/02.webp",
                "/assets/03.webp",
                "/assets/04.webp",
            ],
            title: "title five",
            subtitle: "  added 3 months ago",
            price: "40",
            date: "Feb 12, 2022",
        },
    ];

    return (
        <div>
            {/* <Navbar /> */}
            <CatList />

            <Container>
                <div className="row row-cols-md-3 row-cols-1 row-cols-sm-2 row-cols-lg-4 mt-5">
                    {data.map((card) => (
                        <SingleCard data={card} key={card.id} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
