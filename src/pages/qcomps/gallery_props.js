function Page({p}){
  return(
    <section className="profile">
    <h2>{p.name}</h2>
    <img
      className="avatar"
      src={p.url}
      alt={p.name}
      width={70}
      height={70}
    />
    <ul>
      <li>
        <b>Profession: </b>
{p.profession}
      </li>
      <li>
        <b>Awards: {p.awardnumber}</b>
    {p.awards}
      </li>
      <li>
        <b>Discovered: </b>
      {p.discovered}
      </li>
    </ul>
  </section>
  )

}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Page p={{name:"Maria Skłodowska-Curie", 
      url:"https://i.imgur.com/szV5sdGs.jpg", 
      profession:"physicist and chemist", 
      awardnumber:"4 ", 
      awards:"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
      discovered:"polonium (element)"}}/>
      
  <Page p={{name:"Katsuko Saruhashi", 
  url:"https://i.imgur.com/YfeOqp2s.jpg",
profession: " geochemist",
awardnumber:"2",
awards:"     (Miyake Prize for geochemistry, Tanaka Prize)",
discovered: "        a method for measuring carbon dioxide in seawater"}}/>

    
    </div>
  );
}
