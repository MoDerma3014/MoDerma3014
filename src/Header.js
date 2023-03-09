function Header({ toggleSidebar }) {
  return (
    <>
        <div className="navigation-bar">
            <div>
            <button className="button" onClick={toggleSidebar}>
                <div class="menu-icon">
                  &#9776;
                </div>
            </button>
            </div>
            
            <h1 className="title-container">
                <p id='top-bar-title'>Lotion</p>
                <p id='top-bar-sub'>Like Notion, But Worse</p>
            </h1>
            <div className="spacer"></div>
        </div>
        </>

  );
}
export default Header;