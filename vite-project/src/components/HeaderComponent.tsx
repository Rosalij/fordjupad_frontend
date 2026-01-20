import React from 'react'
interface HeaderComponentProps {
    title: string;
}
function HeaderComponent({ title }: HeaderComponentProps) {
    return (
        <div>
            <div className="banner">
                <img src="gulfer-ergin-LUGuCtvlk1Q-unsplash.jpg" alt="books" width="100%" style={{ borderRadius: "5em" }} />
                <h1 style={{ fontFamily: "monospace", padding: "1em" }}>{title}</h1>
                <p style={{fontFamily: "monospace", fontSize: "15px"}}>On this application, I have added a list of books.</p>
            </div>
        </div>
    )
}

export default HeaderComponent
