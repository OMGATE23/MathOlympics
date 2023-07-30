import { Route , Routes } from 'react-router'
import {Achievements} from './Achievements'
import { Home } from './Home'
import { Level } from './Level'
import { Infinity } from './Infinity'
import { Icon } from './Icon'

interface AllRoutes {
    title : string;
    path : string;
    element : JSX.Element
}

const allRoutes : AllRoutes[] = [
    {title : "Home" , path : "" , element : <Home/>},
    {title : "Level" , path : "level" , element : <Level/>},
    {title : "Infinity" , path : "infinity" , element : <Infinity/>},
    {title : "Achievements" , path : "achievements" , element : <Achievements/>},
    {title : "Icon" , path: 'icon' , element : <Icon/>}
]

export function AllRoutes() {
    return (
        <Routes>
            {
                allRoutes.map(({title , path , element}) => (
                    <Route key = {title} path = {path} element = {element} />
                ))
            }
        </Routes>
    )
}