import React from "react";
import Chart from "./Chart";

function Purchasewidget() {
  return (
    <div>
      <div class="row">
        <div class="col-12 col-xl-8 mb-4 mb-lg-0">
          <div class="card">
            <h5 class="card-header">Latest Transactions</h5>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Order</th>
                      <th scope="col">Product</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Total</th>
                      <th scope="col">Date</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">123456</th>
                      <td>Premium React Bootstrap Dashboard</td>
                      <td>johndoe@gmail.com</td>
                      <td>$75.00</td>
                      <td>Nov 15 2020</td>
                      <td>
                        <a href="#" class="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">739780</th>
                      <td>Silver React Bootstrap Dashboard</td>
                      <td>janedoe@gmail.com</td>
                      <td>$50.00</td>
                      <td>Nov 25 2020</td>
                      <td>
                        <a href="#" class="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">883305</th>
                      <td>Gold React Bootstrap Dashboard</td>
                      <td>suzziedoe@gmail.com</td>
                      <td>$25.00</td>
                      <td>Nov 31 2020</td>
                      <td>
                        <a href="#" class="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">383929</th>
                      <td>Silver React Bootstrap Dashboard</td>
                      <td>pokemon.doe@company.com</td>
                      <td>$15.00</td>
                      <td>Nov 28 2020</td>
                      <td>
                        <a href="#" class="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">17371705</th>
                      <td>Volt Premium Bootstrap 5 Dashboard</td>
                      <td>johndoe@gmail.com</td>
                      <td>€61.11</td>
                      <td>Aug 31 2020</td>
                      <td>
                        <a href="#" class="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">17370540</th>
                      <td>Pixel Pro Premium Bootstrap UI Kit</td>
                      <td>jacob.monroe@company.com</td>
                      <td>$153.11</td>
                      <td>Aug 28 2020</td>
                      <td>
                        <a href="#" class="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="#" class="btn btn-block btn-light">
                View all
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-4">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Purchasewidget;
