import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import SingleCard from "../singleCard/SingleCard";

const Cards = () => {
    // cards all data from actor-data json
    const [cardsAllData, setCardsAllData] = useState([]);

    // select btn click get data form singleCard
    const [SingleCardData, setSingleCardData] = useState([]);
    // cost total 
    const [costTotal, setCostTotal] = useState(0);
    // remaining total
    const [remainingTotal, setRemainingTotal] = useState(0);


    const [flag, setIsflag] = useState();

    useEffect(() => {
        fetch('./actor_data.json')
            .then(res => res.json())
            .then(cardData => setCardsAllData(cardData))
    }, [])
    
    // select btn click function here
    let isflag = false;
    const handleSelect = (cardSingleData) => {
        let cost = cardSingleData.salary;
        const isExist = SingleCardData.find(item => item.id == cardSingleData.id);
        
        if (isExist) {
            return alert('Already Exist')
        }
        else {
            SingleCardData.forEach((item) => {
                cost = cost + item.salary;
            });
            const remainingSalary = 20000 - cost;
            if (cost > 20000) {
                return alert('Budget is over');
            }
            else{
                isflag = !isflag;

                setRemainingTotal(remainingSalary);
                setCostTotal(cost);
                const newDataStore = [...SingleCardData, cardSingleData];
                setSingleCardData(newDataStore);
                setIsflag(isflag);
            }
        } 
    }
    // console.log()
    return (
        <div>
            <div className="flex justify-between gap-10">
                {/* single card area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-9/12">
                    {
                        cardsAllData.map(cardSingleData => <SingleCard
                            key={cardSingleData.id}
                            cardSingleData={cardSingleData}
                            handleSelect={handleSelect}
                        ></SingleCard>)
                    }
                </div>

                {/* cart area */}
                <div className="w-3/12">
                    <Cart
                        SingleCardData={SingleCardData}
                        flag={flag}
                        costTotal={costTotal}
                        remainingTotal={remainingTotal}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Cards;