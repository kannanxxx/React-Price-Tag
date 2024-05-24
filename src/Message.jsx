function Message({ deatil }) {
  let {head,amount,durate,storage,project,privat,acces,phone,domin,status} =deatil
  return <>
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{head}</h5>
          <h6 className="card-price text-center">{amount}<span className="period">{durate}</span></h6>

          <ul className="fa-ul">
            <li className={deatil.isUser ? "" : "text-muted"}><span className="fa-li"><i className={deatil.isUser ? "fa fa-check" : "fas fa-times"}></i></span>{head !== "FREE" ? <><b>{head=="PRO"?"Unlimited":""} {deatil.user}</b> </> : deatil.user}</li>
            <li className={deatil.isStorage ? "" : "text-muted"}><span className="fa-li"><i className={deatil.isStorage ? "fa fa-check" : "fas fa-times"}></i></span>{storage}</li>
            <li className={deatil.isProject ? "" : "text-muted"}><span className="fa-li"><i className={deatil.isProject ? "fa fa-check" : "fas fa-times"}></i></span>{project}</li>
            <li className={deatil.isAcces ? "" : "text-muted"}><span className="fa-li"><i i className={deatil.isAcces ? "fa fa-check" : "fas fa-times"}></i></span>{acces}</li>
            <li className={deatil.isPrivate ? "" : "text-muted"}><span className="fa-li"><i className={deatil.isPrivate ? "fa fa-check" : "fas fa-times"}></i></span>{privat}</li>
            <li className={deatil.isPhone ? "" : "text-muted"}><span className="fa-li"><i className={deatil.isPhone ? "fa fa-check" : "fas fa-times"}></i></span>{phone}</li>
            <li className={deatil.isDomin ? "" : "text-muted"}><span className="fa-li"><i className={deatil.isDomin ? "fa fa-check" : "fas fa-times"}></i></span>{head == "PRO" ? <span><b>Unlimted</b>  {domin}</span> : deatil.domin}</li>
            <li className={deatil.isStatus ? "" : "text-muted"}><span className="fa-li"><i className={deatil.isStatus ? "fa fa-check" : "fas fa-times"}></i></span>{status} </li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">{deatil.but}</a>
          </div>
        </div>
      </div>
    </div >

  </>

}
export default Message;
