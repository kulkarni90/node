import React from "react"
import IntroductionItem from "./IntroductionItem"
import Information from "../../information.json"

function Introduction() {
    return(
        <div className="introduction is-centered">
            <header className="introduction-header">
                <span className="tag is-medium is-dark">{new Date().getFullYear()}</span>
            </header>
            <div className="introduction-item">
                <div className="introduction-marker is-success"></div>
                <div className="introduction-content"></div>
            </div>
            {
                Information.participants.map((item) => {return new Date(item.birthday).getFullYear()}).map((year, index) => {
                    let content = []
                    content.push(<header key={index} className="introduction-header">
                                    <span className="tag is-success">{index+1}</span>
                                   </header>)
                    content.push(Information.participants.filter(participants => new Date(participants.birthday).getFullYear() === year).map((item, index) => {
                            return <IntroductionItem
                                        key = {index}
                                        image = {item.image}
                                        firstname = {item.firstname}
                                        lastname = {item.lastname}
                                        position = {item.position}
                                        level = {item.level}
                                        homeoffice = {item.homeoffice}
                                        university = {item.university}
                                    />
                        }))
                    return content
                })
            }
        </div>
    )
}

export default Introduction
