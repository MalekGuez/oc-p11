const Banner = ({text, img}) => {
  return (
    <div className="kasa-banner">
      <h1 className="kasa-banner__text">{text}</h1>
      <img className="kasa-banner__image" src={img}/>
    </div>
  );
};

export default Banner;
