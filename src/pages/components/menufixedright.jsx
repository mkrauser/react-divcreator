import React, { Component } from 'react';

import { menufixedrightKeys } from '../../store/menufixedright';

import { storeKeys } from '../../store/reducer';

import { BoxBoxes, Sourcecode, customKey, List, BoxMenu, ButtonsNavigation } from '../../../module/build/react-divcreator';

import { MenuFixedRight, Buttons } from '../../../module/build/react-divcreator';

import { HeaderComponent } from '../../modules/headerComponent';

import { LeftMenu } from '../../modules/leftMenu';

import { copyToClipBoard } from '../../functions/copyToClipboard';

import { copyToClipboardText } from '../../data/copy-to-clipboard';

import { markSpecialWords } from '../../data/mark-special-words';

import {  getKeyFromDescription } from '../../functions/getKeyFromDescription';

import { FooterComponents } from '../../modules/footerComponents';

class MenuFixedRightWebsite extends Component {

    constructor(props) {
        super(props);
        this.generateCodeExamples = this.generateCodeExamples.bind(this);
        this.openMenu2 = this.openMenu2.bind(this);
        this.closeMenu2 = this.closeMenu2.bind(this);

        this.state = {
            isOpen2: false
        };

        this.subTitle = '';
        this.examples = [];
        this.keys = [];
    }

    openMenu2(clickEvent, moduleState, customData) {
        this.setState({
            isOpen2: true
        });
    }

    closeMenu2() {
        this.setState({
            isOpen2: false
        });
    }

    /**
     * dispatch dtata to the redux store
     */
    dispatchData() {
        storeKeys.dispatch({
            type: 'keys',
            keys: menufixedrightKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'MenuFixedRight',
            keys: storeKeys.getState(),
            examples: [
                {
                    class: '',
                    description: 'Fixed menu on right, toggled by button (open and close) or click outside the menu, then the menu will toggle back with an animation. This example is with the key animationType={"scale"}.',
                    html: (
                        <MenuFixedRight
                            id=""
                            class="box-fixed-right-example-1"
                            direction='top'
                            dimmed={false}
                            isOpen={false}
                            animation={true}
                            performance={true}
                            animationType={'scale'}
                            open={
                                <Buttons
                                    link={false}
                                    class="button-box-fixed-example-1"
                                    data={
                                        [
                                            {
                                                text: 'open fixed box right',
                                                status: 'warning'
                                            }
                                        ]
                                    }
                                />
                            }
                            contentData={
                                <Buttons
                                    link={false}
                                    class="buttons-example-1"
                                    performance={true}
                                    data={
                                        [
                                            {
                                                text: 'success button',
                                                status: 'success',
                                                attributes: {
                                                    title: "Custom title button 3"
                                                }
                                            },
                                            {
                                                text: 'error button',
                                                status: 'error',
                                                attributes: {
                                                    title: "Custom title button 4"
                                                }
                                            },
                                            {
                                                text: 'warning button',
                                                status: 'warning',
                                                attributes: {
                                                    title: "Custom title button 5"
                                                }
                                            }
                                        ]
                                    }
                                />
                            }
                        />
                    ),
                    cssCode: 
`.box-fixed-right-example-1{
    
    .button-box-fixed-example-1{
        max-width: 220px;
        margin:0 auto;
    }
    
    .react-divcreator-menu-fixed-right__content{
        .react-divcreator-buttons{
            flex-direction: column;
    
            .react-divcreator-buttons__single-button{
                margin:10px;
            }
        }
    }
    
    .react-divcreator-buttons__single-button:hover{
        cursor: pointer;
    }

    .react-divcreator-menu-fixed-right__content{
        background-color:rgb(39,39,39);
    }
}`
                    ,
                    reactCode: (
`import { MenuFixedRight } from 'react-divcreator';

<MenuFixedRight
    id=""
    class="box-fixed-right-example-1"
    direction='top'
    dimmed={false}
    isOpen={false}
    animation={true}
    performance={true}                            
    animationType={'scale'}
    open={
        <Buttons
            link={false}
            class="button-box-fixed-example-1"
            data={
                [
                    {
                        text: 'open fixed box right',
                        status: 'warning'
                    }
                ]
            }
        />
    }
    contentData={
        <Buttons
            link={false}
            class="buttons-example-1"
            performance={true}
            data={
                [
                    {
                        text: 'success button',
                        status: 'success',
                        attributes: {
                            title: "Custom title button 3"
                        }
                    },
                    {
                        text: 'error button',
                        status: 'error',
                        attributes: {
                            title: "Custom title button 4"
                        }
                    },
                    {
                        text: 'warning button',
                        status: 'warning',
                        attributes: {
                            title: "Custom title button 5"
                        }
                    }
                ]
            }
        />
    }
/>`
                    ),
                    jsCode: ''
                },
                {
                    class: '',
                    description: 'Fixed menu on right, toggled by button (open and close) or click outside the menu, then the menu will toggle back with an animation. This example is with the key animationType={"width"}.',
                    html: (
                        <MenuFixedRight
                            id=""
                            class="box-fixed-right-example-1"
                            direction='top'
                            dimmed={false}
                            isOpen={false}
                            animation={true}
                            performance={true}
                            animationType={'width'}
                            open={
                                <Buttons
                                    link={false}
                                    class="button-box-fixed-example-1"
                                    data={
                                        [
                                            {
                                                text: 'open fixed box right',
                                                status: 'warning'
                                            }
                                        ]
                                    }
                                />
                            }
                            contentData={
                                <Buttons
                                    link={false}
                                    class="buttons-example-1"
                                    performance={true}
                                    data={
                                        [
                                            {
                                                text: 'success button',
                                                status: 'success',
                                                attributes: {
                                                    title: "Custom title button 3"
                                                }
                                            },
                                            {
                                                text: 'error button',
                                                status: 'error',
                                                attributes: {
                                                    title: "Custom title button 4"
                                                }
                                            },
                                            {
                                                text: 'warning button',
                                                status: 'warning',
                                                attributes: {
                                                    title: "Custom title button 5"
                                                }
                                            }
                                        ]
                                    }
                                />
                            }
                        />
                    ),
                    cssCode: 
`.box-fixed-right-example-1{

    .button-box-fixed-example-1{
        max-width: 220px;
        margin:0 auto;
    }
    
    .react-divcreator-menu-fixed-right__content{
        .react-divcreator-buttons{
            flex-direction: column;
    
            .react-divcreator-buttons__single-button{
                margin:10px;
            }
        }
    }
    
    .react-divcreator-buttons__single-button:hover{
        cursor: pointer;
    }

    .react-divcreator-menu-fixed-right__content{
        background-color:rgb(39,39,39);
    }
}`
                    ,
                    reactCode: (
`import { MenuFixedRight } from 'react-divcreator';

<MenuFixedRight
    id=""
    class="box-fixed-right-example-1"
    direction='top'
    dimmed={false}
    isOpen={false}
    animation={true}
    performance={true}                            
    animationType={'width'}
    open={
        <Buttons
            link={false}
            class="button-box-fixed-example-1"
            data={
                [
                    {
                        text: 'open fixed box right',
                        status: 'warning'
                    }
                ]
            }
        />
    }
    contentData={
        <Buttons
            link={false}
            class="buttons-example-1"
            performance={true}
            data={
                [
                    {
                        text: 'success button',
                        status: 'success',
                        attributes: {
                            title: "Custom title button 3"
                        }
                    },
                    {
                        text: 'error button',
                        status: 'error',
                        attributes: {
                            title: "Custom title button 4"
                        }
                    },
                    {
                        text: 'warning button',
                        status: 'warning',
                        attributes: {
                            title: "Custom title button 5"
                        }
                    }
                ]
            }
        />
    }
/>`
                    ),
                    jsCode: ''
                },
                {
                    class: '',
                    description: 'Fixed menu on right, toggled by button (open) and close button inside the module passed by the key contentData (to close the menu) and dimmedFixed={true}.',
                    html: (
                        <MenuFixedRight
                            id=""
                            class="box-fixed-right-example-2"
                            direction='top'
                            dimmed={true}
                            isOpen={this.state.isOpen2}
                            animation={true}
                            performance={true}
                            function={this.openMenu2}
                            functionData={'second box clicked'}
                            dimmedFixed={true}
                            open={
                                <Buttons
                                    link={false}
                                    class="button-box-fixed-right-example-2"
                                    data={
                                        [
                                            {
                                                text: 'open fixed box right',
                                                status: this.state.isOpen2 ? 'disabled' : 'warning'
                                            }
                                        ]
                                    }
                                />
                            }
                            contentData={
                                <span>
                                    <Buttons
                                        link={false}
                                        class="button-box-fixed-example-2"
                                        data={
                                            [
                                                {
                                                    text: 'close fixed menu',
                                                    status: 'default',
                                                    function: this.closeMenu2
                                                }
                                            ]
                                        }
                                    />
                                </span>
                            }
                        />
                    ),
                    cssCode: 
`.box-fixed-right-example-2{
    
    .button-box-fixed-example-2{
        max-width: 220px;
        margin:0 auto;
    }
    
    .react-divcreator-menu-fixed-right__content{
        .react-divcreator-buttons{
            flex-direction: column;
    
            .react-divcreator-buttons__single-button{
                margin:10px 0;
            }
        }
    }
    
    .react-divcreator-buttons__single-button:hover{
        cursor: pointer;
    }

    .react-divcreator-menu-fixed-right__content{
        background-color:rgb(39,39,39);
    }
}`
                    ,
                    reactCode: (
`import { MenuFixedRight } from 'react-divcreator';
            
<MenuFixedRight
    id=""
    class="box-fixed-right-example-2"
    direction='top'
    dimmed={true}
    isOpen={this.state.isOpen2}
    animation={true}
    performance={true}
    function={this.openMenu2}
    functionData={'second box clicked'}
    dimmedFixed={true}
    open={
        <Buttons
            link={false}
            class="button-box-fixed-right-example-2"
            data={
                [
                    {
                        text: 'open fixed box right',
                        status: this.state.isOpen2 ? 'disabled' : 'warning'
                    }
                ]
            }
        />
    }
    contentData={
        <span>
            <Buttons
                link={false}
                class="button-box-fixed-example-2"
                data={
                    [
                        {
                            text: 'close fixed menu',
                            status: 'default',
                            function: this.closeMenu2
                        }
                    ]
                }
            />
        </span>
    }
/>`
                    ),
                    jsCode: (
`
constructor(props) {
    super(props);        
    this.state = {
        isOpen2: false
    };
}

openMenu2(clickEvent, moduleState, customData) {
    this.setState({
        isOpen2: true
    });
}

closeMenu2() {
    this.setState({
        isOpen2: false
    });
}`
                    )
                }
            ]
        };
    }

    generateSubTitle() {

        if (this.subTitle) {

            return (
                <h1 className='context-of-code-subtitle'>
                    {
                        this.subTitle
                    }
                </h1>
            );
        }

        return null;
    }

    generateCodeExamples() {
        let cls = '';
        this.uuids = [];

        if (1 <= this.examples.length) {
            return this.examples.map((example, counter) => {
                
                counter += 1;
                cls = `divcreator-sourcecode-example ${example.class}`;
                let uuid = `uuid-${customKey()}--${customKey()}`;
                this.uuids.push(uuid);

                return (
                    <div id={uuid} key={customKey()} className={cls}>
                        {
                            example.html &&
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={true}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>HTML example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    {
                                                        example.description &&
                                                        <p className='divcreator-sourcecode-example-p'>
                                                            {
                                                                example.description
                                                            }
                                                        </p>
                                                    }
                                                    <div className="box-content--div">
                                                        {
                                                            example.html
                                                        }
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                        {
                            this.state.renderEntrys &&
                            <div className="divcreator-input-live-example">
                                <h1>Total available entrys: {this.state.entrys.length}</h1>
                                {
                                    this.state.entrys.map((entry, index) => {
                                        return (
                                            <p key={customKey()}>
                                                {index + 1} {". "} {entry}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        }
                        {
                            example.reactCode && example.reactCode.length &&
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={true}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>React code for example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    <div className="box-content--div">
                                                        <div className="box-content--div">
                                                            <Sourcecode
                                                                class='divcreator-sourcecode-background divcreator-sourcecode-code divcreator-sourcecode-background-react divcreator-sourcecode-original-code'
                                                                showLines={true}
                                                                match={markSpecialWords}
                                                                data={example.reactCode}
                                                            />
                                                            {
                                                                document.queryCommandSupported &&
                                                                <span className="copy-to-clipboard-holder">
                                                                    <span
                                                                        title="Copy to clipboard"
                                                                        className="copy-to-clipboard"
                                                                        onClick={(e) => copyToClipBoard(e, example.reactCode, document.documentElement.scrollTop)}
                                                                    >
                                                                        {
                                                                            `${copyToClipboardText()} example`
                                                                        }
                                                                        <i className="far fa-copy"></i>
                                                                    </span>
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                        {
                            example.jsCode && example.jsCode.length &&
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={true}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>Javascript code for example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    <div className="box-content--div">
                                                        <div className="box-content--div">
                                                            <Sourcecode
                                                                class='divcreator-sourcecode-background divcreator-sourcecode-code divcreator-sourcecode-background-js divcreator-sourcecode-original-code'
                                                                tabSpaces={0}
                                                                showLines={true}
                                                                match={markSpecialWords}
                                                                data={example.jsCode}
                                                            />
                                                            {
                                                                document.queryCommandSupported &&
                                                                <span className="copy-to-clipboard-holder">
                                                                    <span
                                                                        title="Copy to clipboard"
                                                                        className="copy-to-clipboard"
                                                                        onClick={(e) => copyToClipBoard(e, example.jsCode, document.documentElement.scrollTop)}
                                                                    >
                                                                        {
                                                                            `${copyToClipboardText()} example`
                                                                        }
                                                                        <i className="far fa-copy"></i>
                                                                    </span>
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                        {
                            example.cssCode && example.cssCode.length &&
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={false}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>SCSS code for example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    <div className="box-content--div">
                                                        <div className="box-content--div">
                                                            <Sourcecode
                                                                class='divcreator-sourcecode-background divcreator-sourcecode-code divcreator-sourcecode-background-js divcreator-sourcecode-original-code'
                                                                tabSpaces={0}
                                                                showLines={true}
                                                                match={markSpecialWords}
                                                                data={example.cssCode}
                                                            />
                                                            {
                                                                document.queryCommandSupported &&
                                                                <span className="copy-to-clipboard-holder">
                                                                    <span
                                                                        title="Copy to clipboard"
                                                                        className="copy-to-clipboard"
                                                                        onClick={(e) => copyToClipBoard(e, example.cssCode, document.documentElement.scrollTop)}
                                                                    >
                                                                        {
                                                                            `${copyToClipboardText()} example`
                                                                        }
                                                                        <i className="far fa-copy"></i>
                                                                    </span>
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                    </div>
                )
            })
        }

        return null;
    }

    generateMainDescription() {
        if (this.mainDescription) {

            return (
                <h1 className='context-of-code-main-description'>
                    {
                        this.mainDescription
                    }
                </h1>
            );
        }
        return null;
    }

    generateKeysDescription() {

        if (1 <= this.keys.length) {
            const keys = [];

            for (let x = 0; x <= this.keys.length - 1; x++) {
                const key = this.keys[x].type ? this.keys[x].type : getKeyFromDescription(this.keys[x].description, 'type');

                keys.push({
                    values: [
                        {
                            value: this.keys[x].key ? this.keys[x].key : ''
                        },
                        {
                            value: key
                        },
                        {
                            value: this.keys[x].description ? getKeyFromDescription(this.keys[x].description, 'description') : ''
                        }
                    ]
                });
            }
            
            return <List
                class="keys-for-type"
                id=""
                data={keys}
                responsive={true}
                responsiveX={1024}
                title={
                    <span>
                        <i className="fas fa-table"></i>
                        List
                    </span>
                }
                header={
                    [
                        'Name',
                        'Type',
                        'Description'
                    ]
                }
            />
        }

        return null;
    }

    generateNavigationExamples() {
        const data = [];

        if (this.uuids.length) {
            this.uuids.map((id, index) => {
                data.push(
                    {
                        boxData: (
                            <ButtonsNavigation
                                navigationTo={`#${id}`}
                                navigationTime={300}
                                html={(
                                    <span>
                                        {
                                            `example ${index + 1}`
                                        }
                                    </span>
                                )}
                            />
                        ),
                        attributes: {
                            title: `Navigate to the code example: ${index + 1}`
                        }
                    }
                );
            })
        }
        return data;
    }

    render() {
        this.dispatchData();
        const moduleData = this.moduleData();
        this.subTitle = (moduleData && moduleData.subTitle) ? moduleData.subTitle : '';
        this.examples = (moduleData && moduleData.examples) ? moduleData.examples : [];
        this.keys = (moduleData && moduleData.keys) ? moduleData.keys : [];
        this.mainDescription = (moduleData && moduleData.mainDescription) ? moduleData.mainDescription : '';

        const subTitle = this.generateSubTitle();
        const codes = this.generateCodeExamples();
        const keys = this.generateKeysDescription();
        const mainDescription = this.generateMainDescription();

        return (
            <div className="website--components">
                <div className="content">
                    <LeftMenu />
                    <div className="right-site">
                        <HeaderComponent />
                        {
                            subTitle && subTitle
                        }
                        {
                            mainDescription && mainDescription
                        }
                        {
                            codes && codes
                        }
                        {
                            keys &&
                            <h1 className='title-minimum'>
                                Available keys
                            </h1>
                        }
                        {
                            keys &&
                            <div className="keys-component">
                                {
                                    keys
                                }
                            </div>
                        }
                        <FooterComponents
                            currentItem={this.subTitle}
                        />
                    </div>
                </div>
                <BoxMenu
                    class="boxes-menu-navigator"
                    performance={true}
                    width={50}
                    height={40}
                    borderWidth={1}
                    backgroundColorRoot={'rgba(24,115,204,1)'}
                    openData={<i className="fas fa-ellipsis-h"></i>}
                    closeData={<i className="fas fa-times"></i>}
                    directionX={false}
                    directionY={'bottom'}
                    alignBoxes={'y'}
                    data={this.generateNavigationExamples()}
                />
                <form style={{ display: 'none !important', opacity: 0, position: 'absolute', zIndex: '-1' }}>
                    <textarea
                        id="copy-to-clipboard"
                        value=''
                        readOnly={true}
                    />
                </form>
            </div>
        );
    }
};
export default MenuFixedRightWebsite;
