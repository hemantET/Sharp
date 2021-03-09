import React, { useState } from "react";
import BreakoutCarousel from "../dashBoard/carousel_Breakout";
import { Link } from "react-router-dom";
import Layout from "../layout";
const BreakoutSession = (props) => {
  return (
    <div>
      <Layout>
        <div className="content-sec mainstagewrap">
          <div className="container">
            {/*----==================page main heading start==================----*/}
            <div className="page-heading" style={{ marginTop: "100px" }}>
              <h2>BREAKOUT SESSIONS</h2>
            </div>
            <div>
              {/* ----------------------------AD_START------------------------ */}
              <div>
                <table>
                  <tr>
                    <th>Breakout Session A | 10:30AM - 11:15AM</th>

                    <th>Back to Agenda ></th>
                  </tr>
                </table>
              </div>
              <BreakoutCarousel />
              <br />
              <br />
              <br />

              {/* ----------------------------AD_END------------------------ */}
              <div>
                <table>
                  <tr>
                    <th>Breakout Session A | 10:30AM - 11:15AM</th>

                    <th>Back to Agenda ></th>
                  </tr>
                </table>
              </div>
              <BreakoutCarousel />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BreakoutSession;
