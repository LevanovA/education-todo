import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
max-width: ${props => props.width || '1220px'};
padding: 0 50px;
margin: 0 auto;
box-sizing: border-box;
`

const Wrapper = (props) => {
    return <StyledWrapper {...props}/>
};

export default Wrapper;