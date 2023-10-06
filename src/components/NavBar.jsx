import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Flex fontSize='25px' color='#507255'>
                <Box p='4'>
                    <Link to={'/'}>
                        <img className='logo' src="src/assets/logotuti.png" alt="logo" />
                    </Link>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link to={`/categoria/${"Mantas Solares"}`}>
                                    Mantas Solares
                                </Link>
                            </MenuItem>

                            <MenuItem>
                                <Link to={`/categoria/${"Paneles Solares"}`}>
                                    Paneles Solares
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to={`/categoria/${"Termotanques Solares"}`}>
                                    Termotanques Solares
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar
