import React from "react";

import "./index.css";

const CardUser = () => {
  return (
    <div className="conteiner">
      <div className="box">
        <div className="imgBx">
          <img src="/src/assets/images/img-01.jpg" alt="user" />
        </div>
        <div className="details">
          <div className="listHea">
            <h4>User femine</h4>
            <p className="time_View">10:45</p>
          </div>
          <div className="mensage">
            <p className="mensage_view">
              How to make whatsApp clone using html & css . ihohdsg gdsgodsgi
              sdgsdgsdg gsdgsdgd sdgsdgg
            </p>
            <strong className="qtd_msg">1</strong>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src="/src/assets/images/img-04.jpg" alt="user" />
        </div>
        <div className="details">
          <div className="listHea">
            <h4>User mascule</h4>
            <p className="time">10:45</p>
          </div>
          <div className="mensage">
            <p>How to make whatsApp clone using html & css .</p>
            <strong>5</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
