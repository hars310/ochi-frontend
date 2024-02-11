import { useState } from "react";
// import { FaCircle } from "react-icons/fa";

function Reviews() {
  const reviews = [
    {
      company: "Karman Ventures",
      services: ["Investor Deck", "Sales Deck"],
      reviewer: [
        "William Barnes",
        "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
        "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
      ],
    },
    {
      company: "Planetly",
      services: ["Agency","Big News Deck","Branded Template","Investor Deck","Product Presentation","Sales Deck"],
      reviewer: ["Nina Walloch","https://ochi.design/wp-content/uploads/2022/05/Nina.jpg.png","Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."],
    },
    {
      company: "Workiz Easy",
      services: ["Agency","Big News Deck","Branded Template","Investor Deck"],
      reviewer: ["Tomer Levy","https://ochi.design/wp-content/uploads/2022/05/Tomer.png","OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients."],
    },
    {
      company: "Premium Blend",
      services: ["Agency","Big News Deck","Branded Template","Investor Deck"],
      reviewer: ["Ellen Kim","https://ochi.design/wp-content/uploads/2022/12/image-677-300x298.png","They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations."],
    },
    {
      company: "Hypercare Systems",
      services: ["Agency","Big News Deck","Branded Template","Investor Deck"],
      reviewer: ["Brendan Goss","https://ochi.design/wp-content/uploads/2022/05/1627398835558-11.png","The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough."],
    },
    {
      company: "Officevibe",
      services: ["Agency","Big News Deck","Branded Template","Investor Deck"],
      reviewer: ["Raff Labrie","https://ochi.design/wp-content/uploads/2023/10/Photo-300x300.png","Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!"],
    },
    
  ];

  const [clickedIndex, setClickedIndex] = useState(null);

  function handleList(index) {
    setClickedIndex(index);
  }

  return (
    <div data-scroll data-scroll-speed="-.1" className="w-full min-h-fit py-12 mb-16">
      <h1 className="text-5xl px-12 mb-12">Client&apos;s reviews</h1>

      <div className="w-full flex flex-col  items-center border-t-[1.2px]">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`w-full flex flex-row gap-2 mt-2 px-8 text-sm border-b-[1.2px] ${
              index === clickedIndex ? "h-auto" : "h-10"
            }`}
          >
            <div className="w-[25%] h-10 px-4 underline">{review.company}</div>
            <div className="w-[25%] px-2">
              {index === clickedIndex && (
                <div>
                  <h1 className="mb-8 text-md">Services:</h1>
                  {review.services.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-800 font-bold hover:bg-zinc-100 ease-in-out hover:text-black text-xs px-6 py-2  mb-2 w-fit flex cursor-pointer items-center gap-6 rounded-full"
                    >
                      <h1 className="text-xs  tracking-tighter uppercase">{item}</h1>
                      {/* <FaCircle className="w-2" /> */}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-[35%] px-4">
              {index === clickedIndex ?
                review.reviewer.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    {
                        index===1 ? (
                            <div>
                                <img src={item} className="w-24 h-24 mt-8 mb-4 rounded-md" alt="" />
                            </div>
                        ) : <div>{item}</div>
                    }
                  </div>
                ))
            :
           <div>{review.reviewer[0]}</div>
            }
            </div>
            <div
              className={`w-[20%] ${
                index === clickedIndex ? "min-h-[27vw] " : "h-10"
              } px-4 flex justify-end underline cursor-pointer`}
              onClick={() => handleList(index)}
            >
              Read
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
