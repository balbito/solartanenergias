import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box p='4'>
                    <img className='logo' src="src/assets/logotuti.png" alt="logo" />
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu>
                        <MenuButton>
                            Productos
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Mantas Solares</MenuItem>
                            <MenuItem>Paneles Solares</MenuItem>
                            <MenuItem>Bombas Solares</MenuItem>
                            <MenuItem>Termotanques Solares</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <CartWidget/>
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar
