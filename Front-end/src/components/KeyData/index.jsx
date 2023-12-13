const KeyData = (props) => {
  const logo = props.logo;
  const value = props.value;
  const unit = props.unit;
  const subT = props.subt;
  return (
    <div className="item">
      <img src={logo} alt="calorie icone"></img>
      <div>
        <h2>{value + unit}</h2>
        <span>{subT}</span>
      </div>
    </div>
  );
};

export default KeyData;
