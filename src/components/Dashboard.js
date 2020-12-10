import React from "react";
import Breadcrumb from "./Breadcrumb";
import Cardwidget from "./Cardwidget";
import Purchasewidget from "./Purchasewidget";

function Dashboard() {
  return (
    <div>
      <Breadcrumb />
      <Cardwidget />
      <Purchasewidget />
      {/* start of the main content */}


      
      {/* end of the main content */}

    </div>
  );
}

export default Dashboard;
