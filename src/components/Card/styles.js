import styled from "styled-components"

export const StyledCard = styled.a`
    height: 160px;
    width: 250px;
    border-radius: 10px;
    margin: 15px;
    border-radius: 10px;
    text-decoration: none;
    transition: transform .2s ease-in-out;
    overflow: hidden;
    animation: fadeInUp .6s;

    img{
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }

    h3{
        color: #fff;
        z-index: 300;
        font-size: 16px;
        font-weight: 600;
        margin-top: -30px;
        margin-left: 10px;
    }

    :hover {
        transform: translateY(-10px);
    }

    @keyframes fadeInUp {
        0% {
            opacity:0;
            transform:translateY(20px)
        }
        100% {
            opacity:1;
            transform:translateY(0);
        }
    }
`