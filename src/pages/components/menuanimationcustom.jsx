import React, { Component } from 'react';

import { menuAnimationCustomData, menuAnimationCustomKeys} from '../../store/menuanimationcustom';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys } from '../../store/reducer';

class MenuAnimationCustomWebsite extends Component {

    constructor(props) {
        super(props)
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeData.dispatch({
            type: 'data',
            data : menuAnimationCustomData
        });
        storeKeys.dispatch({
            type: 'keys',
            keys : menuAnimationCustomKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'MenuAnimationCustom',
            examples: storeData.getState(),
            keys : storeKeys.getState()
        };
    }
    render() {
        this.dispatchData();
        const moduleData = this.moduleData();

        return (
            <div className='divcreator-types'>
                <TypesGenerateor data={moduleData} />
            </div>
        );
    }
};
export default MenuAnimationCustomWebsite;
