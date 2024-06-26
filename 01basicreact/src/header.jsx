function Header({headerInfo,children}){
    console.log(headerInfo.email);
    return(
        
        <div>
            
            <h2>hello bhai {headerInfo.phone}</h2>
            {children}
            <h1>Welcome to header section</h1>
        </div>
        
    )
}

export default Header;