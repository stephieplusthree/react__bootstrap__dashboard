import React from "react";

const Cardwidget = () => {
  const cardInfo = [
    {
      header: "Users",
      title: "49k",
      date: "November 1 - December 1, 2020",
      monthComparison: "14.7% increase since last month",
    },
    {
      header: "Teams",
      title: "2.4k",
      date: "November 1 - December 1, 2020",
      monthComparison: "4.6% increase since last month",
    },
    {
      header: "Purchases",
      title: "43k",
      date: "November 1 - December 1, 2020",
      monthComparison: "2.6% decrease since last month",
    },
    {
      header: "Reports",
      title: "4k",
      date: "November 1 - December 1, 2020",
      monthComparison: "2.5% increase since last month",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div>
        <div class="row my-4">
          <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div class="card" key={index}>
              <h5 class="card-header">{card.header}</h5>
              <div class="card-body">
                <h5 class="card-title">{card.title}</h5>
                <p class="card-text">{card.date}</p>
                <p class="card-text text-success">{card.monthComparison}</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="card" key={index}>
              <h5 class="card-header">{card.header}</h5>
              <div class="card-body">
                <h5 class="card-title">{card.title}</h5>
                <p class="card-text">{card.date}</p>
                <p class="card-text text-success">
                  {card.monthComparison}
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="card" key={index}>
              <h5 class="card-header">{card.header}</h5>
              <div class="card-body">
                <h5 class="card-title">{card.title}</h5>
                <p class="card-text">{card.date}</p>
                <p class="card-text text-danger">
                  {card.monthComparison}
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="card" key={index}>
              <h5 class="card-header">{card.header}</h5>
              <div class="card-body">
                <h5 class="card-title">{card.title}</h5>
                <p class="card-text">{card.date}</p>
                <p class="card-text text-success">
                  {card.monthComparison}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className="App">{cardInfo.map(renderCard)}</div>;
};

export default Cardwidget;
