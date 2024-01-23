import happenData from "./happenData";

const Happening = () => {

const happen = happenData.map(hpn=>{
  return(
    <div className="content">
      <div className="card-container">
        <div className="card">
      <img src={hpn.img} alt="img"/>
      <h3>tittle: {hpn.tittle}</h3>
      <p>description: {hpn.desc}</p>
      </div>
      </div>
    </div>
  )
})

  return (
    <div className="happen">
    <h1>Happening Now</h1>
    <div className="all">
     
     {happen}
    </div>
    </div>
  );
};

export default Happening;
