import styled from 'styled-components'

export const Button=styled.button`
    width:200;
    height:50;
    margin:3% 50%;
    color:white;
    font-size:20px;
    font-weight:border;
    border:none;
    border-radius:10px;
    width:${(props)=>(props.large? "500px":"200")};
    height:70px;
    background-color:${(props)=>props.color};

    &:hover{
        cursor:poiter;
        background-color:${(props)=> props.light}
    }
`;
