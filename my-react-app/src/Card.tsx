import porsche from "./assets/porshe.jpg";
export default function Card() {
  return (
    <div className={"card"}>
      <img className={"card-image"} src={porsche} alt="Profile pic" />
      <h2>Kamajo</h2>
      <p>I make Websites with react</p>
    </div>
  );
}
