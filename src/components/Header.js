import React from 'react';

// Stateless component
export const Header = (props) => {
    return(
        <nav>
            <ul>
                <li><a href={props.navLinks.home.url}>{props.navLinks.home.label}</a></li>
                <li><a href={props.navLinks.about.url}>{props.navLinks.about.label}</a></li>
                <li><a href={props.navLinks.faq.url}>{props.navLinks.faq.label}</a></li>
            </ul>
        </nav>
    );
}