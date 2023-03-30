function TopBar({ logo, title }) {

  return (
    <div className="top-bar-container">
      <img src={logo} alt="logo" width="60px" />
      <h2>{title}</h2>
    </div>
  )
}

export default TopBar
