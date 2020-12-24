import React from 'react';
import bayernLogo from '.././image/Bayern-Logo.png';
import psgLogo from '.././image/PSG-Logo.png';
import { getFirstTeam, getSecondTeam, getPSGScore, getBayernScore, getBayernPlayers, getPSGPlayers} from '.././utils';
import { data } from '.././constants';
import ListItem from './ListItem';
import '../index.css';


class Listing extends React.Component{
    state = {
        bayernItems: getBayernPlayers(data),
        psgItems: getPSGPlayers(data)
    };
    render() {
        return (
            <div className="Listing">
                <div className="List">
                    <img src={psgLogo} alt="Logo"/>
                    <div className="teamName">{getFirstTeam(data)}</div>
                    <div className="column">
                        {this.state.psgItems.map(item => <ListItem key={item.number} number={item.number} surname={item.surname} name={item.name}/>)}
                    </div>
                </div>
                <div className="score">
                    {getPSGScore(data)}:{getBayernScore(data)}
                </div>
                <div className="List">
                    <img src={bayernLogo} alt="Logo"/>
                    <div className="teamName">{getSecondTeam(data)}</div>
                    <div className="column">
                    {this.state.bayernItems.map(item => <ListItem key={item.number} number={item.number} surname={item.surname}
                                                                  name={item.name}/>)}
                    </div>
                </div>
            </div>
        )
    }
}
export default Listing;