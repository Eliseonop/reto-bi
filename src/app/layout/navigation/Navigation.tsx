import { ButtonLink } from "../../shared-components/buttons/Button"
import styled from 'styled-components'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { UserState } from "../../store/slices/user/models/user.state"
import { useEffect } from "react";
import { IRootState } from "../../store/models/rootState.model";


export function Navigation() {
    
    return (
        <Navbar>
            <Title>
                Kitchen Display System (KDS)
            </Title>
            <div>

            </div>
            <div>
                <ButtonLink to="/login"
                    onClick={() => { localStorage.removeItem('token') }}
                >Login</ButtonLink>
                <ButtonLink to="/login">Register</ButtonLink>
            </div>

        </Navbar>
    )
}

const Navbar = styled.div`
    background-color: #4682cd;
    border: 2px solid #ffffff;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    shadow-color: #000;
    color: #fff;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color : black;
`
