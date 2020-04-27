import React from 'react';
import cbs from "../images/cbs.png"
import ledger from "../images/ledger.png"
import nj from "../images/nj.png"
import "./Awards.css"

function Awards() {
  return (
    <div class="awards">
      <div class="cbs">
        <img src={cbs} alt="cbs" />
        <h2>Rated Best Sports Bar</h2>
      </div>
      <div class="starLedger">
        <img src={ledger} alt="" />
        <h2>Rated Best Wings In New Jersey</h2>
      </div>
      <div class="nj">
        <img src={nj} alt="" />
        <h2>Ranked In 44 Best Wings In Jersey</h2>
      </div>

    </div>

  )
}

export default Awards